import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";
import { setFilterPhotos } from "../../../store/photos/photoSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();
    function handleText(value:string){
        dispatch(setFilterPhotos(value||''))
    }
    return (
        <div className="w-72 mx-auto">
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                </div>
                <input type="text" 
                id="voice-search" 
                className=" text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-50 bg-gray-50 dark:border-gray-600  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="You're looking for something?" 
                required
                onChange={(event)=>handleText(event.target.value)}
                  />
            </div>
        </div>
    )
}
