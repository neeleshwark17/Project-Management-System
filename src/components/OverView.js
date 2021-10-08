import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Img } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { Component } from "react";

export default class OverView extends Component {
  constructor(x) {
    super(x);
    this.state = {};
  }
  render() {
    return (
      <>
        <Box bg="#DADADA">
          <Flex flexDir="column" bg="white" w="60%" borderRadius="15">
            <Box m="4" border="1px solid #D4D4D4" borderRadius="6">
              <Flex>
                <Img
                  m="4"
                  bg=""
                  src="dev.JPG"
                  h="10rem"
                  w="8rem"
                  objectFit="cover"
                  borderRadius="8"
                />
                <Flex m="4" flexDir="column">
                  <Text fontSize="md" fontFamily="sans-serif">
                    Organization
                  </Text>
                  <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Printing Books Organization
                  </Text>
                  <Text fontSize="md" fontFamily="sans-serif">
                    Created at Oct,4,2021
                  </Text>
                  <Flex flexDir="column" justify="end" flexGrow="1">
                    <Select
                      my="2"
                      color="teal"
                      outline="none"
                      border="none"
                      w="fit-content"
                      placeholder="In Progress"
                      size="sm"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box m="6">
              <Text fontSize="2xl" fontWeight="bold" fontFamily="sans-serif">
                Project Summary
              </Text>
              <Flex my="4">
                <Avatar src="dev.JPG" objectFit="scale-down" />
                <Text mx="2" my="2" fontSize="xl" fontFamily="sans-serif">
                  Printing Books Project
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Button
            m="8"
            bg="black"
            _hover="none"
            color="white"
            size="lg"
            variant="ghost"
          >
            <AiOutlinePlus />
            <Text mx="2">Add Project</Text>
          </Button>
        </Box>
      </>
    );
  }
}
