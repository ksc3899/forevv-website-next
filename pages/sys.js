import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/SYS.module.css";
import Trophy from "../public/trophy.svg";
import { addContestDetails } from "../Firebase/Database";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { BsCloudUpload } from "react-icons/bs";

export default function sys() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [primaryContact, setPrimaryContact] = React.useState("");
  const [secondaryContact, setSecondaryContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [media, setMedia] = React.useState("");
  const [story, setStory] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);

  const storage = getStorage();
  const handleValidate = () => {
    if (firstName === "") {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    if (lastName === "") {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    if (primaryContact === "") {
      setError(true);
      return false;
    } else {
      if (primaryContact.length === 10 && primaryContact[0] !== "0") {
        setError(false);
      } else {
        setError(true);
        return false;
      }
    }
    if (secondaryContact === "") {
      null;
    } else {
      if (secondaryContact.length === 10 && secondaryContact[0] !== "0") {
        setError(false);
      } else {
        setError(true);
        return false;
      }
    }
    if (email === "") {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    if (instagram === "") {
      setError(true);
      return false;
    } else {
      if (instagram[0] === "@") {
        setError(false);
      } else {
        setError(true);
        return false;
      }
    }
    if (media === "") {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    return true;
  };

  // React.useEffect(() => handleValidate());

  const handleSubmit = async () => {
    if (!handleValidate()) {
      null;
    } else {
      setLoading(true);
      const selectedFile = document.getElementById("input").files[0];
      const mediaRef = ref(storage, `images/${primaryContact}`);
      await uploadBytes(mediaRef, selectedFile).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref).then((media) => {
          addContestDetails(
            firstName,
            lastName,
            primaryContact,
            secondaryContact,
            email,
            instagram,
            media,
            story
          );
        });
        setStatus(true);
      });
    }
  };
  return (
    <div className="bg-white pb-14 lg:pb-24 2xl:pb-36">
      <div className={styles.SYSdiv}></div>
      <div className={styles.SYSsvg}>
        <img src="/Exclusion 2.svg" />
        <p className={styles.Share_Your_Story}>Share Your Story</p>
      </div>

      <div className="container px-12 lg:px-0 mt-10 lg:mt-14 2xl:mt-20 ">
        <div className="flex flex-col lg:flex-row lg:justify-around  items-center">
          <p className="text-xl lg:text-4xl 2xl:text-6xl font-semibold">
            Your Chance to
          </p>
          <div className="mt-7 lg:mt-0">
            <div className="flex flex-row items-center">
              <Trophy className="min-w-max" />
              <p className="text-base font-normal ml-4 my-2 2xl:my-3 lg:text-lg 2xl:text-2xl">
                Win Forevv special goodies
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Trophy className="min-w-max" />
              <p className="text-base font-normal ml-4 my-2 lg:text-lg 2xl:text-2xl 2xl:my-3">
                Get featured on Forevv website
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Trophy className="min-w-max" />
              <p className="text-base font-normal ml-4 my-2 2xl:my-3  lg:text-lg 2xl:text-2xl">
                Receive a shout-out on Forevv's LinkedIn and Instagram
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Trophy className="min-w-max" />
              <p className="text-base font-normal ml-4 my-2 2xl:my-3 lg:text-lg 2xl:text-2xl">
                Upgrade to pro membership
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Trophy className="min-w-max" />
              <p className="text-base font-normal ml-4 my-2 lg:text-lg 2xl:text-2xl 2xl:my-3">
                Make your mark in all of GITAM
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Trophy className="min-w-max" />
              <p className="text-base font-normal ml-4 my-2 2xl:my-3 lg:text-lg 2xl:text-2xl">
                Publish your story for the whole world to see
              </p>
            </div>
          </div>
        </div>

        {!status ? (
          <>
            {" "}
            <div className="grid grid-cols-2 lg:max-w-lg 2xl:max-w-3xl gap-4 lg:gap-5 2xl:gap-7 mt-16 lg:mt-14 ml-auto mr-auto">
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <p className="ml-2 lg:ml-3 2xl:ml-4 font-semibold text-xs 2xl:text-base ">
                  First Name <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2 h-10 2xl:h-14 px-5"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <p className="ml-2 lg:ml-3 2xl:ml-4 font-semibold text-xs 2xl:text-base">
                  Last Name <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  className=" border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2  h-10 2xl:h-14 px-5"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <p className="ml-2 lg:ml-3 2xl:ml-4 font-semibold text-xs 2xl:text-base">
                  Primary Contact <span className="text-red-600">*</span>
                </p>
                <input
                  type="tel"
                  required
                  placeholder="1234567890"
                  onChange={(e) => setPrimaryContact(e.target.value)}
                  className="border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2  h-10 2xl:h-14 px-5"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <p className="ml-2 lg:ml-3 2xl:ml-4 font-semibold text-xs 2xl:text-base">
                  Alternate Contact
                </p>
                <input
                  type="tel"
                  onChange={(e) => setSecondaryContact(e.target.value)}
                  className="border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2  h-10 2xl:h-14 px-5"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <p className="ml-2 lg:ml-3 2xl:ml-4 font-semibold text-xs 2xl:text-base">
                  E-mail <span className="text-red-600">*</span>
                </p>
                <input
                  type="email"
                  required
                  placeholder="user@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2 h-10 2xl:h-14 px-5"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col">
                <p className="ml-2 lg:ml-3 2xl:ml-4 font-semibold text-xs 2xl:text-base">
                  Instagram handle <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  required
                  placeholder="@example"
                  onChange={(e) => setInstagram(e.target.value)}
                  className="border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2  h-10 2xl:h-14 px-5"
                />
              </div>
              <div className="col-span-2 border-forevv-blue rounded-lg lg:rounded-xl 2xl:rounded-2xl border lg:border-2 h-24 lg:h-28 2xl:h-40 p-2">
                <div className="border lg:border-2 border-dashed border-forevv-blue w-full h-full rounded-lg lg:rounded-xl 2xl:rounded-2xl flex justify-center items-center">
                  <label
                    htmlFor="input"
                    id="file"
                    className="cursor-pointer font-semibold text-xs 2xl:text-base"
                  >
                    <BsCloudUpload
                      size={38}
                      className="block lg:hidden ml-auto mr-auto"
                    />
                    <BsCloudUpload
                      size={42}
                      className="hidden lg:block 2xl:hidden ml-auto mr-auto"
                    />
                    <BsCloudUpload
                      size={60}
                      className="hidden 2xl:block ml-auto mr-auto"
                    />
                    {media === "" ? (
                      <>
                        Upload your media{" "}
                        <span className="text-red-600">*</span>
                      </>
                    ) : (
                      <div className="flex flex-col text-center">
                        Upload different media{" "}
                        <span className="text-forevv-blue text-xs 2xl:text-base">
                          Added {media?.slice(12, media.length)}
                        </span>
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    id="input"
                    className={styles.input}
                    onChange={(e) => setMedia(e.target.value)}
                  />
                </div>
              </div>

              <textarea
                rows="5"
                type="text"
                placeholder="The story..."
                onChange={(e) => setStory(e.target.value)}
                className="col-span-2 border-forevv-blue border lg:border-2 flex-wrap h-24 lg:h-28 2xl:h-40 px-5"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="col-span-2 rounded-full lg:mt-6 2xl:mt-8 bg-forevv-blue w-32 h-10 lg:w-44 lg:h-11 2xl:w-60 2xl:h-14 ml-auto mr-auto"
                style={{ maxWidth: 266 }}
                onClick={() => handleSubmit()}
              >
                <p className="text-sm lg:text-base 2xl:text-xl font-semibold text-white">
                  {loading ? "Submitting..." : "Share Your Story"}
                </p>
              </motion.button>
              {error === true ? (
                <p className="col-span-2 font-semibold text-xs 2xl:text-base text-red-600 text-center">
                  Please fill all required fields/Check the format of details
                  provided
                </p>
              ) : null}
            </div>
          </>
        ) : (
          <div className="mt-5 lg:mt-10 2xl:mt-20">
            <div className="flex lg:hidden justify-center">
              <lord-icon
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="loop"
                colors="primary:#121331,secondary:#4896ef"
                stroke="75"
                style={{ width: 250, height: 250 }}
              />
            </div>
            <div className="hidden lg:flex 2xl:hidden justify-center">
              <lord-icon
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="loop"
                colors="primary:#121331,secondary:#4896ef"
                stroke="75"
                style={{ width: 364, height: 364 }}
              />
            </div>
            <div className="hidden 2xl:flex justify-center">
              <lord-icon
                src="https://cdn.lordicon.com/lupuorrc.json"
                trigger="loop"
                colors="primary:#121331,secondary:#4896ef"
                stroke="75"
                style={{ width: 512, height: 512 }}
              />
            </div>
            <p className="text-center font-semibold text-lg lg:text-3xl 2xl:text-4xl mt-3">
              Successfully uploaded!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
