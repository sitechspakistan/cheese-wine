import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const contactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-30">
      <h1 className="text-4xl font-bold text-center text-[#1e2d4a] mb-12">
        We'd Love To Hear From You...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.41434142516!2d-9.242136947346685!3d38.74405052684929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2s!4v1775848201098!5m2!1sen!2s"
          hours="Our reservation and front desk team are available daily from 8am till 9pm."
        />
      </div>
    </div>
  );
};

export default contactPage;
