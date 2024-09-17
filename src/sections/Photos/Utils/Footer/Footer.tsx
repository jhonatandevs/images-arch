
const Footer = () => {
    console.log("Pidiendo Footer - LAZY COMPONENT")
    return (
        <div className="w-full">
            <footer className="p-4 bg-white dark:bg-slate-600  rounded-lg shadow md:px-6 md:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-white dark:text-gray-400">LAZY Component -  © 2024 <a href="https://className=bite.com" target="_blank" className="hover:underline">Photos</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}
export default Footer;