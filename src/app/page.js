import converters from "data/converters";
import Card from "components/card";
import { H1, P } from "components/content";

export const metadata = {
  title: "FontUnicoder - All Font Converter",
  alternates: {
    canonical: "https://fontunicoder.com",
  },
};

export default function Page() {
  return (
    <>
      <div className="text-center py-[clamp(1rem,5vw,2.25rem)]">
        <H1>FontUnicoder All Font Converter</H1>
        <P>Easily convert your fonts to unicode and vice versa in seconds</P>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-5">
        {converters.map((converter) => (
          <Card
            title={converter.title}
            link={converter.slug}
            description={`Easily convert your ${converter.title.toLowerCase()} in seconds`}
          />
        ))}
      </div>
    </>
  );
}
