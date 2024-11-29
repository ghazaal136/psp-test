import { axiosInstances } from "@/apis/axios";
import { IPost } from "./_model";

export const getPostsFetcher: () => Promise<IPost[]> = async () => {
  const url = "/posts";
  const response = await axiosInstances.apiServer.request({
    url,
    method: "GET",
  });
  return response.data as IPost[];
};
