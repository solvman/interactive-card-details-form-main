import { forwardRef, InputHTMLAttributes, Ref } from "react";

type TextInputProsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
>;

const TextInput = forwardRef(function TextInput(
  { ...props }: TextInputProsType,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <div className="group relative rounded-lg">
      <input {...props} className="peer w-full" ref={ref} />
      <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-1 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"></div>
      <div className="absolute inset-0 -z-20 rounded-lg bg-gradient-1 opacity-25 transition duration-200 peer-focus:blur"></div>
    </div>
  );
});

export default TextInput;
