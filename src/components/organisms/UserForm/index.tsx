import { Box, Input, StyleProps } from "@chakra-ui/react";
import { MultipleInput } from "~/components/molecules/MultipleInput";
import { useUserForm } from "~/store/organisms/UserForm";

interface Props {
  styleProps?: StyleProps;
}

export const UserForm: React.FC<Props> = ({ styleProps }) => {
  const { user, setName, setAge, setOrganization, setFeatures } = useUserForm();

  return (
    <Box {...styleProps}>
      <Input
        placeholder={"ユーザー名"}
        value={user.name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Input
        placeholder={"年齢"}
        mt={2}
        type={"number"}
        value={user.age}
        onChange={(e) => setAge(Number(e.currentTarget.value))}
      />
      <Input
        placeholder={"組織"}
        mt={2}
        value={user.organization}
        onChange={(e) => setOrganization(e.currentTarget.value)}
      />
      <MultipleInput
        placeholder={"特記事項"}
        value={user.features}
        onEnterKeyDown={(value) => setFeatures(value)}
        styleProps={{ mt: 2 }}
      />
    </Box>
  );
};
