import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { toggleFavorite } from "../../../../store/photos/photoSlice";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Card = (props: any) => {
    const { title, likes_count, author, main_attachment, price, id } = props?.image;
    const isFavorite = useAppSelector(state => {
        return !!state.photos.favorites[id]
    });
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(props?.image));
    }
    useEffect(() => {

    }, [props]);
    return (
        <div className="relative flex w-full  h-[24rem] flex-col  bg-white bg-clip-border text-gray-700 shadow-md  mx-auto max-w-72 min-w-60 transition-transform duration-500 ease-in-out hover:scale-105   ">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none w-full h-[16rem] object-contain hover:bg-black">
                <img
                    src={main_attachment?.big}
                    alt="ui/ux review check"
                    className="h-full w-full object-cover  hover:opacity-50"
                    loading="lazy"
                />
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[5rem] border-l-transparent border-t-[5rem] border-t-white -rotate-90 hover:opacity-50">
                    <div className="absolute -top-[4.5rem] left-[-2.5rem] transform rotate-90  text-black font-bold pl-3  text-2xs">
                        ${price}
                    </div>

                </div>
            </div>
            <div className="h-[8rem] border box-border">
                <div className="py-4 px-2 border-b">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
                        {title}
                    </h4>
                    <p className=" block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased text-center">
                        by <strong>{author}</strong>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-0 text-center  h-11">
                    <div className="tax-center h-full border-r box-border">
                        <div onClick={onToggle}
                            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">

                           <div className="flex items-center">
                            <div className="pr-3 ">
                                {likes_count.toString().padStart(3, '0')}
                            </div>
                            <div className="text-red-600">
                                <AiOutlineLike
                                    className={`text-3xl transition-transform fill-red duration-500 ease-in-out hover:scale-150 ${isFavorite ? 'text-red-500 ' : 'text-gray-200'}`}
                                />
                            </div>
                           </div>

                        </div>
                    </div>
                    <div className="text-center h-full   box-border">
                        B
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card