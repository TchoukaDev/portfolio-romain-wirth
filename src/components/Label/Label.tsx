interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  value?: string;

}

export default function Label({ children, value, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={`absolute left-2  transition-all bg-transparent cursor-text
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base italic peer-placeholder-shown:text-secondary
      peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600  ${
        value && "top-1 text-xs text-secondary"
      }`}
    >
      {children}
    </label>
  );
}
