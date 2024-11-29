import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deletePostFetcher } from "@/apis/posts/delete/delete-post-fetcher";

export const useTable = () => {
  const queryClient = useQueryClient();

  //Delete and update data
  //? Here updating doesn't happen cause the data doesn't delete from API really. but in network, posts fetch again after deleting one of them.
  const deleteMutation = useMutation({
    mutationFn: deletePostFetcher,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error({error});
    },
  });

  const handleDeleteItem = (id: number) => {
    deleteMutation.mutate(id);
  };

  return {handleDeleteItem}
};
