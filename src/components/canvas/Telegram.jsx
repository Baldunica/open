import React from 'react';
import { motion } from 'framer-motion'

const TelegramButton = () => {
  return (
    <a
      href="https://t.me/OpenCoinCommunity"
      target="_blank"
      title="Написать в Telegram"
      rel="noopener noreferrer"
      className="telegram-button fixed right-13 bottom-90 transform translate-x-[-50%] translate-y-[-50%] bg-blue-500 rounded-full w-55 h-55 text-white text-center text-3xl z-50"
    >
      <i className="fa fa-telegram inline-block leading-55"></i>
      <span className="sr-only">Написать в Telegram</span>
    </a>
  );
};

export default TelegramButton;
