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
    <div className="grid grid-cols-4  gap-6 mt-10">
      {guides.map((guide) => (
        <div key={guide.id} className="flex gap-3 items-start py-4">
          <span className="text-5xl font-medium leading-5 text-[#eba123]">
            {guide.id}
          </span>
          <p className="text-sm text-gray-700">
            {guide.title} -{" "}
            <Link
              href={guide.href}
              className="font-semibold underline text-blue-900"
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
