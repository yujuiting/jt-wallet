import { forwardRef } from "react";
import {
  Input,
  InputBaseComponentProps,
  InputLabel,
  FormControl,
  FormControlProps,
  FormHelperText,
} from "@material-ui/core";
import NumberFormat from "react-number-format";

export interface NumberFieldProps extends FormControlProps {
  label?: string;
  name?: string;
  inputRef?: React.Ref<any>;
  value?: string | number;
  defaultValue?: string | number;
  helperText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export default forwardRef<HTMLDivElement, NumberFieldProps>(
  (
    {
      label,
      value,
      defaultValue,
      onChange,
      onBlur,
      name,
      helperText,
      inputRef,
      ...rest
    },
    ref
  ) => {
    return (
      <FormControl ref={ref} {...rest}>
        <InputLabel>{label}</InputLabel>
        <Input
          inputRef={inputRef}
          inputComponent={Impl}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

function Impl({
  defaultValue,
  // @todo bridge ref
  inputRef: _,
  ...rest
}: InputBaseComponentProps) {
  return (
    <NumberFormat
      {...rest}
      defaultValue={defaultValue as string | number | undefined}
      thousandSeparator=","
    />
  );
}
