import Link from "next/link";

export default function Card({ title, description, link }) {
  return (
    <div className="w-full sm:w-[47%] lg:w-[30%] border border-gray-200 rounded-md p-5 break-all">
      <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold capitalize hover:text-blue-500">
        <Link href={`/${link}`}>{title}</Link>
      </h2>
      <p>{description}</p>
    </div>
  );
}
