import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { cn } from "@/utils/utils";

type TextInputProsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  error?: string;
};

const TextInput = forwardRef(function TextInput(
  { error, ...props }: TextInputProsType,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <div>
      <div className="group relative rounded-lg">
        <input {...props} className="peer w-full" ref={ref} />
        <div
          className={cn(
            "absolute inset-0 -z-10 rounded-lg bg-gradient-1 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100",
            {
              "bg-error": error,
            },
          )}
        ></div>
        <div
          className={cn(
            "absolute inset-0 -z-20 rounded-lg bg-gradient-1 opacity-25 transition duration-200 peer-focus:blur",
            {
              "bg-error": error,
            },
          )}
        ></div>
      </div>
      {error && (
        <em className="relative bg-primary text-xs not-italic text-error">
          {error}
        </em>
      )}
    </div>
  );
});

export default TextInput;
