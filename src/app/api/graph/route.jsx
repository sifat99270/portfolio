import { NextResponse } from "next/server";


export async function GET(req, res) {
    const obj = {
        metadataBase: 'https://portfolio-sifat99270s-projects.vercel.app',
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

        openGraph: "https://portfolio-sifat99270s-projects.vercel.app/graph.png"
    }
    return NextResponse.json({
        status: "success", data: obj
    })

}