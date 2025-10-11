/* eslint-disable prefer-const */
import Link from "next/link";
import { formatDate, getBlogPosts } from "../blog/utils";

export function BlogPosts() {
    let allBlogs = getBlogPosts();

    return (
        <div>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-[16px] pt-[14px]"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="w-full flex flex-col space-x-0 md:space-x-2">
                            <p className="cursor-pointer sm:text-[16px] text-[14px] mt-[4px] opacity-85 hover:opacity-100 underline hover:decoration-2 dark:text-black">
                                {post.metadata.title}
                            </p>
                            <p className="cursor-default sm:text-[12px] text-[12px] mt-2 opacity-85 dark:text-black">
                                {formatDate(post.metadata.publishedAt, false)}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    );
}
