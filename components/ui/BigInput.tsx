import React from "react";

export interface BigInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const BigInput = React.forwardRef<HTMLInputElement, BigInputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = "", id, ...props }, ref) => {
    const inputId = id || `big-input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {/* Label di atas input, bukan placeholder-only */}
        <label htmlFor={inputId} className="text-base font-semibold text-[#111827]">
          {label}
        </label>

        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[#6B7280]">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className={`w-full min-h-[48px] px-4 ${leftIcon ? "pl-11" : ""} ${
              rightIcon ? "pr-11" : ""
            } bg-white text-[#111827] text-base rounded-[12px] border ${
              error ? "border-[#DC2626] focus:ring-red-200" : "border-[#E5E7EB] focus:ring-green-200"
            } focus:border-[#16A34A] focus:outline-none focus:ring-4 transition-all placeholder:text-[#9CA3AF] disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3.5 flex items-center text-[#6B7280]">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-sm font-medium text-[#DC2626] mt-0.5" role="alert">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p className="text-sm text-[#6B7280] mt-0.5">{helperText}</p>
        )}
      </div>
    );
  }
);

BigInput.displayName = "BigInput";

export default BigInput;
