// "use client";

import About from "./sections/about";
import Hero from "./sections/hero";

const Components = {
  hero: Hero,
  about: About,
};

export default function RenderComponent({ data = {} }) {
  // console.log("data", data);
  return (
    <div className="">
      {data?.[0]?.contents?.map((item) => {
        const Component = Components[item._type];
        if (!Component) return null;
        return (
          // <Suspense fallback={null} key={item._key} >
          <Component {...item} key={item._key} />
          // </Suspense>
        );
      })}
    </div>
  );
}
