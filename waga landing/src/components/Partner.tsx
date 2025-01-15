import React from "react";

const Partners = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 2xl:px-0 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Our partners on the WAGA Coffee Tokenization Platform
        </h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <img
            src="/images/partner/uideck.svg"
            alt="Partner 1"
            className="w-28 h-28 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/images/partner/tailgrids.svg"
            alt="Partner 2"
            className="w-28 h-28 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/images/partner/lineicons.svg"
            alt="Partner 3"
            className="w-28 h-28 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/images/partner/ayroui.svg"
            alt="Partner 4"
            className="w-28 h-28 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/images/partner/plainadmin.svg"
            alt="Partner 5"
            className="w-28 h-28 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
