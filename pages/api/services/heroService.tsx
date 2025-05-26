import { API_ENDPOINTS } from "../endpoints";
import type { HeroData } from "@/src/types";

export async function getHeroData(): Promise<HeroData> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.HERO.LIST}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": "az",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error("[getHeroData] fetch failed:", res.status, txt);
    throw new Error(`Hero data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as HeroData;
  return json;
}
