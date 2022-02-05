import React from "react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-60 py-10 px-7 2xl:h-72 mt-14 lg:mt-24 2xl:mt-36 bottom-0 bg-footer-black">
      <div className="grid grid-cols-12 gap-2 h-full items-center text-white">
        <div className="lg:col-span-2" />
        <div className="col-span-12 lg:col-span-8 flex flex-row relative justify-between">
          <div className="flex flex-col gap-3 2xl:gap-5 text-start">
            <p className="text-sm font-semibold lg:text-lg 2xl:text-2xl lg:whitespace-pre-line">
              QUICK LINKS
            </p>
            <Link href="/">
              <a className="text-xs font-normal lg:text-base 2xl:text-xl lg:whitespace-pre-line">
                Home
              </a>
            </Link>
            <Link href="/about-us">
              <a className="text-xs font-normal lg:text-base 2xl:text-xl lg:whitespace-pre-line">
                About
              </a>
            </Link>

            <div className="flex flex-row items-center">
              <p className="text-xs font-normal lg:text-base 2xl:text-xl lg:whitespace-pre-line mr-2">
                Elevator Pitch
              </p>
              <BiLinkExternal className="mt-auto mb-auto" />
            </div>
          </div>
          <div className="flex-col gap-5 text-start hidden lg:flex items-start">
            <p className="text-base font-semibold lg:text-lg 2xl:text-2xl lg:whitespace-pre-line">
              COMING SOON ON
            </p>
            <img
              src="/AppStoreBadge.svg"
              className="block 2xl:hidden rounded-xl"
              style={{ width: 102, height: 34 }}
            />
            <img
              src="/GooglePlayStoreBadge.svg"
              className="block 2xl:hidden rounded-xl"
              style={{ width: 102 }}
            />
            <img
              src="/AppStoreBadge.svg"
              className="hidden 2xl:block"
              style={{ width: 144, height: 48 }}
            />
            <img
              src="/GooglePlayStoreBadge.svg"
              className="hidden 2xl:block"
              style={{ width: 144 }}
            />
          </div>
          <div className="flex flex-col gap-3 2xl:gap-5 text-start">
            <p className="text-sm font-semibold lg:text-lg 2xl:text-2xl lg:whitespace-pre-line">
              CONTACT US
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@forevv.in"
              target={"_blank"}
              className="flex flex-row items-center"
            >
              <IoIosMail size={"1.875em"} className="mr-2" />
              <p className="text-xs font-normal lg:text-base 2xl:text-xl lg:whitespace-pre-line">
                hello@forevv.in
              </p>
            </a>

            <a
              href="https://www.linkedin.com/company/forevv/"
              target={"_blank"}
              className="flex flex-row items-center"
            >
              <AiFillLinkedin size={"1.875em"} className="mr-2" />
              <p className="text-xs font-normal lg:text-base 2xl:text-xl lg:whitespace-pre-line">
                Forevv
              </p>
            </a>
            <a
              href="https://www.instagram.com/forevv_india/"
              target={"_blank"}
              className="flex flex-row items-center"
            >
              <AiOutlineInstagram size={"1.875em"} className="mr-2" />
              <p className="text-xs font-normal lg:text-base 2xl:text-xl lg:whitespace-pre-line">
                @forevv_india
              </p>
            </a>
          </div>
        </div>
        <div className="lg:col-span-2" />
        <div className="lg:hidden" />
        <div className="flex-row col-span-12 gap-4 text-start flex lg:hidden">
          <p className="text-sm font-semibold lg:text-2xl lg:whitespace-pre-line">
            COMING SOON ON
          </p>
          <img src="/AppStoreBadge.svg" style={{ maxWidth: 72 }} />
          <img src="/GooglePlayStoreBadge.svg" style={{ maxWidth: 72 }} />
        </div>
      </div>
    </div>
  );
}
