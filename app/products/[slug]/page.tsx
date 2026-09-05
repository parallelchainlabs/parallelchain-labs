import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import ProductView from "../../components/products/ProductView";
import { isProductSlug } from "../../lib/catalog";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isProductSlug(slug)) notFound();

  return (
    <PageShell>
      <ProductView slug={slug} />
    </PageShell>
  );
}
