export const AddImageBtn = ({ ...props }) => {
  return (
    <button
      className="bg-[#FFFFFF08] text-white text-nowrap py-2 px-6 rounded-full shadow-[-0.5px -0.5px 6.9px 0px rgba(255,255,255,0.25), 9px 10px 7.1px 0px rgba(0,0,0,0.40), 0px 0px 48.906px 0px rgba(255,255,255,0.05), 0px 3.26px 3.26px 0px rgba(255,255,255,0.15)] h-full"
      {...props}
      style={{
        boxShadow:
          "-0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25), 9px 10px 7.1px 0px rgba(0, 0, 0, 0.40), 0px 0px 48.906px 0px rgba(255, 255, 255, 0.05), 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(52.27996826171875px)",
      }}
    >
      + ADD IMAGE
    </button>
  );
};
