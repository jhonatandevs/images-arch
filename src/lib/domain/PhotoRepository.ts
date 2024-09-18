import { Photo } from "./Photo";


export interface PhotoRepository{
    getAll(page:number): Promise<Photo[]>;
    like(id: number):Promise<void>;
    search(id:number):Promise<Photo>;
}