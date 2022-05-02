
export interface Actividades {
    id?:string;
    name?:string;
    image?:string;
    category?:string;
    status?:string;
    rating?:number
}

export interface actividadEstudiante{
    id_estudiante?:string;
    id_Actividad?:string;
    actividad_realizada?:boolean;
    nota_actividad?:number
}

export interface ImgMemo {
    id: number,
    name?: string,
    avatar: string
}

export interface Image extends Partial<Omit<ImgMemo, "name">> {
    clicked?:boolean
    paired?:boolean;
    serialNumber?:number;
}

export class RootObject {
    data: ImgMemo[]=[];
}
export interface ImgVocavulario{
    id: number;
    name: string;
    src: string;
}

export interface CursoElegido {
    id_curso: string
}