"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Button } from "./button";

export function DemoNoticePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Hiển thị thông báo sau khi trang đã load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl z-50 w-[90%] max-w-md text-center"
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaTimes />
            </button>

            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Lưu ý quan trọng
            </h3>
            <p className="text-gray-600 mb-6">
              Đây là sản phẩm demo không phải là sản phẩm chính thức của công ty
            </p>

            <Button onClick={closePopup} className="min-w-[120px]">
              Tôi đã hiểu
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
