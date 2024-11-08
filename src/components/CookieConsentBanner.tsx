"use client";
import React, { useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsentBanner = () => {
  
  const [showConsent, setShowConsent] = useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("Consent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("Consent", "true", { secure:true, maxAge: 60 * 60 * 24 });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-10">
      <div className="fixed bottom-0 left-0 right-0 flex items-center flex-col gap-5 align-center lg:justify-between px-4 py-8 bg-black z-99 border border-t-white lg:flex-row">
        <span className="text-white text-base lg:mr-16 bg-dark">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
        </span>
        <button className="bg-green-500 py-2 px-8 rounded text-white border border-white" onClick={() => acceptCookie()}>
          Accept
        </button>
        <button className="bg-green-500 py-2 px-8 rounded text-white border border-white" onClick={() => acceptCookie()}>
          Not Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
