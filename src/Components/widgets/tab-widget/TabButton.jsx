export const TabButton = ({ label, activeTab, setActiveTab, btnClasses }) => {
  return (
    <button
      className={`px-6 py-[10px] flex items-center justify-center rounded-2xl transition-all duration-200 ease-in-out cursor-pointer text-nowrap ${
        activeTab === label
          ? "bg-[#28292F] text-white shadow-2xl shadow-[#121213]"
          : "text-[#A3ADB2]"
      } ${btnClasses}`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );
};
