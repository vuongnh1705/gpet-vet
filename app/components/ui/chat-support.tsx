"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  FaComment,
  FaFacebookMessenger,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const SocialButton = ({ icon, label, color, onClick }: SocialButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-white ${color} hover:shadow-lg transition-all`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </motion.button>
  );
};

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý ảo của GPET Vet. Tôi có thể giúp gì cho bạn?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    if (showChat) {
      setShowChat(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const openFacebookChat = () => {
    window.open("https://m.me/gpetvet", "_blank");
  };

  const openZaloChat = () => {
    window.open("https://zalo.me/gpetvet", "_blank");
  };

  const startLiveChat = () => {
    setShowChat(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Thêm tin nhắn của người dùng
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Hiển thị trạng thái đang gõ
    setIsTyping(true);

    // Sau 1 giây, thêm phản hồi tự động
    setTimeout(() => {
      setIsTyping(false);

      const botResponses = [
        "Cảm ơn bạn đã liên hệ với GPET Vet. Nhân viên của chúng tôi sẽ phản hồi trong ít phút.",
        "Chúng tôi đã ghi nhận yêu cầu của bạn và sẽ xử lý sớm nhất có thể.",
        "Bạn có thể cho tôi biết thêm về vấn đề bạn đang gặp phải không?",
        "Tôi hiểu rồi. Bạn đã thử khởi động lại phần mềm chưa?",
        "Để được hỗ trợ kỹ thuật chuyên sâu, bạn có thể để lại số điện thoại để chúng tôi gọi lại.",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  // Cuộn xuống khi có tin nhắn mới
  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && !showChat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-xl shadow-xl p-4 mb-4 w-[85vw] sm:w-72 max-w-[300px]"
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Hỗ trợ trực tuyến
                </h3>
                <p className="text-sm text-gray-600">
                  Chọn phương thức liên hệ
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <SocialButton
                  icon={<FaComment />}
                  label="Chat trực tiếp"
                  color="bg-[#2C8E92]"
                  onClick={startLiveChat}
                />
                <SocialButton
                  icon={<FaFacebookMessenger />}
                  label="Facebook Messenger"
                  color="bg-[#0A7CFF]"
                  onClick={openFacebookChat}
                />
                <SocialButton
                  icon={<SiZalo />}
                  label="Zalo"
                  color="bg-[#0068FF]"
                  onClick={openZaloChat}
                />
              </div>
            </motion.div>
          )}

          {showChat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-xl shadow-xl mb-4 w-[85vw] sm:w-96 md:w-[450px] overflow-hidden flex flex-col fixed bottom-20 right-0 sm:right-6 sm:bottom-auto sm:relative"
              style={{
                height: "calc(100vh - 160px)",
                maxHeight: "700px",
              }}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#2C8E92] text-white p-3 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <FaComment className="text-sm" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Hỗ trợ GPET Vet</h3>
                    <p className="text-xs opacity-80">Trực tuyến</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-white hover:bg-white/20 p-1 rounded-full"
                >
                  <FaTimes />
                </button>
              </motion.div>

              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-4 flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!message.isUser && (
                      <div className="h-8 w-8 rounded-full bg-[#2C8E92] flex items-center justify-center mr-2 flex-shrink-0">
                        <FaComment className="text-white text-xs" />
                      </div>
                    )}
                    <motion.div
                      className={`rounded-lg px-3 py-2 max-w-[80%] ${
                        message.isUser
                          ? "bg-[#2C8E92] text-white"
                          : "bg-white text-gray-800 shadow-sm"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          message.isUser ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Trạng thái đang gõ */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex mb-4 items-center"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#2C8E92] flex items-center justify-center mr-2 flex-shrink-0">
                      <FaComment className="text-white text-xs" />
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg shadow-sm flex items-center space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0,
                        }}
                      ></motion.div>
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0.2,
                        }}
                      ></motion.div>
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0.4,
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="p-3 bg-white border-t border-gray-200 flex"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-3 py-2 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#2C8E92]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2C8E92] text-white px-4 rounded-r-lg hover:bg-[#055355] transition-colors"
                >
                  <FaPaperPlane />
                </motion.button>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0px 0px 0px rgba(44, 142, 146, 0.4)",
              "0px 0px 15px rgba(44, 142, 146, 0.6)",
              "0px 0px 0px rgba(44, 142, 146, 0.4)",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            repeatDelay: 1,
          }}
          className={`rounded-full w-14 h-14 flex items-center justify-center text-white shadow-lg ${
            isOpen || showChat ? "bg-gray-600" : "bg-[#2C8E92]"
          }`}
          onClick={toggleChat}
        >
          {isOpen || showChat ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaComment className="text-xl" />
          )}
        </motion.button>
      </div>
    </>
  );
}
