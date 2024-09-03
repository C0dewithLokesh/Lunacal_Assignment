import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AddImageBtn } from "./AddImageBtn";

export const GalleryHeader = ({ handleAddImage }) => {
  return (
    <div className="flex justify-between items-center mb-4 w-full gap-5">
      <h2 className="text-xl rounded-2xl font-semibold bg-[#171717] text-white px-9 py-4">
        Gallery
      </h2>

      <div className="flex items-center justify-end flex-wrap gap-8">
        <AddImageBtn onClick={handleAddImage} />

        <div className="flex gap-3">
          <div className="drop-shadow- w-12 h-12 cursor-pointer rounded-full flex justify-center items-center bg-gradient-to-r from-[#303439] to-[#161718] text-[#6F787C] ">
            <FaArrowLeft className="text-2xl " />
          </div>

          <div className="drop-shadow-lg cursor-pointer  w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-[#303439] to-[#161718] text-[#6F787C] ">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
