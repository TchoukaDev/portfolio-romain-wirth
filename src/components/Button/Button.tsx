interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;

}

export default function Button({ href, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className=" p-3 my-5 mx-auto block min-w-[150px] w-fit  text-center border border-gray-400 shadow-sm shadow-blue-400 rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-600 transition-colors duration-200"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      {...props}
      className=" p-3 my-5 w-full border border-gray-400 shadow-sm shadow-blue-400 rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-600 transition-colors duration-200"
    >
      {children}
    </button>
  );
}
