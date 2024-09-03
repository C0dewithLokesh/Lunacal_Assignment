const DragIcon = () => {
  const items = Array(6).fill(0);
  return (
    <div className="flex items-center w-full">
      <div className="grid grid-cols-2 gap-[2px] w-full">
        {items.map((_, index) => (
          <div
            key={index}
            className="bg-[#4A4E54] w-[10px] h-[10px] rounded-[1.164px]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DragIcon;
