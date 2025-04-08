import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";

export default async function Home() {
  const { data } = await getHomePage();
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}
