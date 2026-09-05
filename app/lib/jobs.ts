import type { Locale } from "./i18n";

export const JOB_SLUGS = [
  "solidity-engineer",
  "senior-solidity",
  "protocol-engineer",
  "senior-protocol",
  "ux-ui-designer",
  "product-designer",
  "ai-engineer",
  "protocol-ai-engineer",
  "cryptography-researcher",
  "applied-cryptographer",
  "smart-contract-auditor",
  "zk-protocol-engineer",
  "distributed-systems",
  "identity-engineer",
  "ml-engineer",
  "web3-frontend",
  "security-engineer",
  "consensus-engineer",
  "devrel-engineer",
  "protocol-docs",
  "research-engineer-crypto",
] as const;

export type JobSlug = (typeof JOB_SLUGS)[number];

export type JobCopy = {
  title: string;
  team: string;
  summary: string;
  features: string[];
};

export type Job = {
  slug: JobSlug;
  postedAt: string;
  workModel: "remote" | "hybrid" | "onsite";
  employment: "full-time" | "part-time";
  location: string;
  en: JobCopy;
  zh: JobCopy;
};

export const JOBS: Job[] = [
  {
    slug: "solidity-engineer",
    postedAt: "2026-09-03",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "Solidity Engineer",
      team: "Smart contracts",
      summary:
        "Write and ship Solidity for Mainnet dApps, vaults, and IPC settlement adapters.",
      features: [
        "Solidity 0.8, Foundry, and gas-aware design",
        "Upgrade paths and storage layout reviews",
        "Mainnet and Enterprise-facing adapters",
        "Test suites against adversarial cases",
        "Work next to protocol and audit",
      ],
    },
    zh: {
      title: "Solidity 工程师",
      team: "智能合约",
      summary: "为主网应用、金库与 IPC 结算适配器编写并交付 Solidity。",
      features: [
        "Solidity 0.8、Foundry 与 gas 意识设计",
        "升级路径与存储布局评审",
        "面向主网与 Enterprise 的适配器",
        "对抗场景下的测试套件",
        "与协议、审计并肩工作",
      ],
    },
  },
  {
    slug: "senior-solidity",
    postedAt: "2026-09-01",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore / Hong Kong",
    en: {
      title: "Senior Solidity Engineer",
      team: "Smart contracts",
      summary:
        "Own high-value contract surfaces: tokenization, settlement, and cross-rail calls.",
      features: [
        "Lead reviews of production contract PRs",
        "Threat-model new vault and bridge flows",
        "Mentor Solidity engineers",
        "Coordinate with security and protocol",
        "5+ years on EVM production systems",
      ],
    },
    zh: {
      title: "高级 Solidity 工程师",
      team: "智能合约",
      summary: "负责高价值合约面：代币化、结算与跨轨道调用。",
      features: [
        "主持生产合约 PR 评审",
        "为金库与桥流程建模威胁",
        "指导 Solidity 工程师",
        "与安全、协议团队协作",
        "5 年以上 EVM 生产经验",
      ],
    },
  },
  {
    slug: "protocol-engineer",
    postedAt: "2026-09-04",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "Protocol Engineer",
      team: "Protocol",
      summary:
        "Permissioned and permissionless layers, IPC, and the path that keeps dApps up.",
      features: [
        "Consensus, networking, or runtime",
        "Enterprise and Mainnet surfaces",
        "Adversarial conditions, not only happy path",
        "Shipped a chain, bridge, or distributed system",
        "On-call with protocol operators",
      ],
    },
    zh: {
      title: "协议工程师",
      team: "协议",
      summary: "许可与非许可层、IPC，以及保持应用稳定运行的路径。",
      features: [
        "共识、网络或运行时",
        "Enterprise 与主网界面",
        "对抗条件，而不只是快乐路径",
        "曾交付链、桥或分布式系统",
        "与协议运维一起值班",
      ],
    },
  },
  {
    slug: "senior-protocol",
    postedAt: "2026-08-28",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore / remote-friendly",
    en: {
      title: "Senior Protocol Engineer",
      team: "Protocol",
      summary:
        "Set the bar for IPC, validator behavior, and upgrades that must not fork the lab stack.",
      features: [
        "Own a protocol subsystem end to end",
        "Design reviews for consensus changes",
        "Performance under load and partitions",
        "Guide junior protocol engineers",
        "Production incident leadership",
      ],
    },
    zh: {
      title: "高级协议工程师",
      team: "协议",
      summary: "为 IPC、验证者行为与不可分叉实验室栈的升级设定标准。",
      features: [
        "端到端负责一个协议子系统",
        "共识变更的设计评审",
        "负载与分区下的性能",
        "指导初级协议工程师",
        "生产事故指挥",
      ],
    },
  },
  {
    slug: "ux-ui-designer",
    postedAt: "2026-09-02",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "UX / UI Designer",
      team: "Design",
      summary:
        "Design wallets, identity flows, and operator consoles people can actually finish.",
      features: [
        "Figma systems for dark lab surfaces",
        "Wallet and KYC flow critique",
        "Prototype high-risk identity steps",
        "Work with product and frontend",
        "Portfolio of shipped product UI",
      ],
    },
    zh: {
      title: "UX / UI 设计师",
      team: "设计",
      summary: "设计钱包、身份流程与运营控制台，让人真正能走完。",
      features: [
        "实验室深色界面的 Figma 体系",
        "钱包与 KYC 流程评审",
        "高风险身份步骤的原型",
        "与产品、前端协作",
        "已上线产品 UI 作品集",
      ],
    },
  },
  {
    slug: "product-designer",
    postedAt: "2026-08-26",
    workModel: "remote",
    employment: "full-time",
    location: "Remote (APAC overlap)",
    en: {
      title: "Product Designer",
      team: "Design",
      summary:
        "Turn protocol constraints into clear product decisions for Enterprise and BINGO.",
      features: [
        "Research with operators and applicants",
        "Information architecture for consoles",
        "Design for selective disclosure",
        "Partner with protocol PMs",
        "Ship, measure, revise",
      ],
    },
    zh: {
      title: "产品设计师",
      team: "设计",
      summary: "把协议约束变成 Enterprise 与 BINGO 上清楚的产品决策。",
      features: [
        "与运营方、申请者做研究",
        "控制台的信息架构",
        "面向选择性披露的设计",
        "与协议产品经理合作",
        "交付、度量、迭代",
      ],
    },
  },
  {
    slug: "ai-engineer",
    postedAt: "2026-09-03",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "AI Engineer",
      team: "AI",
      summary:
        "Liveness, match, and models that sit on infrastructure you can audit.",
      features: [
        "Computer vision or applied ML",
        "Evaluation and spoof cases",
        "What the model must not store",
        "Ship next to identity engineers",
        "Python / PyTorch or equivalent",
      ],
    },
    zh: {
      title: "人工智能工程师",
      team: "人工智能",
      summary: "活体、比对，以及必须放在可审计基础设施上的模型。",
      features: [
        "计算机视觉或应用机器学习",
        "评测与欺骗样本",
        "明确模型不该存储什么",
        "与身份工程师一起交付",
        "Python / PyTorch 或同等能力",
      ],
    },
  },
  {
    slug: "protocol-ai-engineer",
    postedAt: "2026-08-30",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore / Hong Kong",
    en: {
      title: "Protocol / AI Engineer",
      team: "Protocol + AI",
      summary:
        "Bind model outputs to integrity proofs so a match or score can be audited on-chain.",
      features: [
        "Anchor inference results to the ledger",
        "Comfortable in both Rust/Go and ML stacks",
        "Design the cut: what stays off-chain",
        "Work across protocol and AI teams",
        "Prior production in either domain",
      ],
    },
    zh: {
      title: "协议 / 人工智能工程师",
      team: "协议 + 人工智能",
      summary: "把模型输出绑到完整性证明，让比对或分数可在链上审计。",
      features: [
        "将推理结果锚定到账本",
        "同时熟悉 Rust/Go 与机器学习栈",
        "设计切割：什么留在链下",
        "跨协议与人工智能团队工作",
        "任一领域的生产经验",
      ],
    },
  },
  {
    slug: "cryptography-researcher",
    postedAt: "2026-09-01",
    workModel: "remote",
    employment: "full-time",
    location: "Remote / Singapore",
    en: {
      title: "Cryptography Researcher",
      team: "Research",
      summary:
        "PoIM, Ability-to-Forget, and credential schemes that have to survive legal and adversarial review.",
      features: [
        "Publishable or production crypto research",
        "ZK, signatures, or accumulator designs",
        "Write notes engineers can implement",
        "Review protocol papers internally",
        "PhD or equivalent research track welcome",
      ],
    },
    zh: {
      title: "密码学研究员",
      team: "研究",
      summary: "PoIM、被遗忘权与必须经受法务和对抗评审的凭证方案。",
      features: [
        "可发表或已落地的密码学研究",
        "零知识、签名或累加器设计",
        "写出工程师能实现的笔记",
        "内部评审协议论文",
        "欢迎博士或同等研究轨迹",
      ],
    },
  },
  {
    slug: "applied-cryptographer",
    postedAt: "2026-08-22",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "Applied Cryptographer",
      team: "Identity",
      summary:
        "Take research schemes into BINGO, ParallelWallet, and Enterprise without leaking extra data.",
      features: [
        "Implement and review crypto primitives",
        "Selective disclosure in production",
        "Side-channel and misuse resistance",
        "Pair with identity and wallet engineers",
        "Rust or C++ comfort",
      ],
    },
    zh: {
      title: "应用密码学家",
      team: "身份",
      summary: "把研究方案落到 BINGO、ParallelWallet 与 Enterprise，且不泄露多余数据。",
      features: [
        "实现并评审密码学原语",
        "生产级选择性披露",
        "抗侧信道与误用",
        "与身份、钱包工程师结对",
        "熟悉 Rust 或 C++",
      ],
    },
  },
  {
    slug: "smart-contract-auditor",
    postedAt: "2026-08-29",
    workModel: "remote",
    employment: "full-time",
    location: "Remote",
    en: {
      title: "Smart Contract Auditor",
      team: "Security",
      summary:
        "Review Solidity and adapter contracts before they touch Mainnet or Enterprise.",
      features: [
        "Invariant and fuzzing mindset",
        "Write findings engineers can fix",
        "Bridge and vault attack patterns",
        "Collaborate, do not only gate",
        "Prior audit reports you can share",
      ],
    },
    zh: {
      title: "智能合约审计师",
      team: "安全",
      summary: "在合约接触主网或 Enterprise 之前评审 Solidity 与适配器。",
      features: [
        "不变量与模糊测试思维",
        "写出工程师能修的发现",
        "桥与金库攻击模式",
        "协作，而不只是设闸",
        "可分享的既往审计报告",
      ],
    },
  },
  {
    slug: "zk-protocol-engineer",
    postedAt: "2026-08-20",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "ZK Protocol Engineer",
      team: "Protocol",
      summary:
        "Circuits and verifiers for credentials and Integrity proofs the chains can check.",
      features: [
        "Circom, Halo2, or equivalent",
        "Proof size and verifier cost tradeoffs",
        "Integrate with Solidity verifiers",
        "Identity and PoIM-adjacent work",
        "Strong math or compiler background",
      ],
    },
    zh: {
      title: "零知识协议工程师",
      team: "协议",
      summary: "为链可核验的凭证与完整性证明编写电路与验证器。",
      features: [
        "Circom、Halo2 或同等工具",
        "证明大小与验证成本权衡",
        "接入 Solidity 验证器",
        "身份与 PoIM 相关工作",
        "扎实的数学或编译器背景",
      ],
    },
  },
  {
    slug: "distributed-systems",
    postedAt: "2026-09-02",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore / Thailand",
    en: {
      title: "Distributed Systems Engineer",
      team: "Platform",
      summary:
        "Keep nodes, identity services, and AI pipelines online under real network conditions.",
      features: [
        "Networking, storage, or orchestration",
        "Observability and incident response",
        "Kubernetes or equivalent ops",
        "Latency and partition testing",
        "Comfortable in Go or Rust",
      ],
    },
    zh: {
      title: "分布式系统工程师",
      team: "平台",
      summary: "在真实网络条件下保持节点、身份服务与 AI 流水线在线。",
      features: [
        "网络、存储或编排",
        "可观测性与事故响应",
        "Kubernetes 或同等运维",
        "延迟与分区测试",
        "熟悉 Go 或 Rust",
      ],
    },
  },
  {
    slug: "identity-engineer",
    postedAt: "2026-08-27",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "Cryptography & Identity Engineer",
      team: "Identity",
      summary:
        "Credentials, selective disclosure, and the privacy cut between BINGO, the wallet, and the ledger.",
      features: [
        "Production identity or applied crypto",
        "Explain what must never hit a chain",
        "GDPR-shaped data flows",
        "Wallet and KYC integration",
        "Secure coding reviews",
      ],
    },
    zh: {
      title: "密码学与身份工程师",
      team: "身份",
      summary: "凭证、选择性披露，以及 BINGO、钱包与账本之间的隐私切割。",
      features: [
        "生产级身份或应用密码学",
        "能说明什么绝不能上链",
        "符合 GDPR 形态的数据流",
        "钱包与 KYC 集成",
        "安全编码评审",
      ],
    },
  },
  {
    slug: "ml-engineer",
    postedAt: "2026-08-25",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "Machine Learning Engineer",
      team: "AI",
      summary:
        "Train and evaluate verification models with a paper trail the lab can show.",
      features: [
        "Dataset hygiene and bias checks",
        "On-device or private inference",
        "Metrics that match KYC risk",
        "Collaborate with AI and identity",
        "MLOps for regulated data",
      ],
    },
    zh: {
      title: "机器学习工程师",
      team: "人工智能",
      summary: "训练并评测核验模型，并留下实验室能出示的书面轨迹。",
      features: [
        "数据集卫生与偏差检查",
        "端侧或私有推理",
        "与 KYC 风险对齐的指标",
        "与人工智能、身份协作",
        "面向受监管数据的 MLOps",
      ],
    },
  },
  {
    slug: "web3-frontend",
    postedAt: "2026-09-04",
    workModel: "remote",
    employment: "full-time",
    location: "Remote-friendly",
    en: {
      title: "Web3 Frontend Engineer",
      team: "Product",
      summary:
        "Build wallet, console, and onboarding UIs that match the design system.",
      features: [
        "React / TypeScript production apps",
        "Wallet connect and signing flows",
        "Accessible, fast lab consoles",
        "Pair with UX/UI designers",
        "Next.js experience a plus",
      ],
    },
    zh: {
      title: "Web3 前端工程师",
      team: "产品",
      summary: "构建与设计体系一致的钱包、控制台与开户界面。",
      features: [
        "React / TypeScript 生产应用",
        "钱包连接与签名流程",
        "可访问、快速的实验室控制台",
        "与 UX/UI 设计师结对",
        "有 Next.js 经验更佳",
      ],
    },
  },
  {
    slug: "security-engineer",
    postedAt: "2026-08-18",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore / Hong Kong",
    en: {
      title: "Security Engineer",
      team: "Security",
      summary:
        "Threat models, reviews, and hardening across protocol, identity, and AI services.",
      features: [
        "Application and protocol security",
        "Key custody and secrets review",
        "Purple-team style exercises",
        "Write clear remediation paths",
        "Prior security engineering role",
      ],
    },
    zh: {
      title: "安全工程师",
      team: "安全",
      summary: "覆盖协议、身份与人工智能服务的威胁模型、评审与加固。",
      features: [
        "应用与协议安全",
        "密钥托管与密钥评审",
        "紫队式演练",
        "写出清晰的修复路径",
        "既往安全工程岗位",
      ],
    },
  },
  {
    slug: "consensus-engineer",
    postedAt: "2026-08-15",
    workModel: "onsite",
    employment: "full-time",
    location: "Singapore HQ",
    en: {
      title: "Consensus Engineer",
      team: "Protocol",
      summary:
        "Proof-of-stake and permissioned consensus work that has to stay correct under faults.",
      features: [
        "BFT or PoS implementation experience",
        "Liveness and safety proofs intuition",
        "Simulation and chaos testing",
        "Close work with senior protocol",
        "Systems programming in Rust or C++",
      ],
    },
    zh: {
      title: "共识工程师",
      team: "协议",
      summary: "权益证明与许可共识：在故障下仍须保持正确。",
      features: [
        "BFT 或 PoS 实现经验",
        "活性与安全性证明直觉",
        "仿真与混沌测试",
        "与高级协议工程师紧密合作",
        "Rust 或 C++ 系统编程",
      ],
    },
  },
  {
    slug: "devrel-engineer",
    postedAt: "2026-08-21",
    workModel: "remote",
    employment: "part-time",
    location: "Remote",
    en: {
      title: "Developer Relations Engineer",
      team: "Ecosystem",
      summary:
        "Help external builders ship on Mainnet and IPC with samples they can trust.",
      features: [
        "Write working examples, not slides",
        "Triage builder issues with protocol",
        "Talks and workshops in APAC",
        "Solidity or protocol background",
        "Part-time, expandable to full-time",
      ],
    },
    zh: {
      title: "开发者关系工程师",
      team: "生态",
      summary: "用可信示例帮助外部构建者在主网与 IPC 上交付。",
      features: [
        "写能跑的示例，而不是幻灯片",
        "与协议一起分流构建者问题",
        "亚太地区的分享与工作坊",
        "Solidity 或协议背景",
        "兼职，可扩展为全职",
      ],
    },
  },
  {
    slug: "protocol-docs",
    postedAt: "2026-08-19",
    workModel: "remote",
    employment: "part-time",
    location: "Remote",
    en: {
      title: "Protocol Technical Writer",
      team: "Ecosystem",
      summary:
        "Document Enterprise, Mainnet, and IPC so an engineer can implement without a call.",
      features: [
        "Write from specs and engineer notes",
        "Diagrams for trust boundaries",
        "English primary, Chinese a plus",
        "Comfortable with git and Markdown",
        "Prior protocol or API docs",
      ],
    },
    zh: {
      title: "协议技术文档工程师",
      team: "生态",
      summary: "撰写 Enterprise、主网与 IPC 文档，让工程师无需通话也能实现。",
      features: [
        "根据规格与工程师笔记写作",
        "信任边界示意图",
        "英语为主，中文加分",
        "熟悉 git 与 Markdown",
        "既往协议或 API 文档经验",
      ],
    },
  },
  {
    slug: "research-engineer-crypto",
    postedAt: "2026-08-14",
    workModel: "hybrid",
    employment: "full-time",
    location: "Singapore",
    en: {
      title: "Cryptography Research Engineer",
      team: "Research",
      summary:
        "Prototype PoIM, forget, and credential ideas close enough to production to hand off.",
      features: [
        "Research-to-prototype in weeks, not years",
        "Read papers and write runnable code",
        "Pair with cryptography researchers",
        "Benchmark and threat-note your work",
        "MS/PhD or strong self-directed track",
      ],
    },
    zh: {
      title: "密码学研究工程师",
      team: "研究",
      summary: "把 PoIM、遗忘与凭证想法做到足够接近生产，以便交接。",
      features: [
        "数周而非数年完成研究到原型",
        "读论文并写出可运行代码",
        "与密码学研究员结对",
        "为自己的工作做基准与威胁笔记",
        "硕士/博士或强自主研究轨迹",
      ],
    },
  },
];

export const JOB_PAGE_SIZE = 7;

export function jobCopy(job: Job, locale: Locale): JobCopy {
  return locale === "zh" ? job.zh : job.en;
}

export function isJobSlug(value: string): value is JobSlug {
  return (JOB_SLUGS as readonly string[]).includes(value);
}

export function findJob(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
