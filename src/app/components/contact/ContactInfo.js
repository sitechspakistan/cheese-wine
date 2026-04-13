// components/contact/ContactInfo.jsx

export default function ContactInfo({
  mapSrc = "",
  hours = "Our reservation and front desk team are available daily from 8am till 9pm.",
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Working Hours */}
      <div>
        <h3 className="text-lg font-semibold text-[#1e2d4a] mb-2">
          Working Hours
        </h3>
        <p className="text-sm text-gray-600">{hours}</p>
      </div>

      {/* Map */}
      <div className="w-full h-[400px]">
        <iframe
          className="border-0 w-full h-full"
          src={mapSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe
          
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          
        /> */}
      </div>
    </div>
  );
}
