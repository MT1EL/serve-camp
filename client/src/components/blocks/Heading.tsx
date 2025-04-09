import React from "react";
import type { HeadingProps } from "@/types";
export function Heading({ heading, linkid }: Readonly<HeadingProps>) {
  return (
    <h3 className="article-headline" id={linkid}>
      {heading}
    </h3>
  );
}
