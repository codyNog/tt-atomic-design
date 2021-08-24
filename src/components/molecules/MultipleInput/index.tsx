import { Box, Input, StyleProps, Tag } from "@chakra-ui/react";

interface Props {
  placeholder: string;
  styleProps?: StyleProps;
}

export const MultipleInput: React.FC<Props> = ({ placeholder, styleProps }) => {
  return (
    <Box {...styleProps}>
      <Input placeholder={placeholder} />
      <Tag mt={2}>foo</Tag>
    </Box>
  );
};
