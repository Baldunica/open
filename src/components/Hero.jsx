import React, { Suspense, startTransition } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`realtive max-w-7xl pt-20 mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white mt-6`}>
              Welcome to <span className='text-[#915EFF]'>OpenCoin</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 z-10`}>
              Explore the future of decentralized finance with OpenCoin - a cryptocurrency built on the TON blockchain. 
              Discover innovative features and seamless transactions for users worldwide.
            </p>
          </div>
        </div>
        <EarthCanvas/>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center flex-col'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
