import React, { FC } from "react";

import { IPost } from "@/apis/posts/get/_model";
import CustomTable from "@/components/custom-table/CustomTable";
import { tableHead } from "./services";

interface IListPage {
  postList: IPost[];
}

const ListPage: FC<IListPage> = ({ postList }) => {
  return (
    <div className='w-full h-full overflow-auto'>
      <div className='max-h-[calc(100vh-85px)] overflow-auto'>
        <CustomTable
          tableHead={tableHead}
          tableBody={postList}
        />
      </div>
    </div>
  );
};

export default ListPage;
