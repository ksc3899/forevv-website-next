import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import Logo from "../../public/Logo/logo.svg";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { useRouter } from "next/router";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const router = useRouter();
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={window.innerHeight}
      ref={containerRef}
    >
      {isOpen ? (
        <motion.div initial={false} animate={"open"}>
          <motion.div className="background" variants={sidebar} />
          <motion.ul>
            <Logo
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 47,
                marginBottom: 66,
              }}
            />
            <div className="text-center flex flex-col gap-16">
              <Link href="/">
                <a
                  id={
                    router.pathname == "/" ? "navbarLinkActive" : "navbarLink"
                  }
                  className="mx-6 font-semibold text-2xl max-w-min ml-auto mr-auto"
                  onClick={() => toggleOpen()}
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
                  className="mx-6 font-semibold text-2xl max-w-max ml-auto mr-auto"
                  onClick={() => toggleOpen()}
                >
                  About Us
                </a>
              </Link>
              <Link href="/sys" id="navbarLink">
                <a
                  className="flex mx-6 items-center text-center justify-center"
                  onClick={() => toggleOpen()}
                >
                  <p className="font-semibold text-2xl pl-8">Elevator Pitch</p>
                  <BiLinkExternal className="h-5 w-5 ml-2" />
                </a>
              </Link>
              <a
                onClick={() => {
                  toggleOpen();
                  var element = document.getElementById("early-access-div");
                  var headerOffset = 45;
                  var elementPosition = element.getBoundingClientRect().top;
                  var offsetPosition =
                    elementPosition + window.pageYOffset - 100;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }}
              >
                <p className="mx-6 cursor-pointer font-semibold text-2xl text-forevv-blue">
                  Get Early Access
                </p>
              </a>
            </div>
          </motion.ul>
        </motion.div>
      ) : null}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
