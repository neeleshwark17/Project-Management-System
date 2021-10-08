import React, { createElement, useState } from "react";
import { motion } from "framer-motion";
import { useMeasurePosition } from "./useMeasurePosition";
import { usePositionReorder } from "./usePositionReorder";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { MdPermContactCalendar } from "react-icons/md";
import { BsFillCalendarFill } from "react-icons/bs";
import "../../App.css";

// other imports

import { AiOutlineStar } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import AddCatlogDialog from "../Dialog/AddCatlogDialog";
import AddTaskDialog from "../Dialog/AddTaskDialog";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import "../../App.css";

export default function ListCards({ dataProp }) {
  const [order, updatePosition, updateOrder] = usePositionReorder(
    dataProp.items
  );

  // function back() {
  //     setShowDiaglog(false)
  // }

  const messages = [
    {
      msg: "Hello i am Tom!",
      type: "sender",
    },
    {
      msg: "Hi Tom, Renald here",
      type: "receiver",
    },
    {
      msg: "what are you doing",
      type: "receiver",
    },
    {
      msg: "Nothing",
      type: "sender",
    },
    {
      msg: "Wbu?",
      type: "sender",
    },
    {
      msg: "Nothing special",
      type: "receiver",
    },
    {
      msg: "I have got a idea to nuke the moon",
      type: "receiver",
    },
  ];

  function addTask() {}

  return (
    <Box
      borderTop={`4px solid ${dataProp.color}`}
      bg="#EAEAEC"
      // bg='tomato'
      borderRadius="10"
      p="4"
      m="5"
      w="min-content"
      h="42.5rem"
      id="listCatalog"
    >
      <p>{dataProp.title}</p>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {order.map((height, i) => (
          <Item
            dataProp={dataProp}
            key={height}
            height={height}
            i={i}
            updatePosition={updatePosition}
            updateOrder={updateOrder}
          />
        ))}
      </ul>
      {dataProp.items.length < 6 ? (
        <Flex justify="center" m="2" >
          <AddTaskDialog />
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
}

function Item({ i, height, updatePosition, updateOrder, dataProp }) {
  const [isDragging, setDragging] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  const [created, setCreated] = useState(false);
  function showCatalogDialog() {
    return <AddCatlogDialog showProp={true} />;
  }

  function openMenu() {}

  function createContextMenu() {}

  return (
    <li
      onClick={showCatalogDialog}
      style={{
        margin: "5px",
        width: "250px",
        padding: 0,
        height,
        // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
        zIndex: isDragging ? 3 : 1,
      }}
    >
      <motion.div
        ref={ref}
        layout
        initial={false}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          height,
          marginTop: "10px",
          borderRadius: 5,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
        }}
        drag="y"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate);
        }}
      >
        <Flex pos="relative">
          <p style={{ margin: "4px" }}>{dataProp.content}</p>
          <Flex flexGrow="1" justify="end" mx="3">
            <IconButton
              bg="none"
              mt="2"
              h="8"
              onClick={openMenu}
              id="contextMenu"
              _focus={{ outline: 0 }}
            >
              <BiDotsHorizontalRounded />
            </IconButton>
          </Flex>
        </Flex>
        <div style={{ flexGrow: "1" }}></div>
        <div
          style={{
            width: "100%",
            marginTop: "2px",
            marginBottom: "4px",
            height: ".2px",
            background: "lightGray",
          }}
        ></div>
        <Flex mb="2" w="100%">
          <IconButton
            _hover="none"
            color="#999999"
            bg="none"
            p="1"
            w="min-content"
            h="min-content"
            _focus={{ outline: 0 }}
          >
            <AiOutlineStar />
          </IconButton>
          <IconButton
            _hover="none"
            bg="#D3E5FF"
            color="#4283E2"
            w="min-content"
            p="1"
            h="min-content"
            _focus={{ outline: 0 }}
          >
            <MdPermContactCalendar />
          </IconButton>
          <IconButton
            _hover="none"
            bg="none"
            color="#999999"
            p="1"
            w="min-content"
            h="min-content"
            _focus={{ outline: 0 }}
          >
            <BsFillCalendarFill />
          </IconButton>
          <IconButton
            _hover="none"
            bg="none"
            color="#999999"
            p="1"
            w="min-content"
            h="min-content"
            boxShadow="none"
            _focus={{ outline: 0 }}
          >
            <VscBookmark />
          </IconButton>
          <Flex flexGrow="1" justify="end" mr="2">
            <AvatarGroup size="xs" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </Flex>
        </Flex>
      </motion.div>
    </li>
  );
}
// {/* <Select
//                 icon={
//                   <BiDotsHorizontalRounded
//                     border="none"
//                     _hover="none"
//                     outline="none"
//                   />
//                 }
//                 my="2"
//                 border="none"
//                 _hover="none"
//                 outline="none"
//                 size="sm"
//                 w="4rem"
//                 id="contextSelect"
//               >
//                 <option disabled selected ></option>
//                 <option
//                   style={{
//                     background: "white",
//                     boxShadow: "2px 1px 4px 2px #888888",
//                   }}
//                   value="option1"
//                 >
//                   Option 1
//                 </option>
//                 <option value="option2">Option 2</option>
//                 <option value="option3">Option 3</option>
//               </Select> */}
