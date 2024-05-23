import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Heading, Box, Flex } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="2xl" mb={4}>Todo App</Heading>
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="brand">Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={3} mt={4}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md" justifyContent="space-between">
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => deleteTask(index)} 
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" w="100%" p={4} bg="brand.100" textAlign="center">
    <Text>© 2023 Todo App</Text>
  </Box>
);

export default Index;