import type { JSX } from "preact";

export type Props =
  & Omit<JSX.IntrinsicElements["input"], "">
  & {
    id: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    maxlength?: number;
    disabled?: boolean;
  };

function Input(
  {
    id,
    class: _class = "",
    name,
    placeholder,
    type = "text",
    required,
    maxlength,
    disabled,
  }: Props,
) {
  return (
    <input
      class={`w-full flex flex-grow ${_class} mb-2  input w-full placeholder-dark text-dark text-lg rounded-[10px] py-[18px] border border-green-200 !outline-green-500 focus:border-0`}
      type={type}
      id={id}
      name={name ?? id}
      placeholder={placeholder}
      required={required}
      maxlength={maxlength}
      disabled={disabled}
    />
  );
}

export default Input;
