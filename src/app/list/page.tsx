import React from "react";

import ListPage from "@/containers/list/ListPage";
import { useQuery } from "@tanstack/react-query";
import { getPostsFetcher } from "@/apis/posts/get/get-post-fetcher";

const List = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsFetcher,
  });

  if (isLoading)
    return (
      <div className='w-full h-full flex items-center justify-center'>
        {/* Loading */}
      </div>
    );

  if (isError)
    return (
      <div className='w-full h-full flex items-center justify-center text-xl font-medium text-main-error'>
        اشتباهی رخ داده لطفا دوباره تلاش کنید.
      </div>
    );

  return data && <ListPage postList={data} />;
};

export default List;
