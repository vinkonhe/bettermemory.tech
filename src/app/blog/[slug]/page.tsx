import { notFound } from "next/navigation";
import { CustomMDX } from "../../components/mdx";
import { formatDate, getBlogPosts } from "../utils";
import { baseUrl } from "../../sitemap";

export async function generateStaticParams() {
    const posts = getBlogPosts(); // 使用 const 替代 let

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// 修复 generateMetadata 为异步函数，并使用 const
export async function generateMetadata({ params }) {
    const { slug } = await params; // 使用 await 解析 params
    const post = getBlogPosts().find((post) => post.slug === slug); // 使用 const 替代 let
    if (!post) {
        return;
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata; // 使用 const 替代 let
    const ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`; // 使用 const 替代 let

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

// 修复 Blog 组件为异步函数，并使用 const
export default async function Blog({ params }) {
    const { slug } = await params; // 使用 await 解析 params
    const post = getBlogPosts().find((post) => post.slug === slug); // 使用 const 替代 let

    if (!post) {
        notFound();
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `${baseUrl}${post.metadata.image}`
                            : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                        url: `${baseUrl}/blog/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: "My Portfolio",
                        },
                    }),
                }}
            />
            <h1 className="pt-[56px] text-[28px] sm:text-[36px] font-bold sm:text-center dark:text-black text-left">
                {post.metadata.title}
            </h1>
            <div className="flex flex-col sm:items-center items-start pt-[24px] dark:text-black">
                <div className="grid opacity-85 sm:grid-cols-[120px_1fr] gap-0.5 text-mono text-sm dark:text-black">
                    <div>Published:</div>
                    {formatDate(post.metadata.publishedAt)}
                    <div className="max-sm:mt-2">Author:</div>
                    <div>{post.metadata.author}</div>
                </div>
            </div>
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
        </section>
    );
}
