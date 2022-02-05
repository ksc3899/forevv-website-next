import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo/logo.svg";
import MobileLogo from "../public/Logo/mobileLogo.svg";
import { MobileMenu } from "./MobileMenu";
import { BiLinkExternal } from "react-icons/bi";

export default function Navbar() {
  return (
    <header className="w-full z-10 fixed bg-white h-12 shadow-[0_4px_8px_#6D8DAD33] xl:h-14">
      <div className="mx-14 hidden md:flex flex-row h-full">
        <div className="relative h-full content-center items-center">
          <Link href="/">
            <a>
              <Logo className="w-28 xl:w-36 relative top-1/2 -translate-y-1/2 " />
            </a>
          </Link>
        </div>
        <div className="flex items-center h-full relative ml-auto mr-0">
          <Link href="/">
            <a
              id="navbarLink"
              className="mx-5 font-semibold text-base xl:text-xl"
            >
              Home
            </a>
          </Link>
          <Link href="/about-us">
            <a
              id="navbarLink"
              className="mx-5 font-semibold text-base xl:text-xl"
            >
              About Us
            </a>
          </Link>
          <Link href="/sys">
            <a className="flex mx-5 items-center">
              <p className="font-semibold text-base xl:text-xl mr-2">
                Elevator Pitch
              </p>
              <BiLinkExternal className="mt-auto mb-auto" />
            </a>
          </Link>
          <a
            id="navbarLink"
            onClick={() => {
              var element = document.getElementById("early-access-div");
              var headerOffset = 45;
              var elementPosition = element.getBoundingClientRect().top;
              var offsetPosition = elementPosition + window.pageYOffset - 130;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }}
          >
            <p className="ml-5 cursor-pointer font-semibold text-xl text-forevv-blue">
              Get Early Access
            </p>
          </a>
        </div>
      </div>
      <div className="flex md:hidden h-full w-full content-center mx-8">
        {typeof window !== "undefined" ? (
          <MobileMenu className="relative top-1/2 -translate-y-1/2 right-0" />
        ) : null}
        <Link href="/">
          <a>
            <MobileLogo className="relative top-1/2 -translate-y-1/2 shadow-md rounded-full w-6 h-6" />
          </a>
        </Link>
      </div>
    </header>
  );
}
