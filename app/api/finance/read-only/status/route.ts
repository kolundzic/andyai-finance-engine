import { NextResponse } from "next/server";
import { getFinanceOnlineProofStatus } from "../../../../../src/runtime/finance-online-proof-status";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(getFinanceOnlineProofStatus(), {
    headers: {
      "Cache-Control": "public, max-age=60, s-maxage=300",
    },
  });
}
