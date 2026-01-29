interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // nouveau prop pour gérer les variantes
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary", // valeur par défaut
  className,
  ...props
}: ButtonProps) {
  // Styles par défaut
  const baseStyles = "p-3 px-6 my-2 sm:my-5 mx-auto block min-w-[150px] w-fit text-center rounded-full cursor-pointer transition-colors duration-200 shadow-sm shadow-blue-400";

  // Styles selon le variant
  const variantStyles = {
    primary: "bg-blue-700 hover:bg-blue-500 text-white border border-gray-400",
    secondary: "bg-transparent hover:bg-blue-900/20 text-blue-400 border border-blue-500 ",
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={finalClassName}>
      {children}
    </button>
  );
}
