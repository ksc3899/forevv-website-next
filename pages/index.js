import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import GooglePlay from "../public/google-play.svg";
import AppStore from "../public/app-store.svg";
import EarlyAccess from "../components/EarlyAccess";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const earlyAccessButton = () => {
    var element = document.getElementById("early-access-div");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - 130;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <main className={styles.main}>
        <div className="hidden 2xl:grid grid-cols-12">
          <div className="col-span-7 text-left">
            <p
              className="text-4xl 2xl:text-6xl font-bold relative"
              style={{ lineHeight: "82px" }}
            >
              A platform to visualise your life's memory lanes
            </p>
            <p className="text-2xl font-bold relative mt-10 whitespace-pre-line">
              Capture memories in an ever more{"\n"} inclusive, immersive &
              innovative style.
            </p>
            <div className="flex relative mt-16 justify-start">
              <Link href="/sys">
                <a target={"_blank"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="border-2 rounded-full border-forevv-blue w-72 h-16 flex flex-row items-center justify-center"
                    style={{ maxWidth: 266 }}
                  >
                    <p className="text-2xl font-semibold text-forevv-blue">
                      Share your story
                    </p>
                    <BiLinkExternal
                      className="mt-auto mb-auto ml-2 text-forevv-blue"
                      size={24}
                    />
                  </motion.button>
                </a>
              </Link>
              <a onClick={() => earlyAccessButton()}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full  bg-forevv-blue ml-7 w-64 h-16"
                  style={{ maxWidth: 266 }}
                >
                  <p className="text-2xl font-semibold text-white">Sign up</p>
                </motion.button>
              </a>
            </div>
          </div>
          <div className="col-span-5 relative ">
            <Image src="/SVGHome.svg" layout="fill" priority />
          </div>
          <div className="col-span-7 flex items-center mt-24 justify-start">
            <p className="text-base font-semibold lg:text-2xl lg:font-bold min-w-max">
              Coming soon on
            </p>
            <AppStore alt="" className="ml-5 mr-2" />
            <p className="text-xl font-bold mx-2">App Store</p>
            <GooglePlay className="mx-2" />
            <p className="text-xl font-bold ml-2">Playstore</p>
          </div>
        </div>

        <div className="hidden lg:grid 2xl:hidden grid-cols-12 gap-2">
          <div className="col-span-6 text-center lg:text-left">
            <p
              className="text-4xl 2xl:text-6xl font-bold relative"
              style={{ lineHeight: "56px" }}
            >
              A platform to visualise your life's memory lanes
            </p>
            <p className="text-2xl font-bold relative mt-8 whitespace-pre-line">
              Capture memories in an ever more{"\n"} inclusive, immersive &
              innovative style.
            </p>
            <div className="flex relative mt-16 justify-start">
              <Link href="/sys">
                <a target={"_blank"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="border-2 rounded-full border-forevv-blue w-48 h-11 flex flex-row justify-center items-center"
                    style={{ maxWidth: 266 }}
                  >
                    <p className="text-base font-semibold text-forevv-blue">
                      Share your story
                    </p>
                    <BiLinkExternal
                      className="mt-auto mb-auto ml-2 text-forevv-blue"
                      size={18}
                    />
                  </motion.button>
                </a>
              </Link>
              <a onClick={() => earlyAccessButton()}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full  bg-forevv-blue ml-7 w-48 h-11"
                  style={{ maxWidth: 266 }}
                >
                  <p className="text-base font-semibold text-white">Sign up</p>
                </motion.button>
              </a>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Image src="/SVGHome.svg" layout="fill" priority />
          </div>
          <div className="col-span-6 flex items-center mt-16 justify-center lg:justify-start">
            <p className="text-base font-semibold lg:text-2xl lg:font-bold min-w-max">
              Coming soon on
            </p>
            <AppStore
              alt=""
              className="ml-4 mr-2 min-w-max"
              style={{ width: 32, height: 32 }}
            />
            <p className="text-lg font-bold mx-2 flex-shrink-0">App Store</p>
            <GooglePlay
              className="mx-2 min-w-max"
              style={{ width: 32, height: 32 }}
            />
            <p className="text-lg font-bold ml-2">Playstore</p>
          </div>
        </div>
      </main>

      <div className="grid lg:hidden grid-rows-2 grid-cols-12 mx-6 pt-12 ">
        <div className="col-span-12 relative">
          <Image src="/SVGHome.svg" layout="fill" priority />
        </div>

        <div className="col-span-12 mt-6 text-center">
          <p className="text-lg font-bold " style={{ lineHeight: "24px" }}>
            A platform to visualise your life's memory lanes
          </p>
          <p className="text-base font-semibold relative mt-5 whitespace-pre-line">
            Capture memories in an ever more{"\n"} inclusive, immersive &
            innovative{"\n"} style.
          </p>
          <div className="flex mt-10 justify-center">
            <Link href="/sys">
              <a target={"_blank"}>
                <button
                  className="border-2 rounded-full border-forevv-blue w-40 h-10 flex flex-row justify-center items-center"
                  style={{ maxWidth: 266 }}
                >
                  <p className="text-sm font-semibold text-forevv-blue">
                    Share your story
                  </p>
                  <BiLinkExternal
                    className="mt-auto mb-auto ml-1 text-forevv-blue"
                    size={14}
                  />
                </button>
              </a>
            </Link>
            <a onClick={() => earlyAccessButton()}>
              <button
                className="rounded-full  bg-forevv-blue w-36 h-10 ml-3"
                style={{ maxWidth: 266 }}
              >
                <p className="text-sm font-semibold text-white">Sign up</p>
              </button>
            </a>
          </div>
          <div className="flex items-center mt-10 justify-center">
            <p className="text-base font-semibold lg:text-2xl lg:font-bold min-w-max">
              Coming soon on
            </p>
            <AppStore
              alt=""
              className="ml-6 mr-7"
              style={{ width: 32, height: 32 }}
            />
            <GooglePlay alt="" style={{ width: 32, height: 32 }} />
          </div>
        </div>
      </div>

      <EarlyAccess />

      <div className="grid grid-cols-12 relative mt-8 lg:mt-28 items-center mx-6 lg:mx-0">
        <div className="col-span-12 lg:col-span-6">
          <p className="text-base font-semibold my-7 text-center lg:text-left lg:text-3xl 2xl:text-4xl lg:whitespace-pre-line">
            Create cool visual memory{"\n"} lanes!
          </p>
          <div className="col-span-12 relative flex justify-center lg:hidden">
            <Image
              src="/Feature1Mobile.svg"
              width={300}
              height={173}
              priority
            />
          </div>
          <p className="text-base font-regular mt-10 lg:mt-0 lg:text-xl 2xl:text-2xl whitespace-pre-line">
            'A walk down the memory lane' is no longer just in your head. You
            can now actually go on a vitual walk down your memory lanes.
          </p>

          <a
            onClick={() => earlyAccessButton()}
            className="flex-row justify-end items-center cursor-pointer hidden lg:flex "
            id="earlyAccessArrow"
          >
            <motion.p
              whileHover={{ x: -19 }}
              className="text-base font-semibold lg:text-base 2xl:text-2xl mt-2 text-right text-forevv-blue hover:text-forevv-hover-blue whitespace-pre-line"
            >
              Get early access!
            </motion.p>
            <AiOutlineArrowRight className="mt-2 absolute text-forevv-hover-blue 2xl:scale-125" />
          </a>
          <div className="w-full flex justify-end">
            <button
              onClick={() => earlyAccessButton()}
              className="text-base lg:hidden font-semibold mt-2 mb-3 text-right text-forevv-blue whitespace-pre-line"
            >
              Get early access!
            </button>
          </div>
        </div>
        <div className="col-span-6 hidden lg:flex 2xl:hidden justify-end relative ml-12">
          <Image src="/Feature1.svg" width={537} height={327} priority />
        </div>
        <div className="col-span-6 hidden 2xl:flex justify-end relative ml-12">
          <Image src="/Feature1.svg" width={754} height={435} priority />
        </div>

        <div className="col-span-7 hidden mt-3 lg:mt-10 2xl:mt-20 lg:block 2xl:hidden">
          <Image src="/Feature2.svg" width={537} height={327} priority />
        </div>
        <div className="col-span-7 hidden mt-3 lg:mt-20 2xl:block 2xl:mr-14">
          <Image src="/Feature2.svg" width={754} height={435} priority />
        </div>
        <div className="col-span-12 lg:col-span-5 lg:mt-20 2xl:ml-7">
          <p className="text-base font-semibold mt-7 lg:mb-7 text-center lg:text-left lg:text-3xl 2xl:text-4xl lg:whitespace-pre-line">
            You're now all set to live{"\n"} your memory lanes visually!
          </p>
          <div className="grid grid-cols-1 lg:hidden">
            <Image
              src="/Feature2Mobile.svg"
              width={300}
              height={173}
              priority
            />
          </div>
          <p className="text-base font-regular mt-5 lg:mt-0 lg:text-xl 2xl:text-2xl whitespace-pre-line">
            Record all your milestones, the ups and downs through the journey,
            and the beautiful moments you share with your loved ones.
          </p>
          <a
            onClick={() => earlyAccessButton()}
            className="flex-row justify-end items-center cursor-pointer hidden lg:flex"
            id="earlyAccessArrow"
          >
            <motion.p
              whileHover={{ x: -19 }}
              className="text-base font-semibold lg:text-base 2xl:text-2xl mt-2 mb-3 2xl:mt-5 text-right text-forevv-blue hover:text-forevv-hover-blue whitespace-pre-line"
            >
              Get early access!
            </motion.p>
            <AiOutlineArrowRight className="mt-2 mb-3 2xl:mt-5 absolute text-forevv-hover-blue 2xl:scale-125" />
          </a>
          <div className="w-full flex justify-end">
            <button
              onClick={() => earlyAccessButton()}
              className="text-base lg:hidden font-semibold mt-2 mb-3 text-right text-forevv-blue whitespace-pre-line"
            >
              Get early access!
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 mt-auto mb-auto">
          <p className="text-base font-semibold my-7 text-center lg:text-left lg:text-3xl 2xl:text-4xl lg:whitespace-pre-line">
            Come along with your{"\n"} loved ones!
          </p>
          <div className="col-span-12 relative flex justify-center lg:hidden">
            <Image src="/Feature3.svg" width={300} height={173} priority />
          </div>
          <p className="text-base font-regular mt-10 lg:mt-0 lg:text-xl 2xl:text-2xl whitespace-pre-line">
            Collaborative Memory Lanes are common between you and your partner
            in crime - An event added by either of you is visible to the other.
          </p>
          <a
            onClick={() => earlyAccessButton()}
            className="flex-row justify-end items-center cursor-pointer hidden lg:flex "
            id="earlyAccessArrow"
          >
            <motion.p
              whileHover={{ x: -19 }}
              className="text-base font-semibold lg:text-base 2xl:text-2xl mt-2 text-right text-forevv-blue hover:text-forevv-hover-blue whitespace-pre-line"
            >
              Get early access!
            </motion.p>
            <AiOutlineArrowRight className="mt-2 absolute text-forevv-hover-blue 2xl:scale-125" />
          </a>
          <div className="w-full flex justify-end">
            <button
              onClick={() => earlyAccessButton()}
              className="text-base lg:hidden font-semibold mt-2 mb-3 text-right text-forevv-blue whitespace-pre-line"
            >
              Get early access!
            </button>
          </div>
        </div>
        <div className="col-span-6 mt-10 hidden lg:flex 2xl:hidden justify-end relative ml-36">
          <Image src="/Feature3.svg" width={537} height={327} priority />
        </div>
        <div className="col-span-6 mt-10 hidden 2xl:flex justify-end relative ml-44 ">
          <Image src="/Feature3.svg" width={626} height={424} priority />
        </div>
      </div>
    </div>
  );
}
