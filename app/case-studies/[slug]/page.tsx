import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import CaseArticle from "../../components/casestudy/CaseArticle";
import { isCaseSlug } from "../../lib/catalog";

export default async function CaseStudySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isCaseSlug(slug)) notFound();

  return (
    <PageShell>
      <CaseArticle slug={slug} />
    </PageShell>
  );
}
