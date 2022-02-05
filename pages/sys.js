import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/About.module.css";
import { addContestDetails, uploadMedia } from "../Firebase/Database";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function sys() {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [primaryContact, setPrimaryContact] = React.useState(null);
  const [secondaryContact, setSecondaryContact] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [instagram, setInstagram] = React.useState(null);
  const [story, setStory] = React.useState(null);

  const storage = getStorage();
  const handleSubmit = async () => {
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
    });
  };
  return (
    <div className="container">
      <main className={styles.main}>
        <div className="col-span-12 lg:col-span-5 lg:mt-5 2xl:mt-6 text-left justify-center ">
          <p className="text-center hidden lg:block text-base font-semibold lg:text-3xl 2xl:text-4xl">
            Share your story!
          </p>
          <div className="grid grid-cols-2 gap-4 lg:gap-5 2xl:gap-7 lg:mt-14">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2 h-10 2xl:h-14 px-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
              className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
            />
            <input
              type="tel"
              placeholder="Primary Contact"
              required
              onChange={(e) => setPrimaryContact(e.target.value)}
              className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
            />
            <input
              type="tel"
              placeholder="Alternate Contact"
              onChange={(e) => setSecondaryContact(e.target.value)}
              className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2 h-10 2xl:h-14 px-5"
            />
            <input
              type="text"
              placeholder="Instagram handle"
              required
              onChange={(e) => setInstagram(e.target.value)}
              className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
            />
            <input
              type="file"
              accept="image/png, image/jpeg"
              placeholder="Upload your media"
              required
              id="input"
              className="col-span-2 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
            />
            <input
              type="text"
              placeholder="The story..."
              onChange={(e) => setStory(e.target.value)}
              className="col-span-2 border-forevv-blue rounded-lg border lg:border-2  h-10 2xl:h-14 px-5"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="col-span-2 rounded-full lg:mt-6 2xl:mt-8 bg-forevv-blue w-32 h-10 lg:w-44 lg:h-11 2xl:w-60 2xl:h-14 ml-auto mr-auto"
              style={{ maxWidth: 266 }}
              // onClick={() =>
              //   addContestDetails(
              //     firstName,
              //     lastName,
              //     primaryContact,
              //     secondaryContact,
              //     email,
              //     instagram,
              //     story
              //   )
              // }
              onClick={() => handleSubmit()}
            >
              <p className="text-sm lg:text-base 2xl:text-xl font-semibold text-white">
                Share Your Story
              </p>
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}
