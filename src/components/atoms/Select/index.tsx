import { Select as ChakraSelect, StyleProps } from "@chakra-ui/react";

type Option = { value: string | number; label: string };

interface Props {
  options: Option[];
  styleProps?: StyleProps;
}

export const Select: React.FC<Props> = ({ options, styleProps }) => {
  return (
    <ChakraSelect placeholder="Select option" {...styleProps}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </ChakraSelect>
  );
};
