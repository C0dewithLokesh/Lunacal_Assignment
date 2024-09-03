import Separator from "../shared/Separator";
import GalleryWidget from "../widgets/gallery-widget/GalleryWidget";
import TabsWidget from "../widgets/tab-widget/TabsWidget";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-main-gradient pt-[96px] px-[29px]">
      <div className="flex w-full items-start flex-wrap gap-[57px]">
        {/* Left Side */}
        <div className="w-full md:block lg:w-[47%]">
          <div className="bg-[#616161D1] h-[400px] rounded-[27px]"></div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[47%] space-y-4 h-90 flex flex-col items-center gap-[21px] flex-shrink-0 pb-10">
          <TabsWidget />
          <Separator />
          <GalleryWidget />
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
