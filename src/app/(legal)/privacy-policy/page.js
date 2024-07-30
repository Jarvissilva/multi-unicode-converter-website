import { H1, H2, InternalLink, P } from "components/content";

export const metadata = {
  title: "Privacy Policy - FontUnicoder",
  alternates: {
    canonical: "https://fontunicoder.com/privacy-policy",
  },
};

export default function Page() {
  return (
    <>
      <div className="text-center py-[clamp(1rem,5vw,2.25rem)]">
        <H1>Privacy Policy</H1>
      </div>
      <div className="space-y-5">
        <P>
          At FontUnicoder (referred to as "we," "our," or "us"), we respect your
          privacy and are committed to protecting your personal information.
          This Privacy Policy outlines how we handle any information collected
          or received from you when you visit and use our website,
          fontunicoder.com (referred to as the "Website"). By accessing or using
          our Website, you acknowledge and agree to the practices described in
          this Privacy Policy.
        </P>
        <H2>Data Collection and Usage</H2>
        <P>
          We would like to inform you that we do not collect or store any
          personal data from our users. When you visit our Website, no
          personally identifiable information, such as your name, email address,
          or contact details, is collected.
        </P>
        <H2>Advertisement Display</H2>
        <P>
          Please note that FontUnicoder may display ads on the Website. These
          advertisements are provided by third-party advertising networks or
          partners. These third parties may use cookies or similar technologies
          to personalize the ads you see based on your browsing activities.
          However, these cookies or technologies do not collect any personally
          identifiable information from you.
        </P>

        <H2>External Links</H2>
        <P>
          Our Website may contain links to external websites that are not owned
          or controlled by FontUnicoder. We are not responsible for the privacy
          practices or the content of these third-party websites. We encourage
          you to review the privacy policies of any third-party websites you
          visit.
        </P>
        <H2>Changes to the Privacy Policy</H2>
        <P>
          We reserve the right to update or modify this Privacy Policy at any
          time, and such changes will be effective upon posting the revised
          Privacy Policy on the Website. We encourage you to review this Privacy
          Policy periodically for any updates or changes.
        </P>
        <H2>Contact Us</H2>
        <P>
          If you have any questions or concerns regarding this Privacy Policy or
          our privacy practices, please{" "}
          <InternalLink href="/contact-us">contact us</InternalLink> thank you
          for using FontUnicoder. We are committed to maintaining your privacy
          and ensuring a safe and secure browsing experience on our Website.
        </P>
      </div>
    </>
  );
}
