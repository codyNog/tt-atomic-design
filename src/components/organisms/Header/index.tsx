import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <Flex p={2} w={"100%"} bg={"blue.300"} color={"white"}>
      <Box>
        <Link href={"/atoms"}>atoms</Link>
      </Box>
      <Box ml={2}>
        <Link href={"/molecules"}>molecules</Link>
      </Box>
      <Box ml={2}>
        <Link href={"/organisms"}>organisms</Link>
      </Box>
    </Flex>
  );
};
