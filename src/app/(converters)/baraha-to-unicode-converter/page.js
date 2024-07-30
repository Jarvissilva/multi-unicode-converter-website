"use client";
import { useState } from "react";
import { barahaToUnicode } from "functions/baraha-converter";
import { H2, InternalLink, P } from "components/content";

export default function Page() {
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    setOutput(barahaToUnicode(e.target.value));
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
        <H2>What is Baraha?</H2>
        <P>
          Baraha is a popular hindi font which is used for typing hindi text, It
          is a non unicoded font
        </P>
        <H2>Why convert Baraha to unicode?</H2>
        <P>
          Converting Baraha text to Unicode ensures compatibility,
          interoperability, and proper representation of text across devices and
          platforms. It improves accessibility and future-proofs your content
          for evolving technologies and standards.
        </P>
      </div>
    </>
  );
}
