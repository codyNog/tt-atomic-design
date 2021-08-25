import { Box, StyleProps } from "@chakra-ui/react";
import { UserItem } from "~/components/molecules/UserItem";
import { useUserList } from "~/store/organisms/UserList";

interface Props {
  styleProps?: StyleProps;
}

export const UserList: React.FC<Props> = ({ styleProps }) => {
  const { users } = useUserList();

  return (
    <Box {...styleProps}>
      {users.map((user, i) => (
        <UserItem key={user.uid} user={user} styleProps={{ mt: i ? 2 : 0 }} />
      ))}
    </Box>
  );
};
