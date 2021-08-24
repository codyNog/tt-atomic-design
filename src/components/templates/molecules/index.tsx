import { Box } from "@chakra-ui/react";
import { User } from "~/domain/entity/User";
import { MultipleInput } from "~/components/molecules/MultipleInput";
import { UserItem } from "~/components/molecules/UserItem";

const user: User = {
  uid: "foo",
  name: "Kohki Noguchi",
  age: 28,
  organization: "JX通信社",
  features: []
};

export const Molecules: React.FC = () => {
  return (
    <Box p={2}>
      <MultipleInput />
      <UserItem user={user} styleProps={{ mt: 4 }} />
    </Box>
  );
};
