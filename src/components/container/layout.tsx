import { Component, JSX } from "solid-js";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: Component<LayoutProps> = (props) => {
  return (
    <>
      <img
        src="/images/banner.webp"
        class="img-fade relative h-[50vh] w-full object-cover object-top opacity-20 md:h-screen"
      />
      <div class="absolute inset-0">{props.children}</div>
    </>
  );
};