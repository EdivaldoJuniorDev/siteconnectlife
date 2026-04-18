import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog/posts";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "ConnectLife Blog";

export default function OpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? "ConnectLife — Blog";
  const tag = post?.tags?.[0] ?? "ConnectLife";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F0F0E 0%, #1A1A18 60%, #3A1A0E 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#DA6230",
          }}
        >
          <span>ConnectLife</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>{tag}</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "64px",
            lineHeight: 1.1,
            fontWeight: 600,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "20px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>connectlife.com.br/blog</span>
          <span
            style={{
              padding: "10px 20px",
              background: "#C8501A",
              color: "white",
              fontWeight: 500,
            }}
          >
            Ler artigo →
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
