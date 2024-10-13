import { TextField } from "@radix-ui/themes";
import { ComponentProps, forwardRef } from "react";

type TextInputProps = ComponentProps<typeof TextField.Root>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <TextField.Root
        variant="surface"
        size="3"
        className="w-[280px]"
        {...props}
        ref={ref}
      >
        <TextField.Slot pl="4px" />
        <TextField.Slot pr="4px" />
      </TextField.Root>
    );
  }
);

TextInput.displayName = "TextInput";
