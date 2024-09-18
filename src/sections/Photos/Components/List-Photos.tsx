import { useEffect, useRef, useState } from "react";
import { createPhotoService } from "../../../lib/application/PhotoService";
import { createFetchPhotoRepository } from "../../../lib/infrastructure/FetchTaskRepository";
import Card from "../Utils/Card/Card"
import { Photo } from "../../../lib/domain/Photo";
import { createLocalStorageTaskRepository } from "../../../lib/infrastructure/LocalStorageTaskRepository";
import { useAppSelector } from "../../../store";

// const repository= createFetchPhotoRepository();
const repository = createFetchPhotoRepository();
// const repository = createLocalStorageTaskRepository();

const service = createPhotoService(repository);

export const ListPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showPhotos, setShowPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const filter = useAppSelector(state => state.photos.filter);
  const [hasMore, setHasMore] = useState(true);
  const elementRef = useRef(null)
  const [page, setPage] = useState(0)
  const fetchTasks = (pageNumber: number) => {
    setLoading(true);
    service.getAll(pageNumber)
      .then((photosData) => {
        if (photosData.length == 0) setHasMore(false)
        setPhotos((photos) => [...photos, ...photosData])
        setShowPhotos(photos)
      })
      .catch((error) => console.error(error)
      ).finally(() =>
        setLoading(false))
  }
  useEffect(() => {

  }, [page]);
  useEffect(() => {
    if (filter.length > 0) return;

    fetchTasks(page);

  }, []);
  useEffect(() => {
    if (filter.length > 0) return;
    const observer = new IntersectionObserver(OnIntersection)
    if (observer && elementRef.current) { observer.observe(elementRef.current); loadMorePhotos(); }
    return () => {
      if (observer) observer.disconnect();
    }
  }, [photos, showPhotos]);
  const loadMorePhotos = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // Incrementa la página en 1
    }
  };
  const OnIntersection = async (entries: IntersectionObserverEntry[]) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore && filter.length == 0) fetchTasks(page);
  }
  useEffect(() => {
    if (filter) {
      const filteredElems = photos.filter(photo =>
        photo.title.toLowerCase().includes(filter.toLowerCase()) || photo.author.toLowerCase().includes(filter.toLowerCase())
      );
      setShowPhotos(filteredElems);
    }
    else setShowPhotos(photos)
  }, [filter]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 bg-white dark:bg-slate-600 min-h-4016'>
      {showPhotos.map((image, index) => {
        return (
          <Card key={index} image={image} />
        )
      })}
      {hasMore && filter.length == 0 && (
        <p ref={elementRef}>Loading more images</p>
      )}
    </div>
  )
}