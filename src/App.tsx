import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ListPhotos } from './sections/Photos/Components/List-Photos';
import { Navbar } from './sections/Photos/Utils/Navbar';
import { Providers } from './store/Providers';


const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <ListPhotos />
        },

    ])
    return routes;
}
function App() {
    return (
        <Providers>
            <BrowserRouter>
                <div className="w-full dark:bg-slate-600 ">
                <div className="container sm:w-full mx-auto ">
                    <Navbar />
                    <AppRoutes />
                </div>
                </div>
            </BrowserRouter >
        </Providers>

    )
}

export default App
