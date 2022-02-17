import React from "react";
import EarlyAccessSVG from "../public/EarlyAccessSVG.svg";
import Trophy from "../public/trophy.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { addEarlyAccessDetails } from "../Firebase/Database";

function EarlyAccess() {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState("Let me try!");

  const handleValidate = () => {
    if (name === "") {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    if (email === "") {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    if (contact === "") {
      setError(true);
      return false;
    } else {
      if (contact.length === 10 && contact[0] !== "0") {
        setError(false);
      } else {
        setError(true);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!handleValidate()) {
      null;
    } else {
      setLoading("Submitted!");
      addEarlyAccessDetails(name, contact, email);
    }
  };

  return (
    <div
      id="early-access-div"
      className="grid grid-cols-12 mt-12 lg:mt-0 mx-6 lg:mx-0"
    >
      <div className="col-span-12 lg:hidden text-center justify-center">
        <p className="text-base font-semibold lg:text-3xl 2xl:text-4xl">
          Get Early Access
        </p>
      </div>
      <div className="col-span-12 lg:hidden ml-auto mr-auto mt-7 mb-10">
        <EarlyAccessSVG />
      </div>
      <div className="col-span-12 lg:col-span-3 text-center ml-auto mr-auto justify-center items-center lg:mt-20 2xl:mt-28 lg:text-left">
        <p className="text-base font-semibold 2xl:text-xl">
          Your chance to win:
        </p>
        <div className="flex-col mt-2 my-10 lg:h-40 lg:mt-5 2xl:mt-7 ">
          <div className="flex flex-row items-center">
            <Trophy />
            <p className="text-base font-normal ml-4 lg:text-lg 2xl:text-2xl lg:font-semibold">
              'Changemaker' Badge
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Trophy />
            <p className="text-base font-normal ml-4 my-2  lg:text-lg 2xl:text-2xl lg:font-semibold lg:my-5 2xl:my-7">
              Forevv Merchandise
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Trophy />
            <p className="text-base font-normal ml-4  lg:text-lg 2xl:text-2xl lg:font-semibold">
              Free Pro Subscription
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-4 2xl:hidden px-4">
        <Image src="/EarlyAccessSVG.svg" width={306} height={313} priority />
      </div>
      <div className="col-span-1 hidden 2xl:block lg:col-span-4 px-3">
        <Image src="/EarlyAccessSVG.svg" width={390} height={400} priority />
      </div>

      <div className="col-span-12 lg:col-span-5 lg:mt-5 2xl:mt-6 text-left justify-center">
        <p className="text-center hidden lg:block text-base font-semibold lg:text-3xl 2xl:text-4xl">
          Get Early Access
        </p>
        <div className="grid grid-cols-2 gap-4 lg:gap-5 2xl:gap-7 lg:mt-14">
          <input
            type="text"
            placeholder="Your name"
            required
            onChange={(e) => setName(e.target.value)}
            className="col-span-2 border-forevv-blue rounded-lg border lg:border-2 h-10 2xl:h-14 px-5"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            required
            onChange={(e) => setContact(e.target.value)}
            className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2 h-10 2xl:h-14 px-5"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="col-span-2 rounded-full lg:mt-6 2xl:mt-8 bg-forevv-blue w-32 h-10 lg:w-44 lg:h-11 2xl:w-60 2xl:h-14 ml-auto mr-auto"
            style={{ maxWidth: 266 }}
            onClick={() => handleSubmit()}
          >
            <p className="text-sm lg:text-base 2xl:text-xl font-semibold text-white">
              {loading}
            </p>
          </motion.button>
          {error === true ? (
            <p className="col-span-2 font-semibold text-xs 2xl:text-base text-red-600 text-center">
              Please fill all required fields/Check the format of details
              provided
            </p>
          ) : null}
        </div>
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default EarlyAccess;
