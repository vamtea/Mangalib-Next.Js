import { Genre } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constans";


export const getAll = async (): Promise<Genre[]> => {
    return (
        await axiosInstance.get<Genre[]>(ApiRoutes.GENRE)
    ).data
}