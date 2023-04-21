import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './App.css'
export const DrawerCa = () => {
  const [open,setopen]=useState(false);
  return (
    
    <div>
        <Drawer open={open} onClose={()=>setopen(false)}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Products</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Drawer>
<IconButton className="my-icon-button" sx={{ backgroundColor: "White",marginLeft:"auto" }} onClick={() => setopen(!open)}>
  <MenuRoundedIcon />
</IconButton>


    </div>
  )
}
