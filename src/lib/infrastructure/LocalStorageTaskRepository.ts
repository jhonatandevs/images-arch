import { useEffect } from "react";
import { PhotoRepository } from "../domain/PhotoRepository";
import { Photo } from "../domain/Photo";
import { useAppSelector } from "../../store";
const images = [
    {
        "type": "Image",
        "id": 2,
        "title": "Grey beach",
        "price": 43,
        "author": "Mary Robinette",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/100/600",
            "small": "https://picsum.photos/id/100/300"
        },
        "likes_count": 1,
        "liked": false,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/2/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 3,
        "title": "A castle",
        "price": 45,
        "author": "Aliette de Bodard",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/101/600",
            "small": "https://picsum.photos/id/101/300"
        },
        "likes_count": 2,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/3/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 4,
        "title": "Red fruits",
        "price": 30,
        "author": "SamyRoad",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/102/600",
            "small": "https://picsum.photos/id/102/300"
        },
        "likes_count": 7,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/4/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 5,
        "title": "Feet don't fail me",
        "price": 12,
        "author": "Djeli Clark",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/103/600",
            "small": "https://picsum.photos/id/103/300"
        },
        "likes_count": 8,
        "liked": false,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/5/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 16,
        "title": "Dream",
        "author": "Brooke Bolander",
        "price": 310,
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/104/600",
            "small": "https://picsum.photos/id/104/300"
        },
        "likes_count": 8,
        "liked": false,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/16/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 6,
        "title": "All flowers",
        "author": "Yoon ha Lee",
        "price": 12,
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/106/600",
            "small": "https://picsum.photos/id/106/300"
        },
        "likes_count": 5,
        "liked": false,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/6/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 7,
        "title": "Wheatness",
        "price": 45,
        "author": "Fran Wilde",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/107/600",
            "small": "https://picsum.photos/id/107/300"
        },
        "likes_count": 9,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/7/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 8,
        "title": "Desert",
        "price": 18,
        "author": "Nisi Shawl",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/108/600",
            "small": "https://picsum.photos/id/108/300"
        },
        "likes_count": 23,
        "liked": false,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/8/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 9,
        "title": "A forest with no wolves",
        "price": 19,
        "author": "SamyRoad",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/109/600",
            "small": "https://picsum.photos/id/109/300"
        },
        "likes_count": 54,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/9/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 10,
        "title": "Sunset",
        "price": 19,
        "author": "Linda Nagata",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/110/600",
            "small": "https://picsum.photos/id/110/300"
        },
        "likes_count": 15,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/10/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 11,
        "title": "Who's gonna drive you",
        "price": 12,
        "author": "Sofia Samatar",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/111/600",
            "small": "https://picsum.photos/id/111/300"
        },
        "likes_count": 22,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/11/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 12,
        "title": "Yellow-ish",
        "price": 11,
        "author": "Kameron Hurley",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/112/600",
            "small": "https://picsum.photos/id/112/300"
        },
        "likes_count": 2,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/12/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 13,
        "title": "Teamaker",
        "price": 26,
        "author": "Jack Mcdevitt",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/113/600",
            "small": "https://picsum.photos/id/113/300"
        },
        "likes_count": 65,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/13/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 14,
        "title": "Sky Escape",
        "price": 95,
        "author": "Jo Walton",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/114/600",
            "small": "https://picsum.photos/id/114/300"
        },
        "likes_count": 76,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/14/likes",
                "methods": "POST"
            }
        ]
    },
    {
        "type": "Image",
        "id": 15,
        "title": "Drops",
        "price": 125,
        "author": "Geoff Ryman",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/115/600",
            "small": "https://picsum.photos/id/115/300"
        },
        "likes_count": 3,
        "liked": true,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/15/likes",
                "methods": "POST"
            }
        ]
    }
]
const ITEMS_PER_PAGE = 2;
export const createLocalStorageTaskRepository = (): PhotoRepository => {

    localStorage.setItem('photos', JSON.stringify(images))

    return {
        getAll: (page: number) => {
            const photos = localStorage.getItem('photos');
            const parsedPhotos = photos ? JSON.parse(photos) as Photo[] : [];
            // Calcular los índices de inicio y fin para la paginación
            const startIndex = (page) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            // Extraer la porción de elementos correspondiente a la página
            const paginatedPhotos = parsedPhotos.slice(startIndex, endIndex);
            // Retornar la promesa para mantener consistencia con el método asíncrono
            return Promise.resolve(paginatedPhotos);
        },
        like: (id: number) => {
            const tasks = localStorage.getItem('photos');
            const parsedTasks = tasks ? JSON.parse(tasks) as Photo[] : [];
            const photoExist = parsedTasks.findIndex((t) => t.id == id);
            //Actualizacion
            if (photoExist !== -1) {
                parsedTasks[photoExist] = { ...parsedTasks[photoExist], likes_count: parsedTasks[photoExist].likes_count++ };
                localStorage.setItem("photos", JSON.stringify(parsedTasks));
            }
            return Promise.resolve();
        },
        search: (text: string) => {
            const tasks = localStorage.getItem('photos');
            const parsedTasks = tasks ? JSON.parse(tasks) as Photo[] : [];
            let filteredElems: Photo[] = []
            if (text) {
                filteredElems = parsedTasks.filter(photo =>
                    photo.title.toLowerCase().includes(text.toLowerCase()) || photo.author.toLowerCase().includes(text.toLowerCase())
                );
                //Crear el registro, si no existe en el array

            }
            return Promise.resolve(filteredElems || []);
        }
    }
}