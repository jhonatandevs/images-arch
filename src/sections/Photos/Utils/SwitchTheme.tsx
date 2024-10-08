import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../../store/theme/themeSlice";
import { useAppSelector } from "../../../store";

export const SwitchTheme = () => {
    const dark = useAppSelector(state => state.theme.dark);
    const dispatch = useDispatch();
    const toggleDarkMode = () => {
        dispatch(change())
    };

    useEffect(() => {
        if (dark) {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [dark]);
    return (
        <div className="bg-white dark:bg-slate-600  w-full flex pl-3 items-center transition-all ease-in-out">
            <div className="flex flex-row justify-between toggle">
                <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="dark-toggle"
                            className="checkbox hidden"
                            checked={dark}
                            onChange={toggleDarkMode}
                        />
                        <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                        <div className={`dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition transform ${dark ? 'translate-x-full' : ''}`}></div>
                    </div>
                    <div className="ml-3 dark:text-white text-gray-900 font-medium">
                        Dark Mode
                    </div>
                </label>
            </div>
        </div>
    )
}
