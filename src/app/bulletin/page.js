import React from "react";
import HeroSub from "../components/sections/Hero-2";

import EmailForm from "../components/accommodation/EmailForm";
import BulletinClient from "../components/bulletin/BulletinClient";
export const metadata = {
  title: "Bulletin | Cheese & Wine",
  // description: "...",
};

const bulletinPage = () => {
  return (
    <>
      <HeroSub heading="Bulletin" overlay="true" />
      <BulletinClient />

      <EmailForm para="Get Lisbon insider tips in your inbox." />
      {/* <CTABanner
        heading="Get Lisbon insider tips in your inbox"
        buttonHref="/about"
        buttonLabel="About us"
      /> */}
    </>
  );
};

export default bulletinPage;
