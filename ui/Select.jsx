const Select = ({ options }) => {
  return (
    <span className="flex gap-1 items-center">
      <select className="rounded h-5 w-36 border border-gray-400 outline-0 focus:border-gray-600 px-1 ">
        <option disabled>--Select One--</option>
        {options?.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
      <span className="text-red-500">*</span>
    </span>
  );
};

export default Select;
