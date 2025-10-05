export interface User {
  usuario_id: number;
  username: string;
  password_hash?: string;
  ocupacion: 'PERSONAL' | 'VOLUNTARIO';
  sede_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface LoginRequest {
  usuario: string;
  contrasena: string;
}

export interface LoginResponse {
  token: string;
  usuario: string;
  perfil: number;
}

export interface RegisterUserRequest {
  nombres: string;
  apellidos: string;
  dni?: string;
  codigo?: string;
  sede_id: number;
  ocupacion: 'PERSONAL' | 'VOLUNTARIO';
  username: string;
  password: string;
}
