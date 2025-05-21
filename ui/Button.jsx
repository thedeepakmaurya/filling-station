const Button = ({ label, onClick }) => {
  return (
    <button
      className="text-white border border-gray-500 text-xs font-semibold  px-2 py-1 bg-sky-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
