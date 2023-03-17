interface Path {
    folder: string,
    view: string,
    path?: string,
}

export const pathList = [
    {
        folder: "portfolio",
        view: "/portfolio-home"
    }
]

export const netlifyBasePathList: Path[] = [
    {
        folder: "portfolio",
        view: "/portfolio-home",
        path: "index.html"
    },
    {
        folder: "base",
        view: "/error",
        path: "404.html"
    },
]
