export interface RecyclingData {
  residuo_id: number;
  pabellon_id: number;
  usuario_id: number;
  fecha: Date;
  plastico_kg?: number;
  carton_papel_kg?: number;
  vidrio_kg?: number;
  r_organico_kg?: number;
  metal_kg?: number;
  r_no_aprovechables_kg?: number;
  papel_en_tachos_kg?: number;
  botellas_canastilla_kg?: number;
}

export interface RecyclingSummary {
  sede: string;
  pabellon: string;
  plastico: number;
  carton_papel: number;
  vidrio: number;
  r_organico: number;
  metal: number;
  r_no_aprovechables: number;
  papel_en_tachos: number;
  botellas_canastilla: number;
  total: number;
}

export interface RecyclingStats {
  totalWeight: number;
  byCategory: {
    plastico: number;
    carton_papel: number;
    vidrio: number;
    r_organico: number;
    metal: number;
    r_no_aprovechables: number;
    papel_en_tachos: number;
    botellas_canastilla: number;
  };
  percentages: {
    plastico: number;
    carton_papel: number;
    vidrio: number;
    r_organico: number;
    metal: number;
    r_no_aprovechables: number;
  };
}
