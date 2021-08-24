import { Box } from "@chakra-ui/react";
import { UserForm } from "~/components/organisms/UserForm";
import { UserList } from "~/components/organisms/UserList";
import { Header } from "~/components/organisms/Header";

export const Organisms: React.FC = () => {
  return (
    <Box p={2}>
      <Header />
      <UserList styleProps={{ mt: 4 }} />
      <UserForm styleProps={{ mt: 4 }} />
    </Box>
  );
};
