"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Avatar } from "../ui/avatar";
import { Container } from "../ui/container";

const testimonials = [
  {
    quote:
      "GPET Vet đã giúp phòng khám của chúng tôi tiết kiệm hơn 20 giờ làm việc mỗi tuần. Quản lý lịch hẹn và hồ sơ bệnh án trở nên dễ dàng hơn bao giờ hết.",
    name: "Bác sĩ Minh Nguyễn",
    position: "Chủ phòng khám Thú y Hạnh Phúc",
  },
  {
    quote:
      "Tôi đặc biệt ấn tượng với tính năng quản lý thuốc và vật tư y tế. Giờ đây chúng tôi không còn lo lắng về việc thiếu hàng hoặc quá hạn sử dụng.",
    name: "Bác sĩ Thu Hoàng",
    position: "Bệnh viện Thú cưng Sài Gòn",
  },
  {
    quote:
      "Giao diện trực quan và dễ sử dụng, nhân viên của chúng tôi chỉ mất vài giờ để làm quen với phần mềm. Hỗ trợ kỹ thuật luôn sẵn sàng giúp đỡ khi cần.",
    name: "Anh Tuấn Phạm",
    position: "Quản lý PETS Care Center",
  },
  {
    quote:
      "Khả năng tùy chỉnh báo cáo đã giúp chúng tôi nắm bắt tốt hơn tình hình kinh doanh. Chúng tôi có thể dễ dàng theo dõi các chỉ số quan trọng, từ đó đưa ra quyết định đúng đắn.",
    name: "Chị Hương Trần",
    position: "Giám đốc Pet Hospital",
  },
  {
    quote:
      "Tính năng nhắc nhở lịch hẹn tự động đã giúp giảm tỷ lệ khách bỏ hẹn của chúng tôi tới 60%. Điều này tiết kiệm rất nhiều thời gian và tăng hiệu quả trong phục vụ khách hàng.",
    name: "Bác sĩ Đức Lê",
    position: "Phòng khám thú cưng Vip Pet",
  },
  {
    quote:
      "Ứng dụng di động cho khách hàng là một điểm cộng lớn. Họ có thể dễ dàng đặt lịch và xem lịch sử khám bệnh của thú cưng. Điều này đã làm tăng sự hài lòng của khách hàng.",
    name: "Chị Ngọc Linh",
    position: "Quản lý dịch vụ PetLove Center",
  },
  {
    quote:
      "Hệ thống quản lý khách hàng thông minh giúp chúng tôi xây dựng mối quan hệ dài lâu với khách hàng. Việc gửi thông báo chăm sóc định kỳ được tự động hóa hoàn toàn.",
    name: "Anh Duy Tân",
    position: "Chủ chuỗi phòng khám Pet Luxury",
  },
  {
    quote:
      "Tích hợp dễ dàng với nhiều nền tảng thanh toán khác nhau đã giúp việc thanh toán trở nên linh hoạt hơn cho khách hàng. Hỗ trợ kỹ thuật rất nhanh và hiệu quả.",
    name: "Chị Mai Anh",
    position: "Giám đốc tài chính Animal Care",
  },
];

export function TestimonialsSection() {
  const carousel = useRef<HTMLDivElement>(null);

  // Số lượng testimonials hiển thị trên mỗi slide tùy theo kích thước màn hình
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3; // Mặc định desktop
  };

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    handleResize(); // Thiết lập ban đầu

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tạo danh sách testimonials mở rộng để infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khách hàng <span className="text-[#2C8E92]">nói gì</span> về chúng
            tôi
          </h2>
          <p className="text-gray-600 text-lg">
            Đã có hơn 200+ phòng khám thú y trên toàn quốc tin dùng GPET Vet
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.div
            ref={carousel}
            className="cursor-grab"
            animate={{
              x: "-100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            <div className="flex gap-6 px-3 py-6">
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md flex-shrink-0"
                  style={{
                    width: `calc((100% / ${itemsPerView}) - ${
                      ((itemsPerView - 1) * 24) / itemsPerView
                    }px)`,
                  }}
                >
                  <div className="p-2">
                    <FaQuoteLeft className="text-[#2C8E92] opacity-20 text-4xl mb-4" />
                    <p className="text-gray-700 mb-6 italic min-h-[150px]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Avatar name={testimonial.name} size="md" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 px-8 py-6 rounded-lg max-w-2xl text-center">
            <p className="text-lg font-medium mb-2">
              <span className="text-[#2C8E92] font-bold text-xl">98%</span>{" "}
              khách hàng hài lòng với dịch vụ của chúng tôi
            </p>
            <p className="text-gray-600">
              Dựa trên hơn 500 đánh giá từ khách hàng trong 12 tháng qua
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
