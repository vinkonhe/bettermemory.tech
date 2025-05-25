interface newButtonProps {
    text: string;
    onClick?: () => void;
}

export default function NewButton({ text, onClick }: newButtonProps) {
    return (
        <div
            onClick={onClick}
            className="transition cursor-pointer sm:mt-0 mt-[8px] flex items-center justify-center h-[34px] bg-[#191919] hover:bg-[#454544] "
        >
            <div className="h-[28px] w-[100%] flex items-center justify-center">
                <a className="truncate text-[14px] px-[12px] text-center select-none text-[#FFFFFF]">
                    {text}
                </a>
            </div>
        </div>
    );
}
