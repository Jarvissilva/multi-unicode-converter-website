import { H1, InternalLink, P } from "components/content";

export const metadata = {
  title: "Contact Us - FontUnicoder",
  alternates: {
    canonical: "https://fontunicoder.com/contact-us",
  },
};

export default function Page() {
  return (
    <>
      <div className="text-center py-[clamp(1rem,5vw,2.25rem)]">
        <H1>Contact Us</H1>
      </div>
      <P className="text-[clamp(1rem,5vw,1.2rem)] font-normal leading-loose">
        If you have face any issues while using any of our tool or have queries
        then feel free to contact us at this{" "}
        <InternalLink href="mailto:jarvissilva212@gmail.com">
          email address.
        </InternalLink>
      </P>
    </>
  );
}
