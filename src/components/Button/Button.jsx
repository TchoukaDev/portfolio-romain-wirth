export default function Button({ href, children, ...props }) {
  if (href) {
    return (
      <a
        href={href}
        className=" p-3 my-5 mx-auto block min-w-[150px] w-fit  text-center border border-gray-400 shadow-sm shadow-blue-400 rounded-lg cursor-pointer bg-blue-400/80 hover:bg-blue-400 transition-colors duration-200"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      {...props}
      className=" p-3 my-5 w-full border border-gray-400 shadow-sm shadow-blue-400 rounded-lg cursor-pointer bg-blue-400/80 hover:bg-blue-400 transition-colors duration-200"
    >
      {children}
    </button>
  );
}
