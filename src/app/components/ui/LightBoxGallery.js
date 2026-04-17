"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const LightboxGallery = ({ images = [], columns = 4, height = 300 }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* Grid */}
      <div
        className="gap-4 mt-10 grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full cursor-pointer overflow-hidden rounded-lg"
            style={{ height: `${height}px` }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
};

export default LightboxGallery;
