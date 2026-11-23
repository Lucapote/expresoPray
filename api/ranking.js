// Endpoint serverless para obtener el ranking agregado por área académica (Vercel Node.js)

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return res.status(200).json({
      success: true,
      data: null,
      mode: 'fallback_to_client_ranking',
    });
  }

  try {
    // Consultar ofrendas con el área del estudiante
    const response = await fetch(
      `${supabaseUrl}/rest/v1/ofrendas?select=total_oraciones,estudiantes(area)`,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
        },
      }
    );

    const rows = await response.json();
    if (!Array.isArray(rows)) {
      return res.status(200).json({ success: true, data: null });
    }

    const map = {};
    rows.forEach((r) => {
      const area = r.estudiantes?.area || 'Otras';
      map[area] = (map[area] || 0) + (Number(r.total_oraciones) || 0);
    });

    const data = Object.entries(map)
      .map(([area, total]) => ({ area, total }))
      .sort((a, b) => b.total - a.total);

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Error calculando ranking:', err);
    return res.status(500).json({ success: false, error: 'Error al consultar ranking' });
  }
}
