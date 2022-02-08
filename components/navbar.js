import React from "react";
import Link from "next/link";
import Logo from "../public/Logo/Title.svg";
import MobileLogo from "../public/Logo/mobileLogoBlue.svg";
import { MobileMenu } from "./MobileMenu";
import { BiLinkExternal } from "react-icons/bi";
import { useRouter } from "next/router";
import Router from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [navbarOpacity, setNavbarOpacity] = React.useState(0);
  const listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight / 2) {
      let opacity =
        ((window.scrollY - window.innerHeight / 2) / window.innerHeight) * 2;
      setNavbarOpacity(opacity);
    } else {
      setNavbarOpacity(0);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const earlyAccessButton = async () => {
    if (router.pathname == "/sys") {
      await Router.push("/");
      var element = document.getElementById("early-access-div");
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - 130;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      var element = document.getElementById("early-access-div");
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - 130;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className="w-full z-10 fixed h-12 xl:h-14"
      style={{
        background:
          router.pathname == "/sys"
            ? `rgba(255,255,255,${navbarOpacity})`
            : "white",
        boxShadow:
          router.pathname == "/sys"
            ? `4px 8px 20px rgba(109,141,173,${
                navbarOpacity * 0.15 < 0.2 ? navbarOpacity * 0.15 : 0.2
              })`
            : "4px 8px 20px #6D8DAD33",
      }}
    >
      <div className="mx-14 hidden md:flex flex-row h-full">
        <div className="relative h-full content-center items-center">
          <Link href="/">
            <a>
              <Logo className="relative top-1/2 -translate-y-1/2 scale-90" />
            </a>
          </Link>
        </div>
        <div className="flex items-center h-full relative ml-auto mr-0">
          <Link href="/">
            <a
              id={router.pathname == "/" ? "navbarLinkActive" : "navbarLink"}
              className="mx-5 font-semibold text-base xl:text-xl"
            >
              Home
            </a>
          </Link>
          <Link href="/about-us">
            <a
              id={
                router.pathname == "/about-us"
                  ? "navbarLinkActive"
                  : "navbarLink"
              }
              className="mx-5 font-semibold text-base xl:text-xl"
            >
              About Us
            </a>
          </Link>

          <a
            href="https://youtu.be/9v5b6Rf2asM"
            target={"_blank"}
            className="flex mx-5 items-center"
            id="navbarLink"
          >
            <p className="font-semibold text-base xl:text-xl mr-2">
              Elevator Pitch
            </p>
            <BiLinkExternal className="mt-auto mb-auto" />
          </a>

          <a onClick={() => earlyAccessButton()}>
            <p className="ml-5 cursor-pointer font-semibold text-base xl:text-xl text-forevv-blue">
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
            <MobileLogo className="relative -translate-y-1/2 top-1/2 shadow-md rounded-full" />
          </a>
        </Link>
      </div>
    </header>
  );
}
