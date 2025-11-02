export default function Button({ children, disabled, type, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className=" p-3 my-5 w-full border border-gray-400 shadow-sm shadow-blue-400 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
    >
      {children}
    </button>
  );
}
