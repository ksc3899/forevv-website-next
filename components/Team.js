import React from "react";
import Rectangle1 from "../public/Team/Rectangle 222.svg";
import Rectangle2 from "../public/Team/Rectangle 220.svg";
import Rectangle1Small from "../public/Team/Rectangle 222 small.svg";
import Rectangle2Small from "../public/Team/Rectangle 220 small.svg";
import Left from "../public/left.svg";
import Linkedin from "../public/Linkedin.svg";
import Insta from "../public/Insta.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import ItemsCarousel from "react-items-carousel";

const TeamData = [
  {
    name: "Sai Charan Kommana",
    title: "Founder & CEO",
    desc: "“Main udna chahta hu, daudna chahta hu, girna bhi chahta hu. Bas rukna nahi chahta”. These lines best describe me ;).",
    pic: "/Team/SaiCharan.svg",
    linkedin: "https://www.linkedin.com/in/sai-charan-kommana/",
    instagram: "https://www.instagram.com/_char_a_n_/",
  },
  {
    name: "Shivansh Shukla",
    title: "Software Developer",
    desc: "Backend developer specializing in Python & Django. When not on projects, you'll find me hooked to a sci-fi book.",
    pic: "/Team/ShivanshShukla.svg",
    linkedin: "https://www.linkedin.com/in/shuklashivansh/",
    instagram: "https://www.instagram.com/shivansh.dmg/",
  },
  {
    name: "Aarush Sinha",
    title: "Software Developer",
    desc: "A ReactJS & React Native guy exploring a bit of UI/UX and AR/VR domains. Love binging movies, series and anime. :))",
    pic: "/Team/AarushSinha.svg",
    linkedin: "https://www.linkedin.com/in/aarush-sinha-66a790201/",
    instagram: "https://www.instagram.com/aarush.py/",
  },
  {
    name: "Vanshika Thakur",
    title: "Associate Software Developer",
    desc: "Caught up in front-end development ;p. I am a tech-geek who loves to read sci-fi books, besides sipping coffee.",
    pic: "/Team/VanshikaThakur.svg",
    linkedin: "https://www.linkedin.com/in/vanshika-thakur-249204200/",
    instagram: "https://www.instagram.com/v4nshikaaa/",
  },
  {
    name: "Geetha Charan",
    title: "Design Lead",
    desc: "I've been on a rather bumpy ride before finally landing in UI/UX. Love empathetic design patterns, apart from cooking. :)",
    pic: "/Team/GeethaCharan.svg",
    linkedin: "https://www.linkedin.com/in/geethacharan-nallana-06691518b",
    instagram: "https://www.instagram.com/gc_09_12/",
  },
  {
    name: "Krishna Varma Sagi",
    title: "Operations Manager",
    desc: "Just a motorsport lover. Novels, Series, Coffee - I can do these all day. 'Just do it' defines me the best. ;)",
    pic: "/Team/KrishnaVarma.svg",
    linkedin: "https://www.linkedin.com/in/krishna-varma-sagi-5062a6222/",
    instagram: "",
  },
  {
    name: "Anuj Batra",
    title: "Business Advisor",
    desc: "A versatile leader with 25+ years of solid track record in leading start-ups, rapidly growing companies & building brands.",
    pic: "/Team/AnujBatra.svg",
    linkedin: "https://www.linkedin.com/in/anujbatra1/",
    instagram: "",
  },
  {
    name: "Ashutosh Tewari",
    title: "Business Advisor",
    desc: "A mid-management professional with 17+ years of experience spanning IT Services, management consulting & supply chain.",
    pic: "/Team/AshutoshTewari.svg",
    linkedin: "https://www.linkedin.com/in/ashutoshtewari/",
    instagram: "https://www.instagram.com/ashtew27/",
  },
  {
    name: "Nikhil Srivatsa",
    title: "Technical Advisor",
    desc: "Multipreneur who has seen the full spectrum of startup cycles, collecting a wide variety of experiences along the way.",
    pic: "/Team/NikhilSrivastava.svg",
    linkedin: "https://www.linkedin.com/in/nikhil-srivatsa-a4bb0045/",
    instagram: "",
  },
];

