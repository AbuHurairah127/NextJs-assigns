import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-12 py-3">
      <p className="text-white text-center">
        &copy;Copyrights claimed by{" "}
        <a href="/" className="font-bold italic">
          Abu Hurairah.
        </a>{" "}
      </p>
      <p className="text-center font-thin text-white/40">
        App developed using an API providing dummy data.
      </p>
    </div>
  );
};

export default Footer;
