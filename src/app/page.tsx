// import Input from "./components/input";

export default function Page() {
    return (
        <section>
            <div className="flex flex-col pt-[32px] bg-[#F5F4EF]">
                <a className="cursor-default pt-[16px] text-[16px] font-semibold text-[#0C0A09] selection:bg-black selection:text-[#FFFFFF]">
                    Introduction & Mission
                </a>
                <a className="cursor-default pt-[8px] text-[16px] font-normal text-[#44403C] selection:bg-black selection:text-[#FFFFFF]">
                    <span className="font-semibold">BETTERMEMORY </span>
                    is transforming how we learn and retain knowledge. By
                    harnessing advanced algorithms and neuroscience insights, we
                    create innovative solutions that enhance memory and
                    accelerate learning. Our mission is to empower individuals
                    to reach their full potential, making education more
                    personalized, effective, and engaging for learners today and
                    the visionaries of tomorrow.
                </a>
                <a className="cursor-default pt-[16px] text-[16px] font-semibold text-[#0C0A09] selection:bg-black selection:text-[#FFFFFF]">
                    Partnerships & Investment
                </a>
                <a className="cursor-default pt-[8px] text-[16px] font-normal leading-6 text-[#44403C] selection:bg-black selection:text-[#FFFFFF]">
                    BETTERMEMORY invites partnerships with businesses and
                    schools to innovate education and welcomes investments from
                    individuals or institutions.
                </a>
                {/* <Input></Input> */}

                {/* <div className="my-8">
                    <BlogPosts />
                </div> */}
            </div>
        </section>
    );
}
