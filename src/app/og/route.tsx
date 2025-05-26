import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

async function loadGoogleFont(font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/,
    );

    if (resource) {
        const response = await fetch(resource[1]);
        if (response.status == 200) {
            return await response.arrayBuffer();
        }
    }

    throw new Error("failed to load font data");
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") || "BETTERMEMORY EdTech";

    return new ImageResponse(
        (
            <div tw="flex items-end justify-left w-full h-full bg-[#F5F4EF] dark:bg-[#F5F4EF] pb-[56px]">
                <a tw="text-4xl">{title}</a>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "JetBrainsMono",
                    data: await loadGoogleFont("JetBrains+Mono", title),
                    style: "normal",
                },
            ],
        },
    );
}
