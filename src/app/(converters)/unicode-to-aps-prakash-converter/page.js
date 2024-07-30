"use client";
import { useState } from "react";
import { unicodeToApsPrakash } from "functions/aps-prakash-converter";
import { InternalLink, P } from "components/content";

export default function Page() {
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    setOutput(unicodeToApsPrakash(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <textarea
          placeholder="Enter your uncode text"
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
    </>
  );
}
