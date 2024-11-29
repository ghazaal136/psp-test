import React, { FC } from "react";

import { TInnerButton } from "../services";
import Spinner from "@/components/spinner/Spinner";

const InnerButton: FC<TInnerButton> = ({ text, isLoading, icon: Icon }) => {
  return (
    <>
      {isLoading ? (
        <Spinner/>
      ) : (
        <>
          {Icon && Icon()}
          <span className='text-md text-white'>{text}</span>
        </>
      )}
    </>
  );
};

export default InnerButton;
