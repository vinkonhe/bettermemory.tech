import { notFound } from "next/navigation";
import { CustomMDX } from "../../components/mdx";
import { formatDate, getBlogPosts } from "../utils";
import { baseUrl } from "../../sitemap";

export async function generateStaticParams() {
    const posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params; // 使用 await 解析 params
    const post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
        return;
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;
    const ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

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

export default async function Blog({ params }) {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);

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
            <h1 className="pt-[56px] text-[24px] sm:text-[32px] font-bold sm:text-center dark:text-black text-left">
                {post.metadata.title}
            </h1>
            <div className="flex flex-col sm:items-center items-start pt-[24px] dark:text-black">
                <div className="grid opacity-70 sm:grid-cols-[120px_1fr] gap-0.5 text-mono text-[14px] dark:text-black">
                    <div>Published:</div>
                    {formatDate(post.metadata.publishedAt)}
                    <div className="max-sm:mt-2">Author:</div>
                    <div>{post.metadata.author}</div>
                </div>
            </div>
            <article className="prose sm:text-[16px] text-[14px]">
                <CustomMDX source={post.content} />
            </article>
        </section>
    );
}
