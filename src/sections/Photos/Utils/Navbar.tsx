import { useState } from "react"
import { SearchInput } from './SearchInput';
import { SwitchTheme } from "./SwitchTheme";

export const Navbar = () => {
    const [openMore, setOpenMore] = useState(false)
    const [open, setOpen] = useState(false)
    
  return (
   <>

{/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> */}
<div className="sticky z-30">
  <div className="antialiased bg-gray-100 ">
  <div className="w-full text-gray-700 bg-white dark:bg-slate-600 dark:text-gray-200 ">
    <div x-data="{ open: true }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between p-4">
        <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline rounded-full">
            <img className="w-10 aspect-square rounded-full" src="./icon.png" alt="icon" />
        </a>
        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"onClick={()=>setOpen(prev=>!prev)} >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
           {!open && ( <path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" ></path>)}
            {open && (<path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>)}
          </svg>
        </button>
      </div>
      <nav  className={`flex-col flex-grow  pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open?'flex':'hidden'}`}>
      <div className="relative flex">
     <div className="sm:left md:right">
     <SearchInput/>
     </div>
      </div>
        <div className="relative flex " x-data="{ open: true }">
          <SwitchTheme/>
          
        </div>    
      </nav>
    </div>
  </div>
</div>
  </div>
  </>
  )
}
