import Question from "../../assets/icon/question.svg";
import DragIcon from "../shared/DragIcon";

const WidgetWrapper = ({ children }) => {
  return (
    <div className="flex items-start w-full bg-[#363C43] px-3 py-[17px] rounded-[19px] gap-[21px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.40)]">
      <div className="flex flex-col items-center gap-[105px] flex-shrink-0">
        <img src={Question} alt="question-icon" />
        <DragIcon />
      </div>
      {children}
    </div>
  );
};

export default WidgetWrapper;
