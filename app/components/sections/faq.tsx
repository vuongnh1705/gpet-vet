"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Container } from "../ui/container";

const faqs = [
  {
    question: "GPET Vet có phù hợp với phòng khám thú y quy mô nhỏ không?",
    answer:
      "Hoàn toàn phù hợp! Chúng tôi cung cấp gói Cơ bản với đầy đủ tính năng thiết yếu dành riêng cho các phòng khám quy mô nhỏ. Bạn chỉ trả tiền cho những gì bạn thực sự cần.",
  },
  {
    question: "Làm thế nào để chuyển dữ liệu từ phần mềm cũ sang GPET Vet?",
    answer:
      "Chúng tôi cung cấp dịch vụ chuyển đổi dữ liệu miễn phí cho tất cả các gói. Đội ngũ kỹ thuật sẽ làm việc với bạn để nhập dữ liệu từ hệ thống hiện tại sang GPET Vet một cách an toàn và chính xác.",
  },
  {
    question: "GPET Vet có thể tích hợp với các phần mềm kế toán không?",
    answer:
      "Có, GPET Vet có thể tích hợp với các phần mềm kế toán phổ biến như MISA, Fast, và nhiều phần mềm khác thông qua API của chúng tôi (có sẵn trong gói Doanh nghiệp).",
  },
  {
    question: "Phần mềm có hỗ trợ thiết bị di động không?",
    answer:
      "GPET Vet được thiết kế hoàn toàn responsive, hoạt động mượt mà trên mọi thiết bị từ máy tính để bàn đến điện thoại di động. Chúng tôi cũng cung cấp ứng dụng di động cho iOS và Android.",
  },
  {
    question: "Làm thế nào để bắt đầu dùng thử GPET Vet?",
    answer:
      "Chỉ cần đăng ký tài khoản trên trang web của chúng tôi để bắt đầu dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng và bạn có thể hủy bất kỳ lúc nào.",
  },
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer:
      "Bảo mật dữ liệu là ưu tiên hàng đầu của chúng tôi. Chúng tôi sử dụng mã hóa TLS/SSL tiêu chuẩn ngành, lưu trữ dữ liệu trên máy chủ an toàn với các biện pháp bảo vệ tiên tiến, và tuân thủ tất cả các quy định về quyền riêng tư dữ liệu.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left font-medium"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <FaChevronDown
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Câu hỏi <span className="text-[#2C8E92]">thường gặp</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Những thắc mắc phổ biến về GPET Vet
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Không tìm thấy câu trả lời bạn đang tìm kiếm?{" "}
            <a href="#contact" className="text-[#2C8E92] font-medium">
              Liên hệ với chúng tôi
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
