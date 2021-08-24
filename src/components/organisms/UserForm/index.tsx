import { Box, Input, StyleProps } from "@chakra-ui/react";
import { MultipleInput } from "~/components/molecules/MultipleInput";

interface Props {
  styleProps?: StyleProps;
}

export const UserForm: React.FC<Props> = ({ styleProps }) => {
  return (
    <Box {...styleProps}>
      <Input placeholder={"ユーザー名"} />
      <Input placeholder={"年齢"} mt={2} />
      <Input placeholder={"組織"} mt={2} />
      <MultipleInput placeholder={"特記事項"} styleProps={{ mt: 2 }} />
    </Box>
  );
};
