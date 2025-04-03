"use client";
import { useMemo } from "react";
import { cn } from "../../lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Tạo màu nền ngẫu nhiên nhưng ổn định dựa trên tên
function stringToColor(string: string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Danh sách màu pastel đẹp
  const colors = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-violet-500",
    "bg-fuchsia-500",
    "bg-rose-500",
    "bg-sky-500",
  ];

  // Lấy màu từ hash
  return colors[Math.abs(hash) % colors.length];
}

// Lấy 2 chữ cái đầu từ tên
function getInitials(name: string) {
  const words = name.split(" ");

  if (words.length === 1) {
    // Nếu chỉ có một từ, lấy 2 chữ cái đầu
    return name.substring(0, 2).toUpperCase();
  } else {
    // Lấy chữ cái đầu của 2 từ
    const firstInitial = words[0].charAt(0);
    // Lấy chữ cái đầu của từ cuối cùng
    const lastInitial = words[words.length - 1].charAt(0);

    return (firstInitial + lastInitial).toUpperCase();
  }
}

export function Avatar({ name, className, size = "md" }: AvatarProps) {
  const initials = useMemo(() => getInitials(name), [name]);
  const bgColor = useMemo(() => stringToColor(name), [name]);

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center text-white font-medium",
        bgColor,
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
