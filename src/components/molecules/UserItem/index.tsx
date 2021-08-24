import { Box, StyleProps } from "@chakra-ui/react";
import { User } from "~/domain/entity/User";

interface Props {
  user: User;
  styleProps?: StyleProps;
}

export const UserItem: React.FC<Props> = ({ user, styleProps }) => {
  return (
    <Box
      borderRadius={4}
      border="1px"
      borderColor={"gray.300"}
      borderWidth={1}
      px={4}
      {...styleProps}
    >
      <Box>{user.name}</Box>
      <Box>{user.age}</Box>
      <Box>{user.organization}</Box>
    </Box>
  );
};
