"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#055355]/20 via-[#2C8E92]/10 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-64 -right-32 w-96 h-96 rounded-full bg-gradient-radial from-[#2C8E92] to-transparent blur-3xl"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-gradient-radial from-[#055355] to-transparent blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#2C8E92]/20 blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "40%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute h-1 bg-gradient-to-r from-[#055355] via-[#2C8E92] to-[#4AACB0] rounded-full top-0 left-0"
              ></motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pt-4">
                Quản lý thú y{" "}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#055355] via-[#2C8E92] to-[#4AACB0] animate-gradient-shift"
                >
                  thông minh
                </motion.span>{" "}
                và hiệu quả
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-6 text-lg text-gray-700 max-w-xl"
              >
                GPET Vet giúp bạn tối ưu hóa hoạt động của phòng khám thú y với
                các tính năng quản lý toàn diện, từ hồ sơ bệnh án đến lịch hẹn
                và thanh toán.
              </motion.p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/register">
                  <Button size="lg" className="shadow-lg shadow-primary/20">
                    Dùng thử miễn phí 14 ngày
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="group">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-primary group-hover:text-white transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 2,
                      repeatDelay: 1,
                    }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </motion.svg>
                  Xem demo
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="mt-8 flex items-center text-sm text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#2C8E92] mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Không cần thẻ tín dụng - Cài đặt dễ dàng - Hỗ trợ 24/7
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-teal-dark/40 to-transparent z-10 mix-blend-overlay"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/dashboard.png"
                alt="GPET Vet Dashboard"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="rounded-2xl p-4"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium text-gray-800">
                  25 phiếu khám mới
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-20"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-xs font-medium text-gray-800">
                  Hệ thống hoạt động ổn định
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
