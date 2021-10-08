import React from 'react'
import { Box, Center, Flex, Heading } from "@chakra-ui/layout";

import { CloseIcon } from '@chakra-ui/icons'
import { Button, IconButton } from '@chakra-ui/button';
import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';


export default function CreateProject() {
    return (
        <div>
            <Center>
                <Box mt='2vh' pb='3vh' mb='3vh' w='90vw' bg='#DADADA'>
                    <Flex justify='end'>
                        <Box m='1%'>
                            <IconButton _hover='white' bg='transparent' >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Flex>
                    <Center>
                        <Flex boxShadow='dark-lg' roundedRight='0' w='80vw' color='#DADADA' mb='10' >
                            <Box bg='#292C32' w='35%' h='60vh' />
                            <Box w='40%' w='65%' bg='#EAEAEC'>
                                <Box ml='10' mr='10'>
                                    <Center color='black' mt='10vh' mb='5vh'>
                                        <Heading as='h5' size='md'>Create Project</Heading>
                                    </Center>
                                    <form>
                                        <FormControl id='projectName'>
                                            <FormHelperText>Project Name</FormHelperText>
                                            <br />

                                            <Input _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }" bg='#EAEAEC'
                                                border='none' borderBottom='1px solid gray' color='black' type="text" />
                                        </FormControl>
                                        <br />
                                        <FormControl id='projectName'>
                                            <FormHelperText>Organization</FormHelperText>
                                            <br />

                                            {/* <Input bg='#EAEAEC' outlineColor='transparent' outline='none' type="text" /> */}
                                            <Select bg='#EAEAEC' color='black' borderBottom='1px solid gray' border='none' fontWeight='bold'
                                                _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }" placeholder="Select option">
                                                <option value="option1">Printing Books Organization</option>
                                                <option value="option2">Printing Books Organization</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                        </FormControl>

                                        <br />

                                        <FormControl id='projectName'>
                                            <FormHelperText>Organization</FormHelperText>
                                            <FormHelperText>Template (Blank)</FormHelperText>
                                            <br />

                                            <Select bg='#EAEAEC' color='black' borderBottom='1px solid gray' border='none' fontWeight='bold'
                                                _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }"
                                                placeholder="Select option">

                                                <option value="option1">Printing Books Organization</option>
                                                <option value="option2">Printing Books Organization</option>
                                                <option value="option3">Printing Books Organization</option>
                                            </Select>
                                        </FormControl>

                                        <Flex justify='end' mt='5' mb='5'>
                                            <Button size="sm" bg='#131923' mr='1' onClick={() => { }} outline="none"
                                                borderColor="none" _hover="none" _focus="none">
                                                Continue
                                            </Button>
                                            <Button ml='1' size="sm" bg='#DADADA' color='black' border='1px solid #131923' _hover="{bg:'none'}" _focus="{ boxShadow: 'none' }">
                                                Cancel
                                            </Button>
                                        </Flex>
                                    </form>

                                </Box>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Center>
        </div>
    )
}
