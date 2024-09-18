import { PhotoRepository } from "../domain/PhotoRepository";


export const createPhotoService = (repository:PhotoRepository)=>({
    getAll: async (page:number) => await repository.getAll(page),
    like: async (id: number) => {
        // ensureTaskIdIsValid(id);
        // ensureTaskTitleIsValid(title);
        await repository.like(id)
    },
    search: async (id: number) => {
        // ensureTaskIdIsValid(id);
        await repository.search(id);
    }
})