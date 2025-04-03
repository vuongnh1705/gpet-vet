"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { DomainPopup } from "../ui/domain-popup";
import { Logo } from "../ui/logo";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDomainPopupOpen, setIsDomainPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Kiểm tra URL hash khi load trang
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    checkHash();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Hàm chuyển đổi tên thành ID section
  const getItemSectionId = (item: string) => {
    return item === "Tính năng"
      ? "features"
      : item === "Khách hàng"
      ? "testimonials"
      : item === "Bảng giá"
      ? "pricing"
      : item === "Hỏi đáp"
      ? "faq"
      : "contact";
  };

  const openDomainPopup = () => {
    setIsDomainPopupOpen(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-[#055355]"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo
              href="/"
              className="h-10"
              variant={scrolled ? "dark" : "light"}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                "Tính năng",
                "Khách hàng",
                "Bảng giá",
                "Hỏi đáp",
                "Liên hệ",
              ].map((item, index) => {
                const sectionId = getItemSectionId(item);
                const isActive = activeSection === sectionId;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={`#${sectionId}`}
                      className={`font-medium transition-colors px-3 py-2 rounded-md outline-none ${
                        scrolled
                          ? `text-gray-800 hover:text-[#2C8E92] focus:text-[#2C8E92] focus:bg-[#2C8E92]/10 focus:ring-2 focus:ring-[#2C8E92] ${
                              isActive
                                ? "text-[#2C8E92] bg-[#2C8E92]/10 ring-2 ring-[#2C8E92]"
                                : ""
                            }`
                          : `text-white hover:text-white/80 focus:bg-white/20 focus:ring-2 focus:ring-white ${
                              isActive ? "bg-white/20 ring-2 ring-white" : ""
                            }`
                      }`}
                      onClick={() => setActiveSection(sectionId)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  variant={scrolled ? "outline" : "secondary"}
                  className={
                    !scrolled
                      ? "border-white text-white hover:bg-white/20 hover:text-white bg-[#2C8E92]/60 border-2"
                      : ""
                  }
                  onClick={openDomainPopup}
                >
                  Đăng nhập
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/register">
                  <Button
                    variant={scrolled ? "default" : "secondary"}
                    className={
                      !scrolled
                        ? "bg-white text-primary-dark hover:bg-white/90"
                        : ""
                    }
                  >
                    Dùng thử miễn phí
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={scrolled ? "#2C8E92" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12"></path>
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-white/20"
            >
              <nav className="flex flex-col space-y-4">
                {[
                  "Tính năng",
                  "Khách hàng",
                  "Bảng giá",
                  "Hỏi đáp",
                  "Liên hệ",
                ].map((item, index) => {
                  const sectionId = getItemSectionId(item);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <Link
                        href={`#${sectionId}`}
                        className={`font-medium py-2 block px-3 rounded-md outline-none ${
                          scrolled
                            ? `text-gray-800 focus:text-[#2C8E92] focus:bg-[#2C8E92]/10 focus:ring-2 focus:ring-[#2C8E92] ${
                                isActive
                                  ? "text-[#2C8E92] bg-[#2C8E92]/10 ring-2 ring-[#2C8E92]"
                                  : ""
                              }`
                            : `text-white focus:bg-white/20 focus:ring-2 focus:ring-white ${
                                isActive ? "bg-white/20 ring-2 ring-white" : ""
                              }`
                        }`}
                        onClick={() => {
                          setActiveSection(sectionId);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    variant={scrolled ? "outline" : "secondary"}
                    className={`w-full ${
                      !scrolled
                        ? "border-white text-white hover:bg-white/20 hover:text-white bg-[#2C8E92]/60 border-2"
                        : ""
                    }`}
                    onClick={openDomainPopup}
                  >
                    Đăng nhập
                  </Button>
                  <Link href="/register">
                    <Button
                      className={`w-full ${
                        !scrolled
                          ? "bg-white text-primary-dark hover:bg-white/90"
                          : ""
                      }`}
                      variant={scrolled ? "default" : "secondary"}
                    >
                      Dùng thử miễn phí
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </Container>
      </motion.header>

      <DomainPopup
        isOpen={isDomainPopupOpen}
        onClose={() => setIsDomainPopupOpen(false)}
      />
    </>
  );
}
