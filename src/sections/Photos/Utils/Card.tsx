export interface ImageProps {
    type:            string;
    id:              number;
    title:           string;
    author:          string;
    created_at:      string;
    main_attachment: MainAttachment;
    likes_count:     number;
    liked:           boolean;
    links:           Link[];
  }
  
  export interface Link {
    rel:     string;
    uri:     string;
    methods: string;
  }
  
  export interface MainAttachment {
    big:   string;
    small: string;
  }
export const Card = ({title, likes_count, author, main_attachment }:ImageProps) => {
    return (
        <div className="relative flex w-full  h-[24rem] flex-col  bg-white bg-clip-border text-gray-700 shadow-md  mx-auto w-auto min-w-60 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none w-full h-[16rem] object-contain">
                <img
                    src={main_attachment.big}
                    alt="ui/ux review check"
                    className="h-full w-full object-cover"
                />
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
                <div className="grid grid-cols-2 gap-0 text-center  h-10">
                <div className="tax-center h-full border-r box-border">
                      A
                    </div>
                    <div className="text-center h-full   box-border">
                      B
                    </div>
                </div>
            </div>
        </div>

    )
}
