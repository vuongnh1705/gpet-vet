"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

const pricingPlans = [
  {
    name: "Cơ bản",
    price: "899.000",
    period: "tháng",
    description: "Dành cho phòng khám nhỏ đang bắt đầu.",
    features: [
      "Quản lý tối đa 500 bệnh án",
      "Đặt lịch hẹn cơ bản",
      "Quản lý thuốc & vật tư",
      "Hỗ trợ email",
      "1 người dùng",
      "1 buổi đào tạo trực tuyến",
      "Cập nhật phần mềm",
    ],
    cta: "Dùng thử miễn phí",
    popular: false,
  },
  {
    name: "Chuyên nghiệp",
    price: "1.699.000",
    period: "tháng",
    description: "Dành cho phòng khám đang phát triển.",
    features: [
      "Quản lý không giới hạn bệnh án",
      "Đặt lịch hẹn nâng cao",
      "Quản lý thuốc & vật tư đầy đủ",
      "Báo cáo tài chính",
      "Hỗ trợ 24/7",
      "3 người dùng",
      "Tích hợp SMS nhắc hẹn",
      "2 buổi đào tạo trực tuyến",
      "Xử lý dữ liệu cũ (tối đa 1000 bản ghi)",
    ],
    cta: "Dùng thử miễn phí",
    popular: true,
  },
  {
    name: "Doanh nghiệp",
    price: "3.299.000",
    period: "tháng",
    description: "Dành cho chuỗi phòng khám thú y.",
    features: [
      "Tất cả tính năng của gói Chuyên nghiệp",
      "Không giới hạn người dùng",
      "Quản lý nhiều chi nhánh",
      "API tích hợp",
      "Tư vấn triển khai riêng",
      "Sao lưu dữ liệu hàng ngày",
      "Báo cáo tùy chỉnh",
      "Hỗ trợ kỹ thuật 24/7 ưu tiên",
      "3 buổi đào tạo trực tiếp",
      "Tích hợp với hệ thống khác",
      "Xử lý dữ liệu cũ không giới hạn",
    ],
    cta: "Liên hệ tư vấn",
    popular: false,
  },
  {
    name: "Trọn gói",
    price: "4.999.000",
    period: "tháng",
    description: "Giải pháp toàn diện với đầy đủ dịch vụ.",
    features: [
      "Tất cả tính năng của gói Doanh nghiệp",
      "Phát triển tính năng tùy chỉnh (2 tính năng/năm)",
      "Tư vấn tối ưu quy trình làm việc hàng quý",
      "4 buổi đào tạo trực tiếp hàng năm",
      "Xóa dữ liệu sai không giới hạn",
      "Tích hợp với tất cả hệ thống bên ngoài",
      "Hỗ trợ đặc biệt qua đường dây nóng",
      "Nâng cấp ưu tiên khi có phiên bản mới",
      "Bảo trì hệ thống không giới hạn",
    ],
    cta: "Liên hệ tư vấn",
    popular: false,
  },
];

