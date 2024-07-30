"use client";
import { useState } from "react";
import Image from "next/image";
import { preetiToUnicode } from "functions/preeti-converter";
import { InternalLink, H2, P, ExternalLink } from "components/content";

export default function Page() {
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    setOutput(preetiToUnicode(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <textarea
          placeholder="Enter your preeti text"
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
        <H2>What is Preeti?</H2>
        <P>
          <ExternalLink href="https://nepalifonts.net/fonts/preeti-normal">
            Preeti
          </ExternalLink>{" "}
          is a popular font used in nepal for the Nepali language, It is used
          for writing in the Devanagari script, It is a non unicode font but you
          can use our preeti unicode converter to convert it into unicode.
        </P>

        <H2>Preeti keyboard layout</H2>
        <Image
          src="/preeti-keyboard-layout.jpg"
          alt="Preeti keyboard layout"
          layout="responsive"
          width={100}
          height={100}
        />
        <H2>Why convert Preeti to unicode?</H2>
        <P>
          Converting Preeti Text to Unicode is very important as unicode is the
          standard encoding used in today's system, so inorder to support your
          Preeti text on different system you need to convert it to unicode
          which you can do online by using our tool.
        </P>
      </div>
    </>
  );
}
