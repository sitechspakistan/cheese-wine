// components/contact/ContactSelect.jsx

export default function ContactSelect({
  name,
  value,
  onChange,
  options = [],
  placeholder,
}) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="bg-[#e8ede8] px-5 py-4 text-sm text-gray-500 w-full appearance-none focus:outline-none focus:ring-1 focus:ring-[#1e2d4a]"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        ▾
      </span>
    </div>
  );
}
