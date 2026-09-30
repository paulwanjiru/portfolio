import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

// In-memory rate-limiter map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 30;

    const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < windowMs);
    if (timestamps.length >= maxRequests) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a minute before making more requests." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    const body = await req.json();
    const query = (body.query || body.message || "").toLowerCase().trim();

    if (!query) {
      return NextResponse.json({ error: "Missing 'query' or 'message' parameter" }, { status: 400 });
    }

    let responseText = "";

    if (query.includes("paul") || query.includes("developer") || query.includes("about") || query.includes("wanjiru") || query.includes("who")) {
      responseText = `Paul Wanjiru is a Full-Stack Software Engineer, Systems Architect, and Technical Lead based in Nakuru City, Kenya. He builds production-grade web systems, educational portals, and commercial e-commerce stores with automated M-PESA integration.`;
    } else if (query.includes("project") || query.includes("portfolio") || query.includes("work") || query.includes("college") || query.includes("food")) {
      const projectTitles = PORTFOLIO_DATA.projects.map(p => p.title).join(", ");
      responseText = `Paul has developed live production systems including: ${projectTitles}.`;
    } else if (query.includes("stack") || query.includes("technology") || query.includes("language") || query.includes("skills")) {
      responseText = `Core technical stack: Next.js 16, React 19, TypeScript, PHP 8, MySQL/MariaDB, Linux VPS, Nginx, and M-PESA Daraja STK Push APIs.`;
    } else if (query.includes("service") || query.includes("offer") || query.includes("hire")) {
      responseText = `Paul offers Web Development & Design, Custom Software Systems, Linux Web Hosting & VPS, and Enterprise Computer Hardware Supply.`;
    } else if (query.includes("contact") || query.includes("whatsapp") || query.includes("phone") || query.includes("email") || query.includes("reach")) {
      responseText = `You can reach Paul Wanjiru directly on WhatsApp / Phone at +254 114 988 331 or via email at infrabitsystems@gmail.com.`;
    } else {
      responseText = `Paul Wanjiru is a Full-Stack Developer & Systems Builder in Kenya. Reach him directly on WhatsApp at +254 114 988 331 or email infrabitsystems@gmail.com.`;
    }

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to process chat query" }, { status: 500 });
  }
}
