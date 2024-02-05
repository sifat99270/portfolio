import { NextResponse } from "next/server";


export async function GET(req, res) {
    const obj = {
        metadataBase: new URL('https://portfolio-sifat99270s-projects.vercel.app'),
        title: "sifat",
        description: "portfolio website this web site make by sifat",
        keywords: [
            "sifat",
            "rasifat",
            "smn",
            "portfolio",
            "me",
            "i",
            "king",
            "ras",
            "website",
            "portfolio",
            "website",
        ],

        openGraph: {
            title: 'sifat',
            description: 'portfolio',
            url: 'https://portfolio-sifat99270s-projects.vercel.app',
            siteName: 'smn',
            images: [
                {
                    url: 'https://portfolio-sifat99270s-projects.vercel.app/graph.png', // Must be an absolute URL
                    width: 800,
                    height: 600,
                },
                {
                    url: 'https://portfolio-sifat99270s-projects.vercel.app/graph.png', // Must be an absolute URL
                    width: 1800,
                    height: 1600,
                    alt: 'My custom alt',
                },
            ],
            locale: 'en_US',
            type: 'website',

        },
    }
    return NextResponse.json({
        status: "success", data: obj
    })

}