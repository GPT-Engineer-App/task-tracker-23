import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="2xl">About</Heading>
      <Text fontSize="lg">
        Welcome to the Todo App! This application is designed to help you manage your tasks efficiently and effectively.
      </Text>
      <Text fontSize="md">
        Our goal is to provide a simple and intuitive interface for users to keep track of their daily tasks. Whether you are a student, a professional, or just someone who likes to stay organized, this app is for you.
      </Text>
      <Text fontSize="md">
        Developed by a passionate team of developers, we are committed to continuously improving the app and adding new features based on user feedback.
      </Text>
    </VStack>
  </Box>
);

export default About;