import { ReactNode } from "react";

type Props = {
  if: boolean;
  children: ReactNode;
};

export const Show = ({ children, if: conditional }: Props) => {
  if (conditional) return <>{children}</>;

  return null;
};
