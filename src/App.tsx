import { ListPhotos } from './sections/Photos/Components/List-Photos';
import { Navbar } from './sections/Photos/Utils/Navbar';


function App() {
    return (
            <div className="w-full container sm:w-full mx-auto">
              <Navbar/>
              <ListPhotos/>
            </div>
    )
}

export default App
