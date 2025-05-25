import Button from "./button";

export default function Input() {
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col pt-[24px] pb-[0px]">
                <input
                    type="email"
                    disabled={true}
                    placeholder="Deactivated"
                    className="cursor-not-allowed mr-[6px] bg-white select-none border focus:outline-none focus:border-2 pl-2 border-black shadow-[inset_2px_2px_0px_#E0DFDB] h-[36px] w-full"
                ></input>
                <Button text="Subscribe" />
            </div>
            <a className="cursor-default pt-[0px] text-[12px] italic font-normal leading-6 text-[#AEACA7] selection:bg-black selection:text-[#FFFFFF]">
                If you want to subscribe, please send an email to
                news@bettermemory.tech.
            </a>
        </div>
    );
}
