import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { ListPhotos } from '../path/to/ListPhotos';
// import { createFetchPhotoRepository } from '../path/to/your/repository';
// import { Provider } from 'react-redux';
// import { store } from '../../../store';

import { createPhotoService } from "../../../../lib/application/PhotoService";
import { PhotoRepository } from "../../../../lib/domain/PhotoRepository";
import { createFetchPhotoRepository } from "../../../../lib/infrastructure/FetchTaskRepository";
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import { ListPhotos } from './List-Photos';
import { sharedService } from '../../../../lib/shared/sharedService';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const imagesMock = [
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
    }
]
describe('Repository fetch getAll', () =>{
    beforeEach(() => {
        fetchMock.resetMocks();
      });
      test("getAll",async ()=>{
        fetchMock.mockResponseOnce(JSON.stringify(imagesMock));
        const result = await sharedService.getAll(0);
        expect(result).toEqual(imagesMock);
       })
       test("getAll url",async ()=>{
        fetchMock.mockResponseOnce(JSON.stringify(imagesMock));
        await sharedService.getAll(0);
        expect(fetchMock).toHaveBeenCalledWith('http://localhost:3100/images?page=0');
       })
}

)