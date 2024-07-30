import Link from "next/link";
import { redressed } from "app/fonts";

export default function Footer() {
  return (
    <footer
      className={`flex flex-col justify-center items-center gap-5 p-[clamp(1rem,5vw,2.25rem)]`}
    >
      <nav>
        <ul className="flex flex-wrap justify-center gap-4 capitalize">
          <li>
            <Link href="/" className="text-lg font-normal hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-lg font-normal hover:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-lg font-normal hover:text-blue-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-lg font-normal hover:text-blue-500"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link
          href="/"
          className={`bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-[clamp(2rem,5vw,2.5rem)] font-black ${redressed.className} leading-none`}
        >
          FontUnicoder
        </Link>
      </div>
    </footer>
  );
}
