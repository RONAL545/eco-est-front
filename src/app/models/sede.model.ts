export interface Sede {
  sede_id: number;
  nombre_sede: string;
  ubicacion?: string;
}

export interface Pabellon {
  pabellon_id: number;
  nombre_pabellon: string;
  sede_id: number;
  sede?: Sede;
}
