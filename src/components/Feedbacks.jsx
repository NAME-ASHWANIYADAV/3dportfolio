import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const AchievementCard = ({ index, image, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full cursor-pointer group"
        onClick={openModal}
      >
        <div className="relative overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <p className="mt-3 text-white font-medium text-[16px] text-center">
          {title}
        </p>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-5 max-w-[90%] max-h-[90%]">
            <button
              className="absolute top-2 right-2 text-black text-[24px] font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've Accomplished</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex overflow-x-auto gap-7`}
      >
        {certificates.map((certificate, index) => (
          <AchievementCard key={index} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");
