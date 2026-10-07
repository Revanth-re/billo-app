import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Billo – Restaurant Billing", short_name: "Billo", start_url: "/", display: "standalone", background_color: "#FAFAF7", theme_color: "#06484C", icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }] };
}
