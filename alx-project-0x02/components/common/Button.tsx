import { type ButtonProps } from "@/interfaces";

export default function Button({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  let sizeClasses = "";

  if (size === "small") sizeClasses = "px-3 py-1 text-sm";
  else if (size === "large") sizeClasses = "px-5 py-3 text-lg";
  else sizeClasses = "px-4 py-2 text-base"; // medium

  return (
    <button
      className={`bg-blue-600 text-white hover:bg-blue-700 transition font-medium ${sizeClasses} ${shape}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}