import { useState } from "react";
import WidgetWrapper from "../../layouts/WidgetWrapper";
import { TabButton } from "./TabButton";

const tabItems = ["About Me", "Experiences", "Recommended"];

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <WidgetWrapper>
      <div className="flex flex-col items-start gap-[35px]">
        <div className="flex items-center flex-wrap gap-[6px] p-[6px] bg-[#171717] rounded-[23px] text-lg shadow-[0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)]">
          {tabItems.map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              btnClasses={"md:w-[32%] min-w-[78px]"}
            />
          ))}
        </div>

        <div className="text-xl text-[#969696] leading-normal max-h-[175px] overflow-y-scroll custom-scrollbar">
          {activeTab === "About Me" && (
            <p className="pr-1">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br />
              <br />I was born and raised in Albany, NY& have been living in
              Santa Carla for the past 10 years my wife Tiffany and my 4 year
              old twin daughters- Emma and Ella. Both of them are just starting
              school, so my calender is usually blocked between 9-10 AM. This is
              a...
            </p>
          )}

          {activeTab === "Experiences" && (
            <p className="pr-1">
              Experiences... <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus harum minus, maiores ab debitis sequi quas numquam
              dolorem perspiciatis provident?
            </p>
          )}

          {activeTab === "Recommended" && (
            <p className="pr-1">
              Recommended... <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum neque facere quidem voluptas autem architecto dicta eos
              provident itaque dolor.
            </p>
          )}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default TabsWidget;
