import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {qr} from '../assets/index'

const Join = () => {
    return (
        <div className={`xl:mt-12 mx-auto`}>
            <div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 rounded-2xl p-10 max-w-[500px] mx-auto'>
                <h3 className={styles.sectionHeadText}>Join </h3>
                <p className={styles.sectionSubText}> our fast-growing community</p>
                <div className="flex flex-col space-x-4 mx-auto justify-center items-center"> {/* Контейнер для кнопки и QR-кода */}
                <a href="https://t.me/OpenCoinCommunity" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[260px] mx-auto mt-8 block text-center">Join Telegram</a>
                    <img src={qr} alt="Telegram QR Code" className="w-56 h-56 mt-10 rounded-3xl mx-auto"  /> {/* Изображение QR-кода */}
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(Join, "contact");