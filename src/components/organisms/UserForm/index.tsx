import { Box, Input, StyleProps } from "@chakra-ui/react";
import { MultipleInput } from "~/components/molecules/MultipleInput";

interface Props {
  styleProps?: StyleProps;
}

export const UserForm: React.FC<Props> = ({ styleProps }) => {
  return (
    <Box {...styleProps}>
      <Input placeholder={"ユーザー名"}></Input>
      <Input placeholder={"年齢"}></Input>
      <Input placeholder={"組織"}></Input>
      <MultipleInput />
    </Box>
  );
};
