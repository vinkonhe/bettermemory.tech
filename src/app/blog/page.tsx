import { BlogPosts } from "../components/posts";

export const metadata = {
    title: "BETTERMEMORY EdTech - Blog",
    description: "All research and articles published by BETTERMEMORY.",
};

export default function Page() {
    return (
        <section>
            <div className="flex flex-col">
                {" "}
                <a className="cursor-default pt-[48px] sm:text-[16px] text-[14px] font-normal text-[#1E1E1D] ">
                    All research and articles published by BETTERMEMORY.
                </a>
                <BlogPosts />
            </div>
        </section>
    );
}
