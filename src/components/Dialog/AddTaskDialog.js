import {
    Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalHeader, ModalCloseButton
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { IconButton, Button } from "@chakra-ui/button";
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from "react-icons/ai";
import { Text } from "@chakra-ui/layout";
import { Input } from '@chakra-ui/input'
import { useRef, useState } from "react";

uuidv4();

function AddTaskDialog({ addComp }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [descriptionEmpty, setDescriptionEmpty] = useState(false)
    const [titleEmpty, setTitleEmpty] = useState(false)

    const title = useRef(null);
    const description = useRef(null);

    function onAdd(e) {
        e.preventDefault()
        if (!title.current.value) {
            setTitleEmpty(true)
            console.log('title');
        }
        else if (!description.current.value) {
            setDescriptionEmpty(true)
            console.log('description')
        }
        else if (!title.current.value || !description.current.value) {
            setTitleEmpty(true)
            setDescriptionEmpty(true)
            console.log('both')
        }
        else console.log('%cSUBMIT DATA', 'background:gree;color:white')

    }
    return (
        <>
            <IconButton
                bg="none"
                color="gray"
                variant="ghost"
                size="sm"
                outline="none"
                borderColor="none"
                border="none"
                borderRadius='50%'
                onClick={onOpen}
                _focus={{ outline: 0 }}
            >
                <AiFillPlusCircle />
            </IconButton>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalCloseButton /> */}
                    <ModalHeader>
                        Add task to catalog
                    </ModalHeader>
                    <form onSubmit={onAdd}>
                        <ModalBody>
                            <Text fontWeight='bold' fontSize='md'>Title</Text>
                            <Input my='4' placeholder='Title' ref={title} required />

                            <Text fontWeight='bold' fontSize='md'>Description</Text>
                            <Input my='4' placeholder='description' ref={description} required />
                            {/*Color */}
                            {/*Item */}

                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Cancel
                            </Button>

                            <button type='submit'
                            >
                                <Button colorScheme="blue" mr={3}>
                                    Add
                                </Button>

                            </button>

                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}
export default AddTaskDialog;
