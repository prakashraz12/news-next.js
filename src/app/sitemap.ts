// sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://news-next-js-three.vercel.app/";
    
    const routes = [
        { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/home/coverstory`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/home/news/[id]`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/home/gallery`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/province/gallery`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/story/gallery`, lastModified: new Date().toISOString() }
    ];

    return routes;
}
