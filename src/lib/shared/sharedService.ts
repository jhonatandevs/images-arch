import { createPhotoService } from "../application/PhotoService";
import { createFetchPhotoRepository } from "../infrastructure/FetchTaskRepository";
import { createLocalStorageTaskRepository } from "../infrastructure/LocalStorageTaskRepository";
// const repository = createLocalStorageTaskRepository();
const repository = createFetchPhotoRepository();

export const sharedService = createPhotoService(repository);
