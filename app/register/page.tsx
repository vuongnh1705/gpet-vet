"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Container } from "../components/ui/container";

// Dữ liệu mẫu cho các dropdown
const provinces = [
  { id: "1", name: "Hà Nội" },
  { id: "2", name: "TP. Hồ Chí Minh" },
  { id: "3", name: "Đà Nẵng" },
  { id: "4", name: "Hải Phòng" },
  { id: "5", name: "Cần Thơ" },
];

interface District {
  id: string;
  name: string;
  provinceId: string;
}

const districts: District[] = [
  { id: "1", name: "Quận Ba Đình", provinceId: "1" },
  { id: "2", name: "Quận Hoàn Kiếm", provinceId: "1" },
  { id: "3", name: "Quận Hai Bà Trưng", provinceId: "1" },
  { id: "4", name: "Quận 1", provinceId: "2" },
  { id: "5", name: "Quận 3", provinceId: "2" },
  { id: "6", name: "Quận 5", provinceId: "2" },
  { id: "7", name: "Quận Hải Châu", provinceId: "3" },
  { id: "8", name: "Quận Thanh Khê", provinceId: "3" },
  { id: "9", name: "Quận Ngô Quyền", provinceId: "4" },
  { id: "10", name: "Quận Lê Chân", provinceId: "4" },
  { id: "11", name: "Quận Ninh Kiều", provinceId: "5" },
  { id: "12", name: "Quận Cái Răng", provinceId: "5" },
];

interface Ward {
  id: string;
  name: string;
  districtId: string;
}

const wards: Ward[] = [
  { id: "1", name: "Phường Phúc Tân", districtId: "1" },
  { id: "2", name: "Phường Đồng Xuân", districtId: "1" },
  { id: "3", name: "Phường Hàng Bạc", districtId: "2" },
  { id: "4", name: "Phường Hàng Bồ", districtId: "2" },
  { id: "5", name: "Phường Phạm Đình Hổ", districtId: "3" },
  { id: "6", name: "Phường Bùi Thị Xuân", districtId: "3" },
  { id: "7", name: "Phường Bến Nghé", districtId: "4" },
  { id: "8", name: "Phường Bến Thành", districtId: "4" },
  { id: "9", name: "Phường 1", districtId: "5" },
  { id: "10", name: "Phường 2", districtId: "5" },
  { id: "11", name: "Phường 3", districtId: "6" },
  { id: "12", name: "Phường 4", districtId: "6" },
  { id: "13", name: "Phường Thanh Bình", districtId: "7" },
  { id: "14", name: "Phường Thuận Phước", districtId: "7" },
  { id: "15", name: "Phường Tam Thuận", districtId: "8" },
  { id: "16", name: "Phường Thanh Khê Tây", districtId: "8" },
  { id: "17", name: "Phường Đông Hải", districtId: "9" },
  { id: "18", name: "Phường Đằng Lâm", districtId: "9" },
  { id: "19", name: "Phường Dư Hàng", districtId: "10" },
  { id: "20", name: "Phường Lam Sơn", districtId: "10" },
  { id: "21", name: "Phường Cái Khế", districtId: "11" },
  { id: "22", name: "Phường An Hòa", districtId: "11" },
  { id: "23", name: "Phường Tân Phú", districtId: "12" },
  { id: "24", name: "Phường Phú Thứ", districtId: "12" },
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    provinceId: "",
    districtId: "",
    wardId: "",
    address: "",
  });

  const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
  const [filteredWards, setFilteredWards] = useState<Ward[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "provinceId") {
      setFormData((prev) => ({ ...prev, districtId: "", wardId: "" }));
      setFilteredDistricts(
        districts.filter((district) => district.provinceId === value)
      );
      setFilteredWards([]);
    } else if (name === "districtId") {
      setFormData((prev) => ({ ...prev, wardId: "" }));
      setFilteredWards(wards.filter((ward) => ward.districtId === value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra mật khẩu xác nhận
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    console.log(formData);
    // Xử lý đăng ký tại đây
    alert("Đăng ký thành công!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <main className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-[#2C8E92] hover:underline"
            >
              <FaArrowLeft className="mr-2" /> Quay lại trang chủ
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Đăng ký dùng thử{" "}
                <span className="text-[#2C8E92]">GPET Vet</span>
              </h1>
              <p className="text-gray-600">
                Điền thông tin bên dưới để đăng ký dùng thử miễn phí trong 14
                ngày
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none pr-10"
                    placeholder="Nhập mật khẩu"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5" />
                    ) : (
                      <FaEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Mật khẩu phải có ít nhất 6 ký tự
                </p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Xác nhận mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none pr-10"
                    placeholder="Nhập lại mật khẩu"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="h-5 w-5" />
                    ) : (
                      <FaEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                  placeholder="0xxxxxxxxx"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="provinceId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tỉnh/Thành phố <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="provinceId"
                    name="provinceId"
                    required
                    value={formData.provinceId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none appearance-none bg-white pr-10 bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l5%205c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1%200-1.4s-1-.4-1.4%200z%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_1rem]"
                  >
                    <option value="">Chọn Tỉnh/Thành phố</option>
                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="districtId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quận/Huyện <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="districtId"
                    name="districtId"
                    required
                    value={formData.districtId}
                    onChange={handleChange}
                    disabled={!formData.provinceId}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none appearance-none bg-white pr-10 bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l5%205c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1%200-1.4s-1-.4-1.4%200z%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_1rem] disabled:bg-gray-100 disabled:text-gray-500"
                  >
                    <option value="">Chọn Quận/Huyện</option>
                    {filteredDistricts.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="wardId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phường/Xã <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="wardId"
                    name="wardId"
                    required
                    value={formData.wardId}
                    onChange={handleChange}
                    disabled={!formData.districtId}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none appearance-none bg-white pr-10 bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l5%205c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1%200-1.4s-1-.4-1.4%200z%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_1rem] disabled:bg-gray-100 disabled:text-gray-500"
                  >
                    <option value="">Chọn Phường/Xã</option>
                    {filteredWards.map((ward) => (
                      <option key={ward.id} value={ward.id}>
                        {ward.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số nhà, tên đường
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C8E92] focus:border-[#2C8E92] focus:outline-none"
                    placeholder="Số nhà, tên đường"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full text-base py-3">
                  Đăng ký dùng thử
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600">
                Đã có tài khoản?{" "}
                <Link
                  href="/login"
                  className="text-[#2C8E92] hover:underline font-medium"
                >
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
