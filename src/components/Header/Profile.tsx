import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo Csik Peres</Text>
        <Text color="gray.300" fontSize="small">
          leonardocsikperes@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Leonardo Csik Peres"
        src="https://github.com/leocperes.png"
      />
    </Flex>
  );
}
