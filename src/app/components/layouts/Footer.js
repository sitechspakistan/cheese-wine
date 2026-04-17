import Link from "next/link";
import BookButton from "../ui/BookButton";
import Image from "next/image";

export default function Footer() {
  const sitemapItems = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Suites",
      href: "#",
    },
    {
      name: "Apartments",
      href: "",
    },
    {
      name: "Hotel LX Lapa",
      href: "/hotel-lapa",
    },
    {
      name: "Experiences",
      href: "/experiences",
    },
    {
      name: "The Bulletin",
      href: "/bulletin",
    },
    {
      name: "Contact",
      href: "/contact-us",
    },
  ];

  return (
    <footer className="bg-gray-100  border-gray-200 pt-12 pb-6 mt-auto bottom-0">
      <div className="px-8">
        {/* Top 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10   max-w-7xl mx-auto ">
          {/* Column 1 - Site Map */}
          <div>
            <h4 className="text-lg font-bold tracking-widest uppercase text-gray-900 mb-4">
              Site Map
            </h4>
            <ul className="flex flex-col gap-2">
              {sitemapItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`${item.href}`}
                    className="text-base text-gray-500 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Newsletter */}
          <div>
            <h4 className="text-lg font-bold tracking-widest uppercase text-gray-900 mb-3">
              Newsletter
            </h4>
            <p className="text-base text-gray-500 mb-4">
              Click here to Subscribe to our Newsletter
            </p>

            <BookButton label="Sign up" />

            <h4 className="text-lg font-bold tracking-widest uppercase text-gray-900 mt-8 mb-3">
              Working Hours
            </h4>
            <p className="text-base text-gray-500 mb-1">
              Our front desk most times team are available 24/7. Mon-Fri 9-7
            </p>
            <BookButton />
          </div>

          {/* Column 3 - Welcome Centre */}
          <div>
            <h4 className="text-lg font-bold tracking-widest uppercase text-gray-900 mb-4">
              Welcome Centre Location
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <div className=" mt-0.5 p-5 bg-white">
                  <Image
                    src="/assets/svg-icons/phone.svg"
                    alt="My Logo"
                    width={34}
                    height={34}
                  />
                </div>

                <div>
                  <p className="text-lg text-gray-900 font-bold tracking-wide mb-0.5">
                    Contact Us
                  </p>
                  <p className="text-sm text-gray-600">+351 000 000 000</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className=" mt-0.5 p-5 bg-white">
                  <Image
                    src="/assets/svg-icons/mail.svg"
                    alt="My Logo"
                    width={34}
                    height={34}
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-900 font-bold tracking-wide mb-0.5">
                    Email
                  </p>
                  <p className="text-sm text-gray-600">hello@cheese.wine</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className=" mt-0.5 p-5 bg-white">
                  <Image
                    src="/assets/svg-icons/location.svg"
                    alt="My Logo"
                    width={34}
                    height={34}
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-900 font-bold tracking-wide mb-0.5">
                    Address
                  </p>
                  <p className="text-sm text-gray-600">
                    Rua Latino Coelho 5,
                    <br />
                    1050-133 Lisboa, Portugal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col pt-6 border-t border-gray-300 items-center gap-3">
          <p className="text-s text-gray-800">
            © 2026 Cheese & Wine | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
