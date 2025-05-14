import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const MessageMe = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/+972504083588?text=${encodeURIComponent(
        "היי, הגעתי דרך האתר אשמח לקבוע פגישה"
      )}`,
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-4 left-4 z-50 bg-white text-gray-800 p-3 rounded-2xl shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2 border border-gray-200"
      onClick={handleClick}
    >
      <span className="text-sm font-medium">צרו איתי קשר !</span>
      <MessageCircle className="w-5 h-5 text-green-500" />
    </motion.button>
  );
};

export default MessageMe;
