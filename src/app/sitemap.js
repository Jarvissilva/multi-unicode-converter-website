import converters from "data/converters";

export default function sitemap() {
  const foundConverters = converters.map((c) => ({
    url: `https://fontunicoder.com/${c.slug}`,
  }));

  return [
    { url: "https://fontunicoder.com" },
    ...foundConverters,
    { url: "https://fontunicoder.com/about-us" },
    { url: "https://fontunicoder.com/contact-us" },
    { url: "https://fontunicoder.com/privacy-policy" },
  ];
}
