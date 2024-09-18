import { Photo } from "./Photo";


export interface PhotoRepository{
    getAll(page:number): Promise<Photo[]>;
    like(id: number):Promise<void>;
    search(text:string):Promise<Photo[]>;
}