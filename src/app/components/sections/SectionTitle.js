import React from "react";
import cn from "../lib/cn";

export default function SectionTitle({title = "", children, tittleClass = "", descClass = ""}) {
  return (
    <>
      <h2 className={cn("font-30 text-primary uppercase", tittleClass)}>{title}</h2>
      {children && <p className={cn("font-48 text-dark2 mt-6 font-semibold", descClass)}>{children}</p>}
    </>
  );
}
