import { useState } from 'react'
import { nanoid } from 'nanoid'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined'

const options = [
    {
        title: 'Edit',
        name: 'editing', 
        value: 'true',
        icon: (<EditOutlinedIcon fontSize="small" />)
    },
    /* pin and zoom menu options to become available shortly.
    {
        title: 'Pin',
        name: 'isFavourite', 
        value: 'true',
        icon: (<PushPinOutlinedIcon fontSize="small" />)
    },
    {
        title: 'Zoom', 
        name: '', 
        value: '',
        icon: (<ZoomOutMapOutlinedIcon fontSize="small" />)
    },
    */
    {
        title: 'Delete',
        name: 'delete', 
        value: '',
        icon: (<DeleteOutlinedIcon fontSize="small" />)
    }
]
  
export default function LongMenu({
    id, 
    cardData, 
    setCardData,
    menuHandler,
    deleteCard
}) {

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handler(event) {
        if (event.target.dataset.name == 'delete') {
            deleteCard(event)
        } else {
            menuHandler(event)
        }
        handleClose()
    }

    function handleClose() {
        setAnchorEl(null)
    }

    function deleteCard(event) {
        if (cardData.length > 0) {   
            setCardData(cardData.filter(item => item.id !== event.target.id))
        }
    }

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{ 'aria-labelledby': 'long-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <MenuItem 
                        key={nanoid()} 
                        id={id}
                        data-name={option.name}
                        data-value={option.value}
                        onClick={handler}
                    >
                        <ListItemIcon>
                            {option.icon}
                        </ListItemIcon>
                        {option.title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}