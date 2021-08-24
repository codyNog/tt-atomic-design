import { Box, Button, Input, Tag } from "@chakra-ui/react";
import { Select } from "~/components/atoms/Select";

const options = ["option1", "option2", "option3"].map((elem) => {
  return { value: elem, label: elem };
});

export const Atoms: React.FC = () => {
  return (
    <Box p={2}>
      <Button>Click!</Button>
      <Input mt={2} placeholder={"input"} />
      <Select options={options} styleProps={{ mt: 2 }} />
      <Tag mt={2}>Tag</Tag>
    </Box>
  );
};
