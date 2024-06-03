import type { JSX } from "preact";
import { forwardRef } from "preact/compat";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "loading">
  & {
    loading?: boolean;
    ariaLabel?: string;
  };

const Button = forwardRef<HTMLButtonElement, Props>(({
  type = "button",
  class: _class = "",
  loading,
  disabled,
  ariaLabel,
  children,
  ...props
}, ref) => (
  <button
    {...props}
    className={`cursor-pointer rounded-[10px] bg-green-500 border-0 text-white transform
	transition duration-700
	hover:scale-105 py-5 px-28 w-fit ${_class}`}
    disabled={disabled || loading}
    aria-label={ariaLabel}
    type={type}
    ref={ref}
  >
    {loading ? <span class="loading loading-spinner" /> : children}
  </button>
));

export default Button;
