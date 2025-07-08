import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean; // Explicitly support controlled component
  onCheckedChange?: (checked: boolean) => void; // Custom change handler
  disabled?: boolean; // Explicit disabled prop
  checkColor?: string; // Custom checked color
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      checked,
      onCheckedChange,
      disabled = false,
      checkColor = "blue-600",
      ...props
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onCheckedChange) {
        onCheckedChange(event.target.checked);
      }
    };

    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className={`h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-${checkColor} ${
            checked ? `text-${checkColor}` : ""
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className || ""}`}
          aria-label={label || "Checkbox"}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id}
            className={`text-sm text-gray-700 ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:text-gray-900"}`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
