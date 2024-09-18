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

jest.mock('../path/to/your/repository');

describe('ListPhotos Component', () => {
    const repository = createFetchPhotoRepository();

    let mockRepository :PhotoRepository

  beforeEach(() => {
    mockRepository = {
      getAll: jest.fn(),
      search: jest.fn(),
      like: jest.fn(),
    };
    (createFetchPhotoRepository as jest.Mock).mockReturnValue(mockRepository);
  });

  it('should load and display photos correctly', async () => {
    const mockPhotos = [
      { id: 1, url: 'photo1.jpg', likes: 5 },
      { id: 2, url: 'photo2.jpg', likes: 3 }
    ];

    mockRepository.getAll(0);

    render(
      <Provider store={store}>
        <ListPhotos />
      </Provider>
    );

    expect(mockRepository.getAll).toHaveBeenCalledWith(0); // Verifica que se carguen fotos al inicio

    // Espera a que se rendericen las fotos
    await waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(2);
    });
  });

  it('should load more photos on scroll', async () => {
    const mockPhotosPage1 = [{ id: 1, url: 'photo1.jpg', likes: 5 }];
    const mockPhotosPage2 = [{ id: 2, url: 'photo2.jpg', likes: 3 }];

    // Simula la primera carga de fotos
    mockRepository.getAll(3);
    render(
      <Provider store={store}>
        <ListPhotos />
      </Provider>
    );

    // Espera a que se cargue la primera página
    await waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(1);
    });

//     // Simula la segunda carga de fotos (scroll)
//     mockRepository.getAll.mockResolvedValueOnce(mockPhotosPage2);

//     fireEvent.scroll(window, { target: { scrollingElement: { scrollHeight: 1000, scrollTop: 900 } } });

//     await waitFor(() => {
//       const images = screen.getAllByRole('img');
//       expect(images.length).toBe(2);
//     });
//   });

//   it('should filter photos when a filter is applied', async () => {
//     const mockFilteredPhotos = [{ id: 3, url: 'filteredPhoto.jpg', likes: 8 }];

//     mockRepository.search.mockResolvedValueOnce(mockFilteredPhotos);

//     // Simula la aplicación de un filtro
//     render(
//       <Provider store={store}>
//         <ListPhotos />
//       </Provider>
//     );

//     fireEvent.change(screen.getByRole('textbox'), { target: { value: 'landscape' } });

//     await waitFor(() => {
//       const images = screen.getAllByRole('img');
//       expect(images.length).toBe(1);
//       expect(images[0]).toHaveAttribute('src', 'filteredPhoto.jpg');
//     });
//   });
});
})