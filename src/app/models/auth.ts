export interface Registro {
    id_profesor?: string;
    nombres?: string;
    apellidos?:string;
    correo?:string;
    password?:string;
}

export interface InicioSesion {
    id_profesor?: string;
    password?:string;
}