import { Photo } from "./Photo";


export interface PhotoRepository{
    getAll(): Promise<Photo[]>;
    like(id: number):Promise<void>;
    search(id:number):Promise<Photo>;
}