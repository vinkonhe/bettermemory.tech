import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex flex-col items-center pt-[32px]">
            <Link href="/" target="_parent" className="block">
                <div className="w-[180px] sm:w-[230px]">
                    <Image
                        src="/bettermemory_v.svg"
                        alt="logo"
                        width={217}
                        height={20}
                        className="w-full h-auto"
                    />
                </div>
            </Link>
        </div>
    );
}
