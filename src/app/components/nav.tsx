import Link from "next/link";

const navItems = {
    "/": {
        name: "home",
    },
    "/blog": {
        name: "research",
    },
};

export function Navbar() {
    return (
        <aside className="items-end justify-end selection:bg-black selection:text-[#FFFFFF] pt-[32px]">
            <div className="">
                <nav className="flex flex-row justify-end mb-[56px]" id="nav">
                    <div className="flex flex-row space-x-0">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="ml-[20px] italic  cursor-pointer opacity-85 hover:opacity-100 font-normal underline sm:text-[16px] text-[14px] hover:decoration-2 dark:text-black"
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
