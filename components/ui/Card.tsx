import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  bordered = true,
  ...props
}) => {
  const borderStyle = bordered ? "border border-[#E5E7EB]" : "";

  return (
    <div
      className={`bg-white rounded-[16px] p-4 md:p-6 shadow-sm ${borderStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
