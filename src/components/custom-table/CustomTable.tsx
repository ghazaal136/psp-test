import React, { FC } from "react";

import { IPost } from "@/apis/posts/get/_model";
import { ITableHead } from "@/containers/list/services";
import CustomButton from "../custom-button/CustomButton";
import { icons } from "@/utils/icons";
import { useTable } from "./hooks/useTable";

interface ICustomTable {
  tableHead: ITableHead[];
  tableBody: IPost[];
}

const CustomTable: FC<ICustomTable> = ({ tableHead, tableBody }) => {
  const { handleDeleteItem } = useTable();

  return (
    <table className='min-w-[64rem] h-full relative'>
      <thead>
        <tr className='bg-light-purple sticky top-0 right-0 left-0 '>
          {tableHead.map((item: ITableHead, index: number) => (
            <td
              key={index}
              className='px-5 py-3 text-center text-white font-medium text-md'
            >
              {item.title}
            </td>
          ))}
          <td></td>
        </tr>
      </thead>
      <tbody>
        {tableBody.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 !== 0 ? "bg-lightest-purple" : ""}
          >
            {tableHead.map((header, colIndex) => {
              const key = header.name === "row" ? "id" : header.name;
              return (
                <td
                  key={colIndex}
                  className='text-center'
                >
                  {row[key as keyof typeof row]}
                </td>
              );
            })}
            <td className='px-5 py-3'>
              <CustomButton
                text=''
                icon={icons.trash}
                classNames={`!rounded-full !w-10 !h-10 ${
                  rowIndex % 2 !== 0
                    ? "hover:bg-white"
                    : "hover:bg-lightest-purple"
                }`}
                handleClick={() => handleDeleteItem(row.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
