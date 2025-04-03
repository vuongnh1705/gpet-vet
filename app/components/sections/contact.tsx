"use client";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liên hệ <span className="text-[#2C8E92]">với chúng tôi</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hãy cho chúng tôi biết cách chúng tôi có thể giúp bạn quản lý phòng
            khám thú y hiệu quả hơn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                  placeholder="Nhập số điện thoại của bạn"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Chủ đề
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none text-gray-500 appearance-none bg-white pr-10 bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l5%205c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1%200-1.4s-1-.4-1.4%200z%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_1rem]"
                >
                  <option value="" className="text-gray-500">
                    Chọn chủ đề
                  </option>
                  <option value="sales">Tư vấn bán hàng</option>
                  <option value="support">Hỗ trợ kỹ thuật</option>
                  <option value="partnership">Hợp tác</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                  placeholder="Nhập tin nhắn của bạn"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Gửi tin nhắn
              </Button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#2C8E92]/10 text-[#2C8E92]">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600">info@gpet-vet.com</p>
                  <p className="text-gray-600">support@gpet-vet.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#2C8E92]/10 text-[#2C8E92]">
                  <FaPhone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Điện thoại</h4>
                  <p className="text-gray-600">
                    028 3822 XXXX (Tư vấn bán hàng)
                  </p>
                  <p className="text-gray-600">1800 XXXX (Hỗ trợ kỹ thuật)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[#2C8E92]/10 text-[#2C8E92]">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Địa chỉ</h4>
                  <p className="text-gray-600">
                    123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Giờ làm việc</h4>
              <p className="text-gray-600">Thứ Hai - Thứ Sáu: 8:00 - 17:00</p>
              <p className="text-gray-600">Thứ Bảy: 8:00 - 12:00</p>
              <p className="text-gray-600">Chủ Nhật: Nghỉ</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
