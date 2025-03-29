"use client";

// interface WaitlistProps {
//   title: string;
//   date: string;
//   to: string
// }

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer sm:mt-0 mt-[8px] flex items-center justify-center h-[34px] bg-[#D9D8D3] border border-[#403E37] shadow-[3px_3px_0px_#403E37,inset_1.5px_1.5px_0px_#FFFFFF] hover:bg-[#C4C3BB]"
    >
      <div className="h-[28px] w-[99%] border-[1.5px] border-[#403E37] border-dashed mx-[2px] flex items-center justify-center">
        <a className="truncate text-[14px] px-[8px] text-center select-none dark:text-black">
          {text}
        </a>
      </div>
    </div>
  );
}
