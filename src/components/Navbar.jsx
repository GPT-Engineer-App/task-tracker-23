import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex maxW="container.lg" mx="auto" align="center">
      <Text fontSize="xl" fontWeight="bold" color="white">
        Todo App
      </Text>
      <Spacer />
      <Flex>
        <Link as={NavLink} to="/" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
          Home
        </Link>
        <Link as={NavLink} to="/about" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
          About
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;