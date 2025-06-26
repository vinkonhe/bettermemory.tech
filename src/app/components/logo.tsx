import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex flex-col items-center pt-[24px]">
            <a className="" href={"/"} target="_parent">
                <Image
                    src={"/bettermemory_v.svg"}
                    alt={"logo"}
                    width={217}
                    height={20}
                ></Image>
            </a>
        </div>
    );
}
