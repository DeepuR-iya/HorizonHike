import Image from "next/image";
import React from "react";

const Button = ({ type, title, icon, variant }) => {
  return (
    <button
      className={`flexCenter p-0 gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
