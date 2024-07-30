"use client";
import { useState } from "react";
import { krutiDevToUnicode } from "functions/krutidev-converter";
import { ExternalLink, H2, InternalLink, P } from "components/content";

export default function Page() {
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    setOutput(krutiDevToUnicode(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <textarea
          placeholder="Enter your kruti dev text"
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
        <H2>What is kruti dev?</H2>
        <P>
          <ExternalLink href="https://en.wikipedia.org/wiki/Kruti_Dev">
            kruti dev
          </ExternalLink>{" "}
          is a popular font family which is used in writing devanagri text,
          which is used in languages like hindi, nepali, marathi and sanskrit.
          It is an non unicode font, It is used in variety of applications like
          graphic design softwares, word processors etc.
        </P>
        <H2>Why convert kruti dev to unicode?</H2>
        <P>
          Converting kruti dev Text to Unicode is very important as unicode is
          the standard encoding used in today's system, so inorder to support
          your kruti dev text on different system you need to convert it to
          unicode which you can do online by using our tool.
        </P>
      </div>
    </>
  );
}
