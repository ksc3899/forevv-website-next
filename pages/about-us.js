import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Blob from "../public/Blob.svg";
import BlobMobile from "../public/BlobMobile.svg";
import Left from "../public/left.svg";
import ItemsCarousel from "react-items-carousel";
import TeamComponent from "../components/Team";
import EarlyAccess from "../components/EarlyAccess";

export default function AboutUs() {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 60;
  return (
    <div className="container">
      <main className={styles.main}>
        <div className="grid grid-cols-12 items-center mx-6 lg:mx-0">
          <div className="col-span-12 flex lg:hidden items-center ">
            <BlobMobile />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-left">
            <p className="text-base lg:text-xl 2xl:text-2xl font-normal relative whitespace-pre-line">
              Memories are at the core of our lives - they make us what we are.
              {"\n"}
              {"\n"}
              Forevv is a 6-month old BITSian technology startup in the social
              entrepreneurship space. Managed by a team of enthusiastic
              youngsters, Forevv envisions to revolutionize the way memories are
              handled altogether.
              {"\n"}
              {"\n"}
              "Sometimes a short walk down the memory lane is all it takes to
              appreciate where you are today"{"\n"}
              <span className="text-base hidden lg:block lg:mt-2 lg:text-base 2xl:text-2xl font-normal text-right">
                ~Susan Gale, Renowned Author
              </span>
            </p>
            <p className="text-base lg:hidden font-normal relative text-right">
              ~Susan Gale,
            </p>
            <p className="text-xs lg:hidden font-normal relative text-right text-forevv-blue">
              Renowned Author
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-6 justify-center hidden lg:flex items-center">
            <Blob style={{ transform: "scale(1.2)" }} />
          </div>
        </div>
      </main>

      <div className="grid grid-cols-2 mt-10 lg:mt-0 items-center">
        <div className="col-span-2">
          <p className="text-base lg:text-xl 2xl:text-4xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
            We are a part of...
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-row justify-around">
          <img
            src="/Logo/Nasscom.svg"
            loading="eager"
            className="max-h-40 md:max-h-fit "
          />
          <img
            src="/Logo/Caarya.svg"
            loading="eager"
            className="max-h-40 md:max-h-fit "
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-row justify-around">
          <img
            src="/Logo/IED.svg"
            loading="eager"
            className="max-h-40 md:max-h-fit "
          />
          <img
            src="/Logo/Xartup.svg"
            loading="eager"
            className="max-h-40 md:max-h-fit "
          />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-10 lg:mt-20 2xl:mt-32 items-center">
        <div className="col-span-12">
          <p className="text-base lg:text-xl 2xl:text-4xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
            Our Achievements
          </p>
        </div>
        <div className=" lg:col-span-1" />
        <div className="col-span-12 lg:col-span-10 mt-5 lg:mt-8 2xl:mt-10">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              gutter={20}
              activePosition={"center"}
              rightChevron={<Left className=" rotate-180" />}
              leftChevron={<Left />}
              outsideChevron={true}
              chevronWidth={chevronWidth}
            >
              <div
                style={{
                  width: "98%",
                  height: "98%",
                  boxShadow: "4px 8px 10px #6D8DAD33",
                  borderRadius: 8,
                }}
                className="flex flex-col bg-white text-center lg:text-left lg:flex-row px-5 py-7 lg:px-20 lg:py-12 items-center justify-center"
              >
                <div className="hidden lg:block">
                  <Image
                    src="/Logo/MEITY.svg"
                    height={186}
                    width={248}
                    priority
                  />
                </div>
                <div className="lg:hidden mt-6">
                  <Image
                    src="/Logo/MEITY.svg"
                    height={105}
                    width={140}
                    className="lg:hidden"
                    priority
                  />
                </div>
                <p className="relative text-base lg:text-xl 2xl:text-2xl lg:ml-10">
                  Recipient of a grant under the TIDE 2.0 scheme by MeitY. TIDE
                  aims to promote select few promising startups through
                  financial and technical support.
                </p>
              </div>
              <div
                style={{
                  width: "98%",
                  height: "98%",
                  boxShadow: "4px 8px 10px #6D8DAD33",
                  borderRadius: 8,
                }}
                className="flex flex-col bg-white text-center lg:text-left lg:flex-row px-5 py-7 lg:px-20 lg:py-12 items-center justify-center"
              >
                <div className="hidden lg:block">
                  <Image src="/Logo/EO.svg" height={186} width={248} priority />
                </div>
                <div className="lg:hidden mt-6">
                  <Image
                    src="/Logo/EO.svg"
                    height={105}
                    width={140}
                    className="lg:hidden"
                    priority
                  />
                </div>
                <p className="relative text-base lg:text-xl 2xl:text-2xl lg:ml-10">
                  Finalist in GSEA, AP Chapter. EO GSEA supports student
                  entrepreneurs in taking their business to the next level.
                </p>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>

      <TeamComponent />

      <EarlyAccess />
    </div>
  );
}
