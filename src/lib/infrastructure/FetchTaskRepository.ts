import { Photo } from "../domain/Photo";
import { PhotoRepository } from "../domain/PhotoRepository";

export const createFetchPhotoRepository =(): PhotoRepository=>{
    return{
        getAll:async(page:number)=>{
            const response= await fetch(`http://localhost:3100/images?page=${page}`);
            const photos= await response.json() as Photo[];
            return photos
        },
        like: async (id:number)=>{
            await fetch(`http://localhost:3100/images/:${id}/likes`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
            })
        },
        search: async (id:number)=>{
            const response= await fetch(`http://localhost:3100/images?id=${id}`);
            const photo= await response.json() as Photo;
            return photo
        }
    }
}