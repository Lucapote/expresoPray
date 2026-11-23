import { useEffect, useState } from 'react';
import { AREA_POR_CARRERA } from '../data/carreras.js';

const STORAGE_KEY = 'expresso_estudiante';

export function useEstudiante() {
  const [estudiante, setEstudiante] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Guardar o actualizar perfil en localStorage
  const guardarEstudiante = (nuevoPerfil) => {
    const area = nuevoPerfil.area || AREA_POR_CARRERA[nuevoPerfil.carrera] || 'Otra';
    const perfilActualizado = {
      telefono: nuevoPerfil.telefono?.trim() || '',
      nombre: nuevoPerfil.nombre?.trim() || '',
      carrera: nuevoPerfil.carrera || '',
      area,
      email: nuevoPerfil.email?.trim() || '',
      totalOraciones: Number(nuevoPerfil.totalOraciones) || (estudiante?.totalOraciones || 0),
      visitas: Number(nuevoPerfil.visitas) || ((estudiante?.visitas || 0) + 1),
      actualizadoEl: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(perfilActualizado));
    } catch (err) {
      console.warn('No se pudo guardar en localStorage:', err);
    }

    setEstudiante(perfilActualizado);
    return perfilActualizado;
  };

  // Sumar oraciones a la métrica personal
  const sumarOraciones = (cantidad) => {
    if (!estudiante) return null;
    const nuevoTotal = (estudiante.totalOraciones || 0) + Number(cantidad || 0);
    const actualizado = {
      ...estudiante,
      totalOraciones: nuevoTotal,
      visitas: (estudiante.visitas || 1) + 1,
      actualizadoEl: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(actualizado));
    } catch (err) {
      console.warn('No se pudo actualizar localStorage:', err);
    }

    setEstudiante(actualizado);
    return actualizado;
  };

  const cerrarSesion = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignorar error de storage
    }
    setEstudiante(null);
  };

  return {
    estudiante,
    guardarEstudiante,
    sumarOraciones,
    cerrarSesion,
    estaRegistrado: Boolean(estudiante?.telefono && estudiante?.carrera),
  };
}
