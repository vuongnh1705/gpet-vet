"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Button } from "./button";

interface DomainPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DomainPopup({ isOpen, onClose }: DomainPopupProps) {
  const [domain, setDomain] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Tạo URL đầy đủ: https://{domain}.gpet.vn hoặc mặc định https://clinic.gpet.vn
    const fullDomain = domain.trim()
      ? `https://${domain.trim()}.gpet.vn`
      : "https://clinic.gpet.vn";

    // Mở URL trong tab mới
    window.open(fullDomain, "_blank");

    // Đóng popup và reset giá trị
    onClose();
    setDomain("");
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl z-50 w-[90%] max-w-xl"
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="bg-[#2C8E92]/10 rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#2C8E92]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5v14"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Đăng nhập vào hệ thống GPET Vet
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="domain"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nhập tên trang của bạn
                </label>
                <div className="flex items-center shadow-sm rounded-md overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-[#2C8E92] focus-within:border-[#2C8E92] transition-all">
                  <span className="bg-gray-100 text-gray-600 px-4 py-3 border-r border-gray-300 font-medium">
                    https://
                  </span>
                  <input
                    id="domain"
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="flex-1 py-3 px-4 border-0 focus:ring-0 focus:outline-none text-gray-800"
                    placeholder="tencuaban"
                    autoComplete="off"
                    autoFocus
                  />
                  <span className="bg-gray-100 text-gray-600 px-4 py-3 border-l border-gray-300 font-medium">
                    .gpet.vn
                  </span>
                </div>
                <div className="mt-3 bg-blue-50 p-3 rounded-md border border-blue-100">
                  <p className="text-xs text-blue-700 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    Nhập tên của phòng khám/bệnh viện (không bao gồm https:// và
                    .gpet.vn)
                  </p>
                  <p className="text-xs text-blue-700 mt-1 ml-5">
                    Ví dụ: nhập &quot;phongkhamdemo&quot; cho domain
                    https://phongkhamdemo.gpet.vn
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <Button
                  variant="outline"
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 hover:bg-gray-100"
                >
                  Hủy
                </Button>
                <Button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#2C8E92] to-[#055355] hover:shadow-lg transition-all duration-300"
                >
                  Đăng nhập
                </Button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
