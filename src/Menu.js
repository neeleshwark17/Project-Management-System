import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";

function MenuDrop(props) {
  return (
    <div>
      <Menu>
        <MenuButton as={Button } bg="white" color="black" >{props.icon}</MenuButton>
        <MenuList w="14" h="60">
          <MenuItem>Download</MenuItem>
          <MenuItem>Create </MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Add</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuDrop;
