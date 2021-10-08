import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import React from "react";
import { DrawerBody } from "@chakra-ui/modal";
import { Drawer } from "@chakra-ui/modal";
import { DrawerContent } from "@chakra-ui/modal";
import { DrawerCloseButton } from "@chakra-ui/modal";
import { DrawerHeader } from "@chakra-ui/modal";
import { DrawerOverlay } from "@chakra-ui/modal";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/layout";
import { WrapItem } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button bg="none" color="black" ref={btnRef} variant="ghost" size="lg" ml="8" onClick={onOpen}>
        <HamburgerIcon w={5} h={5}   />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent bg="#262424">
          <DrawerCloseButton color="whiteAlpha.700"/>
    
          <DrawerHeader borderBottomWidth="1px"  textAlign="center"  color="whiteAlpha.700">
          <Avatar size="sm" mr="2" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              Organisation</DrawerHeader>
          <DrawerBody>
            <Box w="100%" p={4} h="50%" >
            <Accordion allowToggle  border="none">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {/* Section 1 title */}
                      <Heading as="h5" size="sm" color="whiteAlpha.700">
                        Workspace
                      </Heading>
                    </Box>
                
                    <AccordionIcon color="whiteAlpha.700" />
                  </AccordionButton>
                </h2>
                <AccordionPanel >
                  <Text fontSize="lg" color="whiteAlpha.700">
                    <ArrowForwardIcon m={5} />
                    Project Name
                  </Text>
                  <Text fontSize="lg" color="whiteAlpha.700">
                    <ArrowForwardIcon m={5} />
                    Projects
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            </Box>
            <Divider />
            <Box w="100%" p={4}  >
            <Accordion allowToggle border="none">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                  
                      <Heading as="h5" size="sm" color="whiteAlpha.700">
                        Members
                      </Heading>
                    </Box>
                
                    <AccordionIcon color="whiteAlpha.700"/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Wrap>
  <WrapItem>
    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
  </WrapItem>
</Wrap>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            </Box>
       
          </DrawerBody>
        </DrawerContent>

        {/* members */}
      </Drawer>
    </>
  );
}

export default DrawerExample;
