import React, { FC } from "react";

import { TInnerButton } from "../services";

const InnerButton: FC<TInnerButton> = ({ text, isLoading, icon: Icon }) => {
  return (
    <>
      {isLoading ? (
        <></>
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
