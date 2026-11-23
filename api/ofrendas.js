// Endpoint serverless para registro de ofrendas de estudiantes (Vercel Node.js)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  const { estudiante, consumo } = req.body || {};

  if (!estudiante?.telefono || !estudiante?.carrera) {
    return res.status(400).json({
      success: false,
      error: 'Teléfono y carrera son obligatorios',
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Si aún no se configuraron variables de Supabase en Vercel, responder en modo local
  if (!supabaseUrl || !serviceKey) {
    return res.status(200).json({
      success: true,
      data: {
        mode: 'local_pending_supabase_env',
        telefono: estudiante.telefono,
        area: estudiante.area,
        oraciones: consumo?.totalOraciones || 0,
      },
    });
  }

  try {
    // 1. Upsert en tabla estudiantes usando la REST API oficial de Supabase
    const upsertRes = await fetch(`${supabaseUrl}/rest/v1/estudiantes`, {
      method: 'POST',
      headers: {
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=representation',
      },
      body: JSON.stringify({
        telefono: estudiante.telefono,
        nombre: estudiante.nombre || 'Estudiante Anáhuac',
        carrera: estudiante.carrera,
        area: estudiante.area,
        email: estudiante.email || null,
        updated_at: new Date().toISOString(),
      }),
    });

    const estudiantes = await upsertRes.json();
    const estudianteId = estudiantes?.[0]?.id;

    // 2. Insert en tabla ofrendas
    if (estudianteId) {
      await fetch(`${supabaseUrl}/rest/v1/ofrendas`, {
        method: 'POST',
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          estudiante_id: estudianteId,
          cafes: consumo?.cafes || 1,
          pancitos: consumo?.pancitos || 0,
          ayuda_examenes: Boolean(consumo?.ayudaExamenes),
          oraciones_asignadas: consumo?.lines || [],
          total_oraciones: consumo?.totalOraciones || 0,
        }),
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        estudianteId,
        area: estudiante.area,
        totalOraciones: consumo?.totalOraciones || 0,
      },
    });
  } catch (err) {
    console.error('Error procesando ofrenda en Supabase:', err);
    return res.status(500).json({
      success: false,
      error: 'Error interno al registrar ofrenda',
    });
  }
}
