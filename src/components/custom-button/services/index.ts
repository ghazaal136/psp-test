export interface ICustomButton {
  text: string;
  isLink?: boolean;
  linkHref?: string;
  icon?: () => React.JSX.Element;
  disabled?: boolean;
  isLoading?: boolean;
  classNames?: string;
  handleClick?: () => void;
}

export type TInnerButton = Pick<ICustomButton, "text" | "icon" | "isLoading">;
