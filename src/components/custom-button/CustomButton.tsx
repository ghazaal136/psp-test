import React, { FC } from "react";
import Link from "next/link";

import { ICustomButton } from "./services";
import InnerButton from "./views/InnerButton";

const CustomButton: FC<ICustomButton> = ({
  isLink = false,
  handleClick,
  classNames,
  disabled,
  linkHref = "/",
  ...rest
}) => {
  return isLink ? (
    <Link href={linkHref}>
      <div
        className={`flex items-center justify-center h-14 p-2 rounded-md hover:bg-light-purple ${classNames}`}
      >
        <InnerButton {...rest} />
      </div>
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center h-14 p-2 rounded-md hover:bg-light-purple ${classNames}`}
      disabled={disabled}
    >
      <InnerButton {...rest} />
    </button>
  );
};

export default CustomButton;
