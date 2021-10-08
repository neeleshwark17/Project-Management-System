import {
  Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import {useState} from "react"
import { Button } from "@chakra-ui/button";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function DialogT({addComp}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        mr="40"
        bg="black"
        color="white"
        variant="ghost"
        size="sm"
        outline="none"
        borderColor="none"
        _hover="none"
        border="none"
        onClick={onOpen}
      >
        + Add Tag
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody>


       Task// 
          
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default DialogT;
