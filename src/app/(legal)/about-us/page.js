import { H1, InternalLink, P } from "components/content";

export const metadata = {
  title: "About Us - FontUnicoder",
  alternates: {
    canonical: "https://fontunicoder.com/about-us",
  },
};

export default function Page() {
  return (
    <>
      <div className="text-center py-[clamp(1rem,5vw,2.25rem)]">
        <H1>About Us</H1>
      </div>
      <div className="space-y-5">
        <P>
          Welcome to FontUnicoder, In this website you find converters for
          popular fonts like Chanakya, Zawgyi, and more to Unicode. Converting
          non unicode font Text to unicode text ensure that your text is
          compatible, readable, and easily shared across devices and systems,
          improving accessibility so we have created this website where you can
          transform your text written in non unicoded fonts into Unicode
          representation.
        </P>
        <P>
          If you have any questions, feedback, or suggestions, please don't
          hesitate to <InternalLink href="/contact-us">contact us</InternalLink>
          . We value your feedback and are here to assist you in making the most
          of our font conversion service.
        </P>
      </div>
    </>
  );
}
