export const PRODUCT_SLUGS = [
  "enterprise",
  "bingo",
  "mainnet",
  "ipc",
  "wallet",
  "ai-infra",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export const CASE_SLUGS = [
  "enterprise-privacy",
  "bingo-onboarding",
  "ipc-settlement",
] as const;
export type CaseSlug = (typeof CASE_SLUGS)[number];

export { JOB_SLUGS, JOBS, isJobSlug, type JobSlug } from "./jobs";

export const productMeta: Record<
  ProductSlug,
  {
    image: string;
    diagram: ProductSlug;
    caseSlug?: CaseSlug;
  }
> = {
  enterprise: {
    image: "/images/portfolio/enterprise-office.jpg",
    diagram: "enterprise",
    caseSlug: "enterprise-privacy",
  },
  bingo: {
    image: "/images/work_privid.png",
    diagram: "bingo",
    caseSlug: "bingo-onboarding",
  },
  mainnet: {
    image: "/images/portfolio/mainnet.jpg",
    diagram: "mainnet",
    caseSlug: "ipc-settlement",
  },
  ipc: {
    image: "/images/portfolio/ipc.jpg",
    diagram: "ipc",
    caseSlug: "ipc-settlement",
  },
  wallet: {
    image: "/images/portfolio/wallet-official.jpg",
    diagram: "wallet",
    caseSlug: "bingo-onboarding",
  },
  "ai-infra": {
    image: "/images/portfolio/ai.jpg",
    diagram: "ai-infra",
  },
};

export const caseMeta: Record<
  CaseSlug,
  { image: string; product: ProductSlug }
> = {
  "enterprise-privacy": {
    image: "/images/portfolio/enterprise-office.jpg",
    product: "enterprise",
  },
  "bingo-onboarding": {
    image: "/images/work_privid.png",
    product: "bingo",
  },
  "ipc-settlement": {
    image: "/images/portfolio/ipc.jpg",
    product: "ipc",
  },
};

export function isProductSlug(value: string): value is ProductSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(value);
}

export function isCaseSlug(value: string): value is CaseSlug {
  return (CASE_SLUGS as readonly string[]).includes(value);
}
