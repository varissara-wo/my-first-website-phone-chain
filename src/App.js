import React from "react";
import {
  ChakraProvider,
  Button,
  Spinner,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import "./App.css";
import DisplayJohn, { JohnProfile } from "./components/DisplayJohn";

function App() {
  return (
    <>
      <ChakraProvider>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="blue">Button</Button>
          <Button colorScheme="cyan">Cyan</Button>
          <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
            Settings
          </Button>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Spinner color="red.500" />

          <Spinner size="xl" />

          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Input placeholder="Basic usage" />
          <Input variant="filled" placeholder="Filled" />
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input type="tel" placeholder="phone number" />
          </InputGroup>
        </Stack>
      </ChakraProvider>
      <DisplayJohn />
      <JohnProfile />
    </>
  );
}

export default App;
