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
    className={`cursor-pointer font-sans font-bold text-base bg-slate text-dark
			px-6 py-[14px] flex justify-center items-center w-fit rounded-lg transform
			transition duration-400
			opacity-90 hover:opacity-100 ${_class}`}
    disabled={disabled || loading}
    aria-label={ariaLabel}
    type={type}
    ref={ref}
  >
    {loading ? <span class="loading loading-spinner" /> : children}
  </button>
));

export default Button;
