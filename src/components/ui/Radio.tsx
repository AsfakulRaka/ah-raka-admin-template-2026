import type { ChangeEvent } from "react";
interface RadioProps {
  disabled?: boolean;
  className?: string;
  label: string;
  name: string;
  value?: string;
  errors?: string;
  onChange: ChangeEvent;
}
const Radio = ({
  disabled = false,
  className,
  label,
  name,
  value,
  errors,
  onChange,
}: RadioProps) => {
  return (
    <div className={`m-1 ${className ?? ""} ${disabled && "opacity-30"}`}>
      <div className="flex flex-row items-center gap-2">
        <input
          disabled={disabled}
          id={`${name}_${value}`}
          type="radio"
          value={value}
          name={name}
          onChange={onChange}
          className={`accent-brand-primary h-4 w-4`}
        />
        <label
          htmlFor={`${name}_${value}`}
          className="font-semibold tracking-wide capitalize"
        >
          {label}
        </label>
      </div>
      {errors && (
        <p className="text-xs leading-4 font-semibold tracking-wide text-red-500 capitalize">
          {errors}
        </p>
      )}
    </div>
  );
};

export default Radio;
