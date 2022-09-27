import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {
    title: string
}

const Page: any = (props: Props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return props.children;
};

export default Page;