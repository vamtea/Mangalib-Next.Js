import { MangaItem } from "@prisma/client";
import { ApiRoutes } from "./constans";
import { axiosInstance } from "./instance";


export const mangaItem = async (): Promise<MangaItem[]> => {
    return (
        await axiosInstance.get<MangaItem[]>(ApiRoutes.MANGA_ITEM)
    ).data
}