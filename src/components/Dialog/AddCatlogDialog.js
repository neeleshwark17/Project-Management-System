import { Button } from '@chakra-ui/react'
import { Component, useState } from 'react'


import { Box, Flex, Text } from '@chakra-ui/layout'
import { GrLinkNext } from 'react-icons/gr'
import { AiFillEye, AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { IconButton } from '@chakra-ui/button'
import { Avatar } from '@chakra-ui/avatar'
import { BiPencil } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { IoMdContact } from 'react-icons/io';
import { AiOutlineCalendar } from 'react-icons/ai'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { MdAttachment } from 'react-icons/md'



export default class AddCatlogDialog extends Component {
    constructor(props) {
        super(props)
        this.state = { showDialog: false }
    }

    onOpen = () => {
        if (this.state.showDialog) {
            this.setState({
                showDialog: false
            });
            console.log('IF---->', this.state.showDialog)

        }
        else {
            this.setState({
                showDialog: true
            })
            console.log('---->', this.state.showDialog)
        }

    }

    back = () => {
        this.setState({
            showDialog: false
        })
    }

    render() {


        const messages = [
            {
                msg: 'Hello i am Tom!',
                type: 'sender'
            },
            {
                msg: 'Hi Tom, Renald here',
                type: 'receiver'
            },
            {
                msg: 'what are you doing',
                type: 'receiver'
            }, {
                msg: 'Nothing',
                type: 'sender'
            },
            {
                msg: 'Wbu?',
                type: 'sender'
            },
            {
                msg: 'Nothing special',
                type: 'receiver'
            },
            {
                msg: 'I have got a idea to nuke the moon',
                type: 'receiver'
            }
        ]
        return (
            <div>
                {
                    this.state.showDialog ?
                        <Flex borderRadius='10' boxShadow='dark-lg' rounded='md' p='2' mt='9' flexDir='column' h='42rem' bg='white'>
                            <Box w='min-content' h='44rem'>
                                <Flex w='26rem'>
                                    <IconButton bg='none' _hover='none' onClick={this.back}>
                                        <GrLinkNext />
                                    </IconButton>

                                    <Flex flexGrow='1' m='auto' justify='end'>
                                        <IconButton bg='none' _hover='none'>
                                            <AiFillEye />
                                        </IconButton>
                                        <IconButton bg='none' _hover='none'>
                                            <AiOutlineHeart />
                                        </IconButton>
                                        <IconButton bg='none' _hover='none'>
                                            <BsThreeDots />
                                        </IconButton>
                                    </Flex>
                                </Flex>
                                <Flex m='4'>
                                    <Avatar />
                                    <Flex ml='2' flexDir='column'>
                                        <p>Printing Books Project</p>
                                        <p>Add Subtitle</p>
                                    </Flex>
                                    <Flex flexGrow='1' m='auto' justify='end' >
                                        <IconButton bg='none' _hover='none'>
                                            <BiPencil />
                                        </IconButton>
                                    </Flex>
                                </Flex>
                                <Flex m='4' mt='6'>
                                    <IconButton bg='none' _hover='none'>
                                        <IoMdContact />
                                    </IconButton>
                                    <IconButton bg='none' _hover='none'>
                                        <AiOutlineCalendar />
                                    </IconButton>
                                    <IconButton bg='none' _hover='none'>
                                        <AiFillEye />
                                    </IconButton>
                                    <IconButton bg='none' _hover='none'>
                                        <AiFillEye />
                                    </IconButton>
                                </Flex>
                                <Text ml='8' mt='4' color='blue.600' fontSize='md' fontStyle='italic'>Add description</Text>
                                <InputGroup m='4'>
                                    <InputLeftElement
                                        children={
                                            <Flex ml='6'>
                                                <IconButton bg='none' _hover='none'>
                                                    <MdAttachment />
                                                </IconButton>
                                                <IconButton bg='none' _hover='none'>
                                                    <AiOutlineMail />
                                                </IconButton>
                                            </Flex>
                                        } />
                                    <Input placeholder="" mr='8' />
                                </InputGroup>
                                <Text ml='8' mt='4' fontSize='sm' fontStyle='italic'>Created by Neeleshwar,Today</Text>
                                <Box bg='gray.200' w='fill-cotent' h='.5px' mx='6' my='2' ></Box>
                                <Box overflowY='scroll' borderRadius='10' mx='2' w='fill-content' h='18rem'>
                                    {messages.map((elem, index) => (

                                        <Flex
                                            flexDir='column'
                                            px='1'
                                            mx='2'
                                            alignItems={elem.type === 'sender' ? 'flex-end' : 'start'}
                                        >
                                            <Text
                                                p='2'
                                                borderRadius='10'
                                                mt='4'
                                                overflowY='auto'
                                                w='fit-content'
                                                textAlign={elem.type === 'sender' ? 'end' : 'start'}
                                                fontSize='sm'
                                                color={elem.type === 'sender' ? 'white' : 'black'}
                                                bg={elem.type === 'sender' ? 'blue.500' : 'gray.200'}
                                                readOnly
                                                fontStyle='italic'
                                                key={index} >
                                                {elem.msg}
                                            </Text>
                                        </Flex>
                                    ))}

                                </Box>
                            </Box>


                            <Flex flexGrow='1' justify='end'>
                                <IconButton bg='none' _hover='none' >
                                    <Avatar w='8' mb='2' h='8' />
                                </IconButton>
                                <Input h='8' mx='2' placeholder='Type something' />
                            </Flex>
                        </Flex>
                        : <Button
                            mt='10'
                            mr="40"
                            bg="black"
                            color="white"
                            variant="ghost"
                            size="sm"
                            outline="none"
                            borderColor="none"
                            _hover="none"
                            border="none"
                            onClick={this.onOpen}
                        >
                            + Add Tag
                        </Button>
                }
            </div>
        )
    }
}

