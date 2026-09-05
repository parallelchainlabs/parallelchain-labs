import type { Locale } from "./i18n";

export const PROJECT_SLUGS = [
  "enterprise-live",
  "mainnet-live",
  "bingo-live",
  "wallet-live",
  "ipc-live",
  "settlement-ref",
  "onboarding-ref",
  "token-rails-ref",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];
export type ProjectKind = "live" | "reference";

export type Project = {
  slug: ProjectSlug;
  kind: ProjectKind;
  year: string;
  image: string;
  href: string;
  sector: string;
  metrics: [string, string][];
  en: { title: string; summary: string; outcome: string };
  zh: { title: string; summary: string; outcome: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "enterprise-live",
    kind: "live",
    year: "2020",
    image: "/images/portfolio/enterprise-office.jpg",
    href: "/products/enterprise",
    sector: "Institutional ledger",
    metrics: [
      ["PoIM", "Integrity attest"],
      ["Forget", "GDPR-ready"],
      ["Validators", "Known set"],
    ],
    en: {
      title: "ParallelChain Enterprise",
      summary:
        "A live permissioned chain for institutions that need settlement, audit, and a designed erasure path.",
      outcome:
        "Shipped with patented Proof-of-Immutability and Ability-to-Forget — the control compliance teams ask for.",
    },
    zh: {
      title: "ParallelChain Enterprise",
      summary: "面向机构的在运行许可链：结算、审计，以及设计好的擦除路径。",
      outcome: "已交付不可篡改性证明与被遗忘权——合规团队会问的那一层控制。",
    },
  },
  {
    slug: "mainnet-live",
    kind: "live",
    year: "2022",
    image: "/images/portfolio/mainnet.jpg",
    href: "/products/mainnet",
    sector: "Public Layer-1",
    metrics: [
      ["PoS", "Public L1"],
      ["Open", "Anyone verifies"],
      ["IPC", "Private hop"],
    ],
    en: {
      title: "ParallelChain Mainnet",
      summary:
        "A live proof-of-stake public chain for open settlement and dApps, linked to Enterprise through IPC.",
      outcome:
        "Public finality without forcing confidential workflows onto an open validator set.",
    },
    zh: {
      title: "ParallelChain 主网",
      summary: "在运行的权益证明公链，用于开放结算与应用，经 IPC 连接 Enterprise。",
      outcome: "公开最终性，而不必把机密流程放到开放验证者集合上。",
    },
  },
  {
    slug: "bingo-live",
    kind: "live",
    year: "2023",
    image: "/images/work_privid.png",
    href: "/products/bingo",
    sector: "Digital identity",
    metrics: [
      ["Liveness", "Anti-spoof"],
      ["Match", "Selfie to ID"],
      ["SSI", "Reusable proof"],
    ],
    en: {
      title: "BINGO",
      summary:
        "Live AI identity verification: passive anti-spoofing and selfie-to-ID matching, GDPR-ready.",
      outcome:
        "Prove a person once. Later checks use a credential, not another passport scan.",
    },
    zh: {
      title: "BINGO",
      summary: "在运行的人工智能身份核验：被动防伪与自拍证件比对，GDPR 就绪。",
      outcome: "对人证明一次。后续核验用凭证，而不是再扫一次护照。",
    },
  },
  {
    slug: "wallet-live",
    kind: "live",
    year: "2023",
    image: "/images/portfolio/wallet-official.jpg",
    href: "/products/wallet",
    sector: "Wallet & credentials",
    metrics: [
      ["Keys", "Sign + recover"],
      ["Bio", "Device unlock"],
      ["Hold", "SSI attributes"],
    ],
    en: {
      title: "ParallelWallet",
      summary:
        "Live wallet and biometric layer used with BINGO and self-sovereign credentials.",
      outcome:
        "Users unlock with a device, not a seed phrase every time, and disclose only what is asked.",
    },
    zh: {
      title: "ParallelWallet",
      summary: "与 BINGO 及自主权凭证配合使用的在运行钱包与生物识别层。",
      outcome: "用户用设备解锁，而不是每次翻助记词，并且只披露被问到的内容。",
    },
  },
  {
    slug: "ipc-live",
    kind: "live",
    year: "2022",
    image: "/images/portfolio/ipc.jpg",
    href: "/products/ipc",
    sector: "Private–public bridge",
    metrics: [
      ["Hop", "Two rails"],
      ["Proof", "Not a dump"],
      ["Web2→3", "Same stack"],
    ],
    en: {
      title: "Inter-ParallelChain Communication",
      summary:
        "Live bridge between confidential Enterprise workflows and public Mainnet settlement.",
      outcome:
        "Move value and proofs across the cut. The private ledger stays private.",
    },
    zh: {
      title: "跨 ParallelChain 通信",
      summary: "连接 Enterprise 机密流程与主网公开结算的在运行桥梁。",
      outcome: "在切割处移动价值与证明。私有账本保持私有。",
    },
  },
  {
    slug: "settlement-ref",
    kind: "reference",
    year: "2024",
    image: "/images/work_ipc.jpg",
    href: "/case-studies/ipc-settlement",
    sector: "Treasury / markets",
    metrics: [
      ["Private", "Approvals"],
      ["Public", "Settlement"],
      ["NDA", "Ready"],
    ],
    en: {
      title: "Private approval, public settlement",
      summary:
        "Reference deployment: internal approvals stay on Enterprise; counterparties verify the result on Mainnet.",
      outcome:
        "The trust boundary is two lists and one IPC hop — a pattern we reuse with institutions.",
    },
    zh: {
      title: "私有审批，公开结算",
      summary: "参考部署：内部审批留在 Enterprise；对手方在主网上核验结果。",
      outcome: "信任边界是两份清单加一跳 IPC——我们与机构复用的模式。",
    },
  },
  {
    slug: "onboarding-ref",
    kind: "reference",
    year: "2024",
    image: "/images/work_privid.png",
    href: "/case-studies/bingo-onboarding",
    sector: "KYC / account opening",
    metrics: [
      ["Once", "High-friction KYC"],
      ["Reuse", "Credential"],
      ["Less", "Image residue"],
    ],
    en: {
      title: "Onboarding without extra residue",
      summary:
        "Reference deployment: BINGO plus ParallelWallet so downstream systems do not keep another ID gallery.",
      outcome:
        "Security review talks about retention of the match event, not a permanent biometric lake.",
    },
    zh: {
      title: "不留多余残留的开户",
      summary: "参考部署：BINGO 加 ParallelWallet，下游系统不必再留一份证件图库。",
      outcome: "安全评审讨论的是比对事件留存，而不是永久生物识别湖。",
    },
  },
  {
    slug: "token-rails-ref",
    kind: "reference",
    year: "2025",
    image: "/images/portfolio/enterprise.jpg",
    href: "/case-studies/enterprise-privacy",
    sector: "Tokenized assets",
    metrics: [
      ["Issue", "Permissioned"],
      ["Settle", "Public optional"],
      ["Erase", "Personal fields"],
    ],
    en: {
      title: "Tokenized assets on dual rails",
      summary:
        "Ideal pattern: issue and control on Enterprise; optional public settlement; personal data stays forgettable.",
      outcome:
        "Counsel classifies fields. Engineering maps them to persist or forget. The ledger remains auditable.",
    },
    zh: {
      title: "双轨道上的代币化资产",
      summary: "理想模式：在 Enterprise 上发行与控制；可选公开结算；个人数据可遗忘。",
      outcome: "顾问做字段分类。工程映射为持久或遗忘。账本仍可审计。",
    },
  },
];

/** Home mix: two live products + two reference (ideal) deployments. */
export const HOME_PROJECT_SLUGS: ProjectSlug[] = [
  "enterprise-live",
  "bingo-live",
  "settlement-ref",
  "onboarding-ref",
];

export function projectCopy(project: Project, locale: Locale) {
  return locale === "zh" ? project.zh : project.en;
}
