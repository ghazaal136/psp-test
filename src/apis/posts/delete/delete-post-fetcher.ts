import { axiosInstances } from "@/apis/axios";

export const deletePostFetcher = async (id: number): Promise<void> => {
  const url = `/posts/${id}`;
  await axiosInstances.apiServer.request({
    url,
    method: "DELETE",
  });
};