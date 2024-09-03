import { useState } from "react";

import WidgetWrapper from "../../layouts/WidgetWrapper";
import { GalleryHeader } from "./GalleryHeader";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004635.jpg?t=st=1725343913~exp=1725347513~hmac=ba3f588a6494c2fac8484f0295e9d41cc8001a3e5d4bc2d3e25a4daed9bab86a&w=740",
    "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004635.jpg?t=st=1725343913~exp=1725347513~hmac=ba3f588a6494c2fac8484f0295e9d41cc8001a3e5d4bc2d3e25a4daed9bab86a&w=740",
    "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004635.jpg?t=st=1725343913~exp=1725347513~hmac=ba3f588a6494c2fac8484f0295e9d41cc8001a3e5d4bc2d3e25a4daed9bab86a&w=740",
  ]);

  const handleAddImage = () => {
    setImages([
      ...images,
      "https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004635.jpg?t=st=1725343913~exp=1725347513~hmac=ba3f588a6494c2fac8484f0295e9d41cc8001a3e5d4bc2d3e25a4daed9bab86a&w=740",
    ]);
  };

  return (
    <WidgetWrapper>
      <div className="flex flex-col items-start gap-[35px] w-full">
        <GalleryHeader handleAddImage={handleAddImage} />
        
        <div className="flex items-center overflow-x-scroll custom-scrollbar gap-5">
          {images.map((ele, index) => (
            <img
              key={index}
              src={ele}
              alt={`Gallery ${index}`}
              className="rounded-lg w-[190px] h-[179px] pointer-events-none pb-1"
            />
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default GalleryWidget;
