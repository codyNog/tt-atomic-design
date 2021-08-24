import { Box, Input, StyleProps, Tag } from "@chakra-ui/react";

interface Props {
  styleProps?: StyleProps;
}

export const MultipleInput: React.FC<Props> = ({ styleProps }) => {
  return (
    <Box {...styleProps}>
      <Input />
      <Tag mt={2}>foo</Tag>
    </Box>
  );
};
