import { Chapter } from "@prisma/client";
import { ApiRoutes } from "./constans";
import { axiosInstance } from "./instance";


export const chapter =  async (): Promise<Chapter[]> => {
    return (
        await axiosInstance.get<Chapter[]>(ApiRoutes.CHAPTER)
    ).data
}