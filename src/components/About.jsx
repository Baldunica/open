import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon,link}) => (
  <Tilt className='xs:w-[250px] w-full mx-auto'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <a href={link} target='blank' className="bottom-4 left-0 right-0 mx-auto text-white bg-gradient-to-r from-green-400 to-pink-500 py-2 px-8 rounded-full text-center text-sm hover:opacity-80 transition-opacity duration-300">Learn More</a>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About OpenCoin</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        OpenCoin represents a groundbreaking cryptocurrency operating on the TON blockchain, positioned to revolutionize decentralized finance globally. With a keen focus on seamless transactions and user-centric experiences, OpenCoin aims to redefine the landscape of digital currency. Let's join forces to unleash the full potential of OpenCoin and shape the future of finance together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 max-w-[900px] mx-auto'>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");