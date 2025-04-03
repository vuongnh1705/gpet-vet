"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Container } from "../ui/container";
import { Logo } from "../ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#055355] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo variant="light" href="/" className="mb-6" />
            <p className="text-gray-100 mb-6">
              Giải pháp quản lý toàn diện cho phòng khám và bệnh viện thú y
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Sản phẩm</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Tính năng
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Bảng giá
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Tải về
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Cập nhật
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Công ty</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Đội ngũ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Khách hàng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Hỗ trợ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#contact"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Trung tâm hỗ trợ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C8E92]/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-100">
            &copy; {currentYear} GPET Vet. Tất cả các quyền được bảo lưu.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-100 hover:text-white transition-colors mr-6"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-white transition-colors"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
