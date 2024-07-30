"use client";
import { useState } from "react";
import { chanakyaToUnicode } from "functions/chanakya-converter";
import { ExternalLink, H2, InternalLink, P } from "components/content";

export default function Page() {
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    setOutput(chanakyaToUnicode(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <textarea
          placeholder="Enter your unicode text"
          className="p-5 border border-gray-200 rounded-md min-h-[400px] outline-none"
          id="text"
          onChange={handleConversion}
        ></textarea>
        <textarea
          disabled
          className="bg-sky-50 p-5 border border-gray-200 rounded-md outline-none min-h-[350px]"
          value={output}
        ></textarea>
        <div className="flex justify-between text-gray-600">
          <P>
            If you are facing any issues with the tool{" "}
            <InternalLink href="/contact-us">contact us</InternalLink>
          </P>

          <button
            className="ml-1 px-4 py-2 border border-black rounded-md self-end hover:border-gray-300"
            onClick={(e) => {
              navigator.clipboard.writeText(output);
              e.target.innerText = "Copied";
            }}
          >
            Copy
          </button>
        </div>
      </div>
      <div className="mt-5 space-y-5">
        <H2>What is chanakya?</H2>
        <P>
          <ExternalLink href="https://hindi-fonts.com/fonts/chanakya-regular">
            Chanakya
          </ExternalLink>{" "}
          is a popular font used for typing and displaying text in the
          Devanagari script, which is primarily used for languages such as
          Hindi, Marathi, Sanskrit, and others. The Chanakya font style is
          widely recognized for its distinct and elegant appearance, making it a
          preferred choice for various publications, documents, and digital
          content in Devanagari-script languages.
        </P>
        <H2>Why convert chanakya to unicode?</H2>
        <P>
          Converting Chanakya font to Unicode ensures compatibility,
          interoperability, and proper representation of text across devices and
          platforms. It improves accessibility and future-proofs your content
          for evolving technologies and standards.
        </P>
      </div>
    </>
  );
}
