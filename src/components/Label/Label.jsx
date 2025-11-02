export default function Label({ children, htmlFor, value }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`absolute left-2  transition-all bg-transparent cursor-text
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base italic peer-placeholder-shown:text-secondary
      peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600  ${
        value && "top-1 text-xs text-secondary"
      }`}
    >
      {children}
    </label>
  );
}