export default function TeamComponent() {
  const [data, setData] = React.useState(TeamData[0]);
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  return (
    <div className="grid grid-cols-12 relative mt-10 lg:mt-20 2xl:mt-32 items-center lg:mb-32">
      <div className="hidden xl:block xl:col-span-1" />
      <div className="col-span-12 xl:col-span-3">
        <p className="text-base lg:text-xl 2xl:text-3xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          Our Team
        </p>
      </div>

      <div className="xl:col-span-8" />
      <div className="col-span-12 xl:hidden mt-5 ">
        <div style={{ paddingLeft: 60, paddingRight: 60 }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={20}
            activePosition={"center"}
            rightChevron={<Left className=" rotate-180" />}
            leftChevron={<Left />}
            outsideChevron={true}
            chevronWidth={60}
          >
            {TeamData.map((item, id) => (
              <div key={id}>
                <div className=" border-2 rounded-2xl w-64 md:w-72 ml-auto mr-auto border-forevv-blue mx-1 justify-center p-2 xl:p-14 bg-white text-center">
                  <div className="w-fit ml-auto mr-auto">
                    <img
                      loading="eager"
                      src={item.pic}
                      alt=""
                      style={{ maxWidth: 125, maxHeight: 125, marginTop: 28 }}
                    />
                  </div>
                  <p className="font-semibold text-lg mt-5 mb-2">{item.name}</p>
                  <p className="font-semibold text-xs text-forevv-blue mb-2">
                    {item.title}
                  </p>
                  <p className="italic text-base mb-2">{item.desc}</p>
                  <div className="flex flex-row justify-center">
                    {item.linkedin !== "" ? (
                      <img
                        loading="eager"
                        src="/Linkedin.svg"
                        alt=""
                        style={{ height: 60, width: 60 }}
                      />
                    ) : null}
                    {item.instagram !== "" ? (
                      <img
                        loading="eager"
                        src="/Insta.svg"
                        alt=""
                        style={{ height: 60, width: 60 }}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div className="hidden xl:col-spa-1 2xl:hidden xl:block" />
      <div className="hidden xl:block 2xl:hidden xl:col-span-3 mb-auto mt-12">
        <div className="w-min mr-auto">
          <Rectangle1Small />
          <div
            className="absolute top-8"
            style={{ width: "293px", height: "380px" }}
          >
            <img
              loading="eager"
              src="/Team/SaiCharan.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: 10,
                left: 20,
                borderColor:
                  data.name === "Sai Charan Kommana" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[0])}
            />
            <img
              loading="eager"
              src="/Team/ShivanshShukla.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: 10,
                right: 20,
                borderColor: data.name === "Shivansh Shukla" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[1])}
            />
            <img
              loading="eager"
              src="/Team/AarushSinha.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: 140,
                right: -50,
                borderColor: data.name === "Aarush Sinha" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[2])}
            />
            <img
              loading="eager"
              src="/Team/VanshikaThakur.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: 140,
                left: -50,
                borderColor: data.name === "Vanshika Thakur" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[3])}
            />
            <img
              loading="eager"
              src="/Team/GeethaCharan.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                bottom: 10,
                right: 20,
                borderColor: data.name === "Geetha Charan" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[4])}
            />

            <img
              loading="eager"
              src="/Team/KrishnaVarma.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                bottom: 10,
                left: 20,
                borderColor:
                  data.name === "Krishna Varma Sagi" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[5])}
            />
            <img
              loading="eager"
              src="/Logo/mobileLogo.svg"
              className="rounded-full"
              style={{
                transform: "scale(0.71)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: 93,
                width: 93,
                boxShadow: "4px 4px 20px #00000033",
              }}
            />
          </div>
        </div>
        <p className="text-xl lg:mt-12 font-semibold text-center lg:whitespace-pre-line">
          Advisors
        </p>
        <div className="w-min mr-auto mt-5">
          <Rectangle2Small />
          <div
            className="absolute"
            style={{ width: "291px", height: "130px", top: 415 }}
          >
            <img
              loading="eager"
              src="/Team/AnujBatra.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: "50%",
                left: -36,
                borderColor: data.name === "Anuj Batra" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[6])}
            />
            <img
              loading="eager"
              src="/Team/AshutoshTewari.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%)",
                borderColor: data.name === "Ashutosh Tewari" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[7])}
            />
            <img
              loading="eager"
              src="/Team/NikhilSrivastava.svg"
              id="teamMemberDp"
              className="border-4 rounded-full"
              width={98}
              height={98}
              style={{
                position: "absolute",
                top: "50%",
                right: -36,
                borderColor: data.name === "Nikhil Srivatsa" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[8])}
            />
          </div>
        </div>
      </div>

      <div className="hidden 2xl:block xl:col-span-4 ">
        <div className="w-min mr-auto mt-16 ml-20 hidden 2xl:block ">
          <Rectangle1 />
          <div
            className="absolute top-16"
            style={{ width: "414px", height: "500px" }}
          >
            <img
              loading="eager"
              src="/Team/SaiCharan.svg"
              id="teamMemberDp"
              width={140}
              height={140}
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: 0,
                left: "36px",
                borderColor:
                  data.name === "Sai Charan Kommana" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[0])}
            />
            <img
              loading="eager"
              src="/Team/ShivanshShukla.svg"
              id="teamMemberDp"
              width={140}
              height={140}
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: 0,
                right: 36,
                borderColor: data.name === "Shivansh Shukla" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[1])}
            />
            <img
              loading="eager"
              src="/Team/AarushSinha.svg"
              width={140}
              height={140}
              id="teamMemberDp"
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                right: -72,
                transform: "translateY(-50%)",
                borderColor: data.name === "Aarush Sinha" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[2])}
            />
            <img
              loading="eager"
              src="/Team/VanshikaThakur.svg"
              width={140}
              height={140}
              id="teamMemberDp"
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: -72,
                transform: "translateY(-50%)",
                borderColor: data.name === "Vanshika Thakur" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[3])}
            />
            <img
              loading="eager"
              src="/Team/GeethaCharan.svg"
              width={140}
              height={140}
              id="teamMemberDp"
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                bottom: 0,
                right: 36,
                borderColor: data.name === "Geetha Charan" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[4])}
            />

            <img
              loading="eager"
              src="/Team/KrishnaVarma.svg"
              width={140}
              height={140}
              id="teamMemberDp"
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                bottom: 0,
                left: 36,
                borderColor:
                  data.name === "Krishna Varma Sagi" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[5])}
            />
            <img
              loading="eager"
              src="/Logo/mobileLogo.svg"
              width={140}
              height={140}
              className="rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: 132,
                width: 132,
                boxShadow: "4px 4px 20px #00000033",
              }}
            />
          </div>
        </div>
        <p className="text-base lg:text-3xl lg:mt-16 2xl:ml-28 font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          Advisors
        </p>
        <div className="w-min ml-20 mr-auto mt-7">
          <Rectangle2 />
          <div
            className="absolute"
            style={{ width: "414px", height: "180px", top: 640 }}
          >
            <img
              loading="eager"
              src="/Team/AnujBatra.svg"
              id="teamMemberDp"
              width={140}
              height={140}
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: -36,
                transform: "translateY(-50%)",
                borderColor: data.name === "Anuj Batra" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[6])}
            />
            <img
              loading="eager"
              src="/Team/AshutoshTewari.svg"
              id="teamMemberDp"
              width={140}
              height={140}
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderColor: data.name === "Ashutosh Tewari" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[7])}
            />
            <img
              loading="eager"
              src="/Team/NikhilSrivastava.svg"
              id="teamMemberDp"
              width={140}
              height={140}
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                right: -36,
                transform: "translateY(-50%)",
                borderColor: data.name === "Nikhil Srivatsa" ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[8])}
            />
          </div>
        </div>
      </div>
      <div className=" hidden xl:block xl:col-span-1" />
      <div className="hidden xl:block 2xl:hidden xl:col-span-6 items-start">
        <div
          className="border-2 border-forevv-blue rounded-2xl ml-auto mr-0 p-10 bg-white text-center"
          style={{ width: 400, maxHeight: 500 }}
        >
          <div className="w-fit ml-auto mr-auto">
            <Image src={data.pic} alt="" height={178} width={178} />
          </div>
          <p className="font-semibold text-xl mt-4 mb-2">{data.name}</p>
          <p className="font-semibold text-sm text-forevv-blue mb-4">
            {data.title}
          </p>
          <p className="italic text-lg">{data.desc}</p>
          <div className="flex flex-row justify-center mt-2">
            {data.linkedin !== "" ? (
              <motion.a
                whileHover={{ scale: 1.1, rotateZ: -30 }}
                href={data.linkedin}
                target={"_blank"}
              >
                <img
                  loading="eager"
                  src="/Linkedin.svg"
                  style={{ transform: "scale(0.71)" }}
                />
              </motion.a>
            ) : null}
            {data.instagram !== "" ? (
              <motion.a
                whileHover={{ scale: 1.1, rotateZ: -30 }}
                href={data.instagram}
                target={"_blank"}
              >
                <img
                  loading="eager"
                  src="/Insta.svg"
                  style={{ transform: "scale(0.71)" }}
                />
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="hidden 2xl:block xl:col-span-7 items-start">
        <div
          className="border-2 border-forevv-blue rounded-2xl ml-auto mr-0 p-14 bg-white text-center"
          style={{ width: 560, maxHeight: 700 }}
        >
          <div className="w-fit ml-auto mr-auto">
            <Image src={data.pic} alt="" height={250} width={250} />
          </div>
          <p className="font-semibold text-3xl mt-5 mb-2">{data.name}</p>
          <p className="font-semibold text-xl text-forevv-blue mb-5">
            {data.title}
          </p>
          <p className="italic text-2xl mb-2">{data.desc}</p>
          <div className="flex flex-row justify-center mt-5">
            {data.linkedin !== "" ? (
              <motion.a
                whileHover={{ scale: 1.1, rotateZ: -30 }}
                href={data.linkedin}
                target={"_blank"}
              >
                <Linkedin />
              </motion.a>
            ) : null}
            {data.instagram !== "" ? (
              <motion.a
                whileHover={{ scale: 1.1, rotateZ: -30 }}
                href={data.instagram}
                target={"_blank"}
              >
                <Insta />
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="col-span-2 xl:col-span-1" />
    </div>
  );
}
