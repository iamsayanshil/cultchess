import React from "react";

const WPButton = () => {
  // Your custom message
  const message = encodeURIComponent(
    "Hello Cultchess Academy, I'm interested in chess coaching."
  );

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={`https://wa.me/918509491196?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsapp.svg"
          alt="WhatsApp"
          className="h-16 w-16"
        />
      </a>
    </div>
  );
};

export default WPButton;
