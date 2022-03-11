
export interface Actividades {
    id?:string;
    name?:string;
    image?:string;
    category?:string;
    status?:string;
    rating?:number
}

export interface ImgMemo {
    id: number,
    avatar: string
}

export interface Image {
    id?: number,
    avatar?: string,
    clicked?:boolean
    paired?:boolean;
    serialNumber?:number;
}

export class RootObject {
    data: ImgMemo[]=[];
}