const additionalServices = [
  {
    name: "Xóa dữ liệu sai",
    price: "500.000",
    unit: "lần",
    description: "Dịch vụ xóa dữ liệu nhập sai hoặc không cần thiết.",
    details: "Áp dụng cho tối đa 500 bản ghi mỗi lần yêu cầu.",
  },
  {
    name: "Xử lý dữ liệu cũ",
    price: "2.000.000",
    unit: "lần",
    description: "Chuyển đổi dữ liệu từ phần mềm cũ sang hệ thống mới.",
    details:
      "Giá cho tối đa 5000 bản ghi. Khối lượng lớn hơn sẽ được báo giá riêng.",
  },
  {
    name: "Phát triển tính năng tùy chỉnh",
    price: "5.000.000",
    unit: "tính năng",
    description: "Phát triển các tính năng tùy chỉnh theo yêu cầu.",
    details:
      "Giá khởi điểm cho tính năng đơn giản. Tính năng phức tạp sẽ được báo giá riêng.",
  },
  {
    name: "Đào tạo và hướng dẫn sử dụng",
    price: "1.500.000",
    unit: "buổi",
    description: "Buổi đào tạo trực tiếp tại cơ sở của khách hàng.",
    details: "Mỗi buổi kéo dài 4 giờ cho tối đa 10 người tham gia.",
  },
  {
    name: "Hỗ trợ kỹ thuật 24/7",
    price: "1.000.000",
    unit: "tháng",
    description: "Dịch vụ hỗ trợ kỹ thuật ưu tiên 24/7.",
    details: "Bao gồm hỗ trợ qua điện thoại, email và truy cập từ xa.",
  },
  {
    name: "Tích hợp với hệ thống khác",
    price: "3.000.000",
    unit: "hệ thống",
    description: "Tích hợp với CRM, ERP, hoặc các công cụ quản lý khác.",
    details:
      "Giá cho tích hợp cơ bản. Tích hợp phức tạp sẽ được báo giá riêng.",
  },
  {
    name: "Bảo trì và cập nhật hệ thống",
    price: "800.000",
    unit: "tháng",
    description: "Dịch vụ bảo trì định kỳ và cập nhật phần mềm.",
    details: "Bao gồm kiểm tra hệ thống, sao lưu dữ liệu và cập nhật bảo mật.",
  },
  {
    name: "Tư vấn tối ưu hóa quy trình",
    price: "2.500.000",
    unit: "buổi",
    description: "Tư vấn tối ưu hóa quy trình làm việc.",
    details:
      "Mỗi buổi kéo dài 4 giờ và bao gồm phân tích quy trình hiện tại, đề xuất cải tiến.",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Phần 1: Bảng giá chính */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bảng giá <span className="text-[#2C8E92]">phù hợp</span> cho mọi nhu
            cầu
          </h2>
          <p className="text-gray-600 text-lg">
            Lựa chọn gói dịch vụ phù hợp với quy mô và nhu cầu của phòng khám
            của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-md overflow-hidden h-full ${
                plan.popular ? "ring-2 ring-[#2C8E92]" : ""
              }`}
            >
              <div
                className={`text-center py-2 text-sm font-medium ${
                  plan.popular
                    ? "bg-[#2C8E92] text-white"
                    : plan.name === "Cơ bản"
                    ? "bg-[#7FB3B6] text-white"
                    : plan.name === "Doanh nghiệp"
                    ? "bg-[#055355] text-white"
                    : "bg-[#034446] text-white"
                }`}
              >
                {plan.popular
                  ? "Phổ biến nhất"
                  : plan.name === "Cơ bản"
                  ? "Tiết kiệm"
                  : plan.name === "Doanh nghiệp"
                  ? "Cao cấp"
                  : "Toàn diện"}
              </div>
              <div className="px-6 pt-6 pb-8 flex flex-col h-full">
                {/* Phần 1: Tiêu đề và mô tả */}
                <div className="mb-5 h-[80px]">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-700">{plan.description}</p>
                </div>

                {/* Phần 2: Giá */}
                <div className="mb-6 pb-5 border-b border-gray-100">
                  <span className="text-4xl font-bold">{plan.price}₫</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>

                {/* Phần 3: Danh sách tính năng */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheck className="text-[#2C8E92] mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phần 4: Nút hành động */}
                <div className="pb-8 mt-auto">
                  {plan.cta === "Dùng thử miễn phí" ? (
                    <Link href="/register" className="w-full">
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full py-3 text-base hover:shadow-lg transition-all"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  ) : (
                    <Link href="#contact" className="w-full">
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full py-3 text-base hover:shadow-lg transition-all"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phần 2: Dịch vụ bổ sung */}
        <div className="mt-24 mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dịch vụ <span className="text-[#2C8E92]">bổ sung</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Các dịch vụ thêm giúp tối ưu hóa việc sử dụng phần mềm GPET Vet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#2C8E92]">
                {service.name}
              </h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold">{service.price}₫</span>
                <span className="text-gray-500 ml-1">/{service.unit}</span>
              </div>
              <div className="flex items-start text-sm text-gray-500">
                <FaInfoCircle className="h-4 w-4 mt-0.5 mr-2 text-[#2C8E92] flex-shrink-0" />
                <p>{service.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            Tất cả các gói đều bao gồm cập nhật miễn phí và triển khai ban đầu
          </p>
          <p className="mt-2">
            Cần một giải pháp tùy chỉnh?{" "}
            <a href="#contact" className="text-[#2C8E92] font-medium">
              Liên hệ với chúng tôi
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
