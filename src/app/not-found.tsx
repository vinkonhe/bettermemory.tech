export default function NotFound() {
    return (
        <section>
            <div className="flex flex-col pt-[32px]">
                <a className="cursor-default pt-[16px] text-[16px] font-semibold text-[#0C0A09] selection:bg-black selection:text-[#FFFFFF]">
                    Page Not Found
                </a>
                <a className="cursor-default pt-[8px] text-[16px] font-normal text-[#44403C] selection:bg-black selection:text-[#FFFFFF]">
                    The page you’re looking for doesn’t exist. Please check the
                    URL or return to the homepage using the navigation below.
                </a>
            </div>
        </section>
    );
}
