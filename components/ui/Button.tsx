import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "accent";
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isLoading = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold text-base rounded-[12px] transition-colors focus:outline-none focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px] px-6 py-3 select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#16A34A] text-white hover:bg-[#15803D] active:bg-[#15803D] focus:ring-green-300 shadow-sm",
    secondary:
      "bg-[#0D9488] text-white hover:bg-[#0F766E] active:bg-[#0F766E] focus:ring-teal-300 shadow-sm",
    outline:
      "bg-white text-[#111827] border-2 border-[#E5E7EB] hover:bg-[#F9FAFB] hover:border-[#16A34A] focus:ring-green-200",
    danger:
      "bg-[#DC2626] text-white hover:bg-[#B91C1C] active:bg-[#B91C1C] focus:ring-red-300 shadow-sm",
    accent:
      "bg-[#F59E0B] text-[#111827] hover:bg-[#D97706] active:bg-[#D97706] focus:ring-amber-300 shadow-sm font-bold", // Dark text on accent as required!
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Memuat...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
