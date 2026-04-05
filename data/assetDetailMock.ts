import type { Asset, ChartTimeRange } from "@/types";

import { formatUsdCompact, formatUsdPrice } from "@/lib/formatAssetValue";

const RANGE_LENGTH: Record<ChartTimeRange, number> = {
  "1D": 32,
  "1W": 14,
  "1M": 28,
  "1Y": 24,
  ALL: 40,
};

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function seededNoise(seed: number, i: number): number {
  const x = Math.sin(seed * 999 + i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function buildPriceSeries(asset: Asset, range: ChartTimeRange): number[] {
  const n = RANGE_LENGTH[range];
  const seed = hashSeed(`${asset.id}-${range}`);
  const { price, change } = asset;
  const drift = (change / 100) * price * 0.45;
  const amp =
    price *
    (range === "1D" ? 0.012 : range === "ALL" ? 0.09 : range === "1W" ? 0.025 : 0.04);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const t = i / Math.max(n - 1, 1);
    const wobble = (seededNoise(seed, i) - 0.5) * 2 * amp;
    const wave = Math.sin(t * Math.PI * 1.5 + seed * 0.01) * amp * 0.35;
    let v = price + drift * (t - 0.82) + wobble + wave;
    out.push(Math.max(0, v));
  }
  out[out.length - 1] = price;
  return out;
}

export function getChartMeta(asset: Asset, range: ChartTimeRange) {
  const points = buildPriceSeries(asset, range);
  const high = Math.max(...points);
  const seed = hashSeed(asset.id);
  const vol = 15 + (seed % 45) + (seed % 10) / 10;
  return {
    points,
    high24h: high,
    volumeLabel: `$${vol.toFixed(1)}B`,
  };
}

export type DetailStatItem = { labelKey: string; value: string };

export function getDetailStats(asset: Asset): DetailStatItem[] {
  const seed = hashSeed(asset.id);
  const sym = asset.symbol.split("/")[0] ?? asset.symbol;

  if (asset.type === "crypto") {
    const mcT = 0.8 + (seed % 120) / 100;
    const supplyM = 10 + (seed % 25) + (seed % 10) / 10;
    const ath = asset.price * (1.08 + (seed % 20) / 100);
    const rank = (seed % 180) + 1;
    return [
      { labelKey: "marketCap", value: `$${mcT.toFixed(2)}T` },
      {
        labelKey: "circulating",
        value: `${supplyM.toFixed(1)}M ${sym}`,
      },
      { labelKey: "ath", value: formatUsdPrice(ath, asset) },
      { labelKey: "rank", value: `#${rank}` },
    ];
  }

  if (asset.type === "stock") {
    const mc = asset.price * (3e9 + (seed % 2e9));
    const vol = asset.price * (seed % 50) * 1e6;
    const w52 = asset.price * (1.02 + (seed % 15) / 100);
    const pe = 12 + (seed % 40);
    return [
      { labelKey: "marketCap", value: formatUsdCompact(mc) },
      { labelKey: "volumeAvg", value: formatUsdCompact(vol) },
      { labelKey: "week52High", value: formatUsdPrice(w52, asset) },
      { labelKey: "pe", value: `${pe.toFixed(1)}x` },
    ];
  }

  const fmt = (v: number) => formatUsdPrice(v, asset);
  const sessionHigh = asset.price * (1.001 + (seed % 8) / 1000);
  const sessionLow = asset.price * (0.998 - (seed % 8) / 1000);
  const yHigh = asset.price * (1.02 + (seed % 5) / 100);
  const yLow = asset.price * (0.97 - (seed % 5) / 100);
  return [
    { labelKey: "sessionHigh", value: fmt(sessionHigh) },
    { labelKey: "sessionLow", value: fmt(sessionLow) },
    { labelKey: "yearHigh", value: fmt(yHigh) },
    { labelKey: "yearLow", value: fmt(yLow) },
  ];
}

export type MarketInsightMock = { id: string; i18nKey: "one" | "two" | "three" };

export const MOCK_MARKET_INSIGHTS: MarketInsightMock[] = [
  { id: "i1", i18nKey: "one" },
  { id: "i2", i18nKey: "two" },
  { id: "i3", i18nKey: "three" },
];

export function computeRsiFromChange(changePct: number): number {
  const rsi = 50 + changePct * 2.8;
  return Math.min(88, Math.max(18, Math.round(rsi * 10) / 10));
}

export function rsiLabelKey(rsi: number): "strong" | "neutral" | "weak" {
  if (rsi >= 60) return "strong";
  if (rsi <= 40) return "weak";
  return "neutral";
}
