"use client";

import React from "react";
import type { ProductSlug } from "../lib/catalog";

const box =
  "fill-[#162533] stroke-[#2CCFD3]/50 stroke-[1.2]";
const label = "fill-white text-[10px] font-semibold";
const sub = "fill-[#94a3b8] text-[8px]";

export default function ArchitectureDiagram({
  variant,
}: {
  variant: ProductSlug;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-[#070E17] p-4 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0E7C86] blur-3xl opacity-20" />
      <svg
        viewBox="0 0 640 280"
        className="relative z-10 w-full h-auto"
        role="img"
        aria-label="Architecture"
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#2CCFD3" />
          </marker>
        </defs>
        <Diagram variant={variant} />
      </svg>
    </div>
  );
}

function Flow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#2CCFD3"
      strokeWidth="1.6"
      strokeDasharray="6 6"
      markerEnd="url(#arrow)"
      className="animate-dash-flow"
    />
  );
}

function Node({
  x,
  y,
  w,
  h,
  title,
  caption,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  caption: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" className={box} />
      <text x={x + 14} y={y + 28} className={label}>
        {title}
      </text>
      <text x={x + 14} y={y + 46} className={sub}>
        {caption}
      </text>
    </g>
  );
}

function Diagram({ variant }: { variant: ProductSlug }) {
  switch (variant) {
    case "enterprise":
      return (
        <>
          <Node x={24} y={90} w={150} h={70} title="Operators" caption="Known validators" />
          <Node x={230} y={90} w={180} h={70} title="Enterprise ledger" caption="Permissioned state" />
          <Node x={460} y={40} w={150} h={70} title="PoIM" caption="Integrity attest" />
          <Node x={460} y={160} w={150} h={70} title="Forget" caption="Erasure path" />
          <Flow x1={174} y1={125} x2={230} y2={125} />
          <Flow x1={410} y1={110} x2={460} y2={75} />
          <Flow x1={410} y1={140} x2={460} y2={195} />
        </>
      );
    case "bingo":
      return (
        <>
          <Node x={24} y={90} w={150} h={70} title="Live capture" caption="Anti-spoofing" />
          <Node x={230} y={90} w={160} h={70} title="BINGO match" caption="Selfie to ID" />
          <Node x={450} y={90} w={160} h={70} title="Credential" caption="Reusable proof" />
          <Flow x1={174} y1={125} x2={230} y2={125} />
          <Flow x1={390} y1={125} x2={450} y2={125} />
        </>
      );
    case "mainnet":
      return (
        <>
          <Node x={24} y={90} w={150} h={70} title="dApps" caption="Public contracts" />
          <Node x={230} y={90} w={170} h={70} title="Mainnet L1" caption="Proof-of-stake" />
          <Node x={460} y={90} w={150} h={70} title="IPC" caption="To Enterprise" />
          <Flow x1={174} y1={125} x2={230} y2={125} />
          <Flow x1={400} y1={125} x2={460} y2={125} />
        </>
      );
    case "ipc":
      return (
        <>
          <Node x={24} y={90} w={170} h={70} title="Enterprise" caption="Confidential path" />
          <Node x={235} y={90} w={160} h={70} title="IPC hop" caption="Proof + value" />
          <Node x={440} y={90} w={170} h={70} title="Mainnet" caption="Public settlement" />
          <Flow x1={194} y1={125} x2={235} y2={125} />
          <Flow x1={395} y1={125} x2={440} y2={125} />
        </>
      );
    case "wallet":
      return (
        <>
          <Node x={24} y={90} w={150} h={70} title="Device" caption="Biometric unlock" />
          <Node x={220} y={90} w={170} h={70} title="ParallelWallet" caption="Keys + credentials" />
          <Node x={440} y={40} w={170} h={70} title="BINGO" caption="Issuance" />
          <Node x={440} y={160} w={170} h={70} title="dApp / merchant" caption="Selective disclosure" />
          <Flow x1={174} y1={125} x2={220} y2={125} />
          <Flow x1={390} y1={110} x2={440} y2={75} />
          <Flow x1={390} y1={140} x2={440} y2={195} />
        </>
      );
    case "ai-infra":
      return (
        <>
          <Node x={24} y={90} w={160} h={70} title="Controlled data" caption="Named environment" />
          <Node x={230} y={90} w={160} h={70} title="Model" caption="Match / risk" />
          <Node x={440} y={90} w={170} h={70} title="Anchored result" caption="Auditable output" />
          <Flow x1={184} y1={125} x2={230} y2={125} />
          <Flow x1={390} y1={125} x2={440} y2={125} />
        </>
      );
  }
}
