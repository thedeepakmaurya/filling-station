const TextArea = () => {
  return (
    <span className="flex gap-1 items-center">
      <textarea className="rounded h-5 w-full border border-gray-400 outline-0 focus:border-gray-600 px-1 " />{" "}
      <span className="text-red-500">*</span>
    </span>
  );
};

export default TextArea;
