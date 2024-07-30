"use client";
import { useState } from "react";
import { zawgyiToUnicode } from "functions/zawgyi-converter";
import { ExternalLink, H2, InternalLink, P } from "components/content";

export default function Page() {
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    setOutput(zawgyiToUnicode(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <textarea
          placeholder="Enter your zawgyi text"
          className="whitespace-pre-wrap p-5 border border-gray-200 rounded-md min-h-[400px] outline-none"
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
        <H2>What is zawgyi?</H2>
        <P>
          <ExternalLink href="https://en.wikipedia.org/wiki/Zawgyi_font">
            Zawgyi
          </ExternalLink>{" "}
          is a popular font encoding system used for typing and displaying
          Myanmar (Burmese) text. It was widely used in Myanmar before the
          adoption of Unicode, which is now the standard for encoding Myanmar
          characters. Zawgyi encoding is still used in some legacy systems and
          older devices. Download fonts from here:{" "}
          <ExternalLink href="https://www.free-fonts.com">
            Free Fonts
          </ExternalLink>
        </P>
        <H2>Why convert zawgyi to unicode?</H2>
        <P>
          Converting Zawgyi Text to Unicode will ensures your text is
          compatible, readable, and easily shared across devices and systems,
          improving accessibility.
        </P>
      </div>
    </>
  );
}
