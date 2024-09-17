import { Photo } from "./Photo";


export interface PhotoRepository{
    getAll(): Promise<Photo[]>;
    like(task: Photo):Promise<void>;
    search(id:string):Promise<void>;
}