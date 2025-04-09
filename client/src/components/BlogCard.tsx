import { Card } from "./card";
import { type CardProps } from "./card";

export const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);
