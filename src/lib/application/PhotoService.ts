import { PhotoRepository } from "../domain/PhotoRepository";


export const createPhotoService = (repository:PhotoRepository)=>({
    getAll: async () => await repository.getAll(),
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