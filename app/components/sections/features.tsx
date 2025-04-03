"use client";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaChartLine,
  FaClipboardList,
  FaDog,
  FaPills,
  FaUsers,
} from "react-icons/fa";
import { Container } from "../ui/container";

const features = [
  {
    icon: <FaDog className="h-6 w-6" />,
    title: "Quản lý hồ sơ thú cưng",
    description:
      "Lưu trữ đầy đủ thông tin về thú cưng, bao gồm tiền sử bệnh, điều trị và chủng ngừa.",
  },
  {
    icon: <FaCalendarAlt className="h-6 w-6" />,
    title: "Đặt lịch & nhắc nhở",
    description:
      "Hệ thống đặt lịch thông minh với tính năng nhắc nhở tự động qua SMS hoặc email.",
  },
  {
    icon: <FaPills className="h-6 w-6" />,
    title: "Quản lý thuốc & vật tư",
    description:
      "Kiểm soát kho thuốc, vật tư y tế với cảnh báo hết hàng và hạn sử dụng.",
  },
  {
    icon: <FaChartLine className="h-6 w-6" />,
    title: "Báo cáo tài chính",
    description:
      "Tổng quan tài chính chi tiết với biểu đồ trực quan và báo cáo xuất khẩu.",
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: "Quản lý khách hàng",
    description:
      "Xây dựng mối quan hệ lâu dài với khách hàng thông qua hệ thống CRM tích hợp.",
  },
  {
    icon: <FaClipboardList className="h-6 w-6" />,
    title: "Hồ sơ y tế số",
    description:
      "Số hóa toàn bộ hồ sơ y tế, dễ dàng truy cập và chia sẻ khi cần thiết.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tính năng <span className="text-[#2C8E92]">nổi bật</span>
          </h2>
          <p className="text-gray-600 text-lg">
            GPET Vet cung cấp đầy đủ công cụ cần thiết để vận hành phòng khám
            thú y hiện đại
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2C8E92]/10 text-[#2C8E92] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
