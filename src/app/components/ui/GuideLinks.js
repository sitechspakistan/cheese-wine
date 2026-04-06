import Link from "next/link";

const GuideLinks = () => {
  const guides = [
    {
      id: "01",
      title:
        "Lisbon Guide: A Tour Through Baixa, Chiado & Príncipe Real Districts",
      href: "#",
    },
    {
      id: "02",
      title:
        "Visiting Lisbon with Kids: A Guide to Cacilhas, Belém & Lx Factory",
      href: "#",
    },
    {
      id: "03",
      title: "Lisbon Guide: Graça, Alfama and Cathedral Districts",
      href: "#",
    },
    {
      id: "04",
      title: "Lisbon in Three Days: Your Perfect Visit Plan",
      href: "#",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-6">
      {guides.map((guide) => (
        <div key={guide.id} className="flex items-start gap-3">
          <span className="text-3xl font-bold text-navy-900 leading-tight">
            {guide.id}
          </span>
          <p className="text-sm text-gray-700">
            {guide.title} -{" "}
            <Link
              href={guide.href}
              className="font-semibold underline text-navy-900"
            >
              Click Here
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};
export default GuideLinks;
