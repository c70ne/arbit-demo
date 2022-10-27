import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { style } from '@mui/system'
import styles from '../styles/Header.module.css'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

import menu from '../data/menu.js'

export default function Header({ children }) {

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const list = menu.map(item => {
        return (
            <Link href={item.route} key={item.id} alt={item.alt}>
                <a>
                    <MenuItem 
                        onClick={handleClose}
                        disabled={item.disabled}
                        sx={{ pl: 3, pr: 4, py: 1.5 }}
                    >
                        <ListItemIcon sx={{ color: '#111e0f' }}>
                            {item.icon}
                        </ListItemIcon>
                        <Typography 
                            variant='body2' 
                            component='div'
                            sx={{ pl: 0.5, color: '#111e0f' }}
                        >
                            {item.name}
                        </Typography>
                    </MenuItem>
                </a>
            </Link>
        )
    })

    return (
        <header className={styles.header}>
            <div className={styles.header_left_column}>
                {children}
            </div>
            <div className={styles.logo}>ARBIT</div> 
            <div className={styles.header_right_column}>
                <div className={styles.large_menu}>
                    <IconButton size='medium' disabled>
                        <Badge badgeContent={0}>
                            <NotificationsIcon size='medium' />
                        </Badge>
                    </IconButton>
                    <IconButton size='medium' disabled>
                        <AccountCircle size='medium' />
                    </IconButton>
                </div>
                <div className={styles.small_menu}>
                    <IconButton    
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} 
                        size='medium'
                        sx={{ color: '#111e0f' }}   
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                    >
                        <MenuItem
                            sx={{ pl: 3, pr: 4, py: 1.5 }}
                            disabled={'true'}
                        >
                            <ListItemIcon sx={{ color: '#111e0f' }}>
                                <AccountCircle />
                            </ListItemIcon>
                            <Typography 
                                variant='body2' 
                                component='div'
                                sx={{ pl: 0.5, color: '#111e0f' }}
                            >
                                Account
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            sx={{ pl: 3, pr: 4, py: 1.5 }}
                            disabled={'true'}
                        >
                            <ListItemIcon sx={{ color: '#111e0f' }}>
                                <Badge badgeContent={0}>
                                    <NotificationsIcon />
                                </Badge>
                            </ListItemIcon>
                            <Typography 
                                variant='body2' 
                                component='div'
                                sx={{ pl: 0.5, color: '#111e0f' }}
                            >
                                Notifications
                            </Typography>
                        </MenuItem>
                        <Divider />
                        {list}
                        <Divider />
                        <MenuItem 
                            onClick={() => signOut({ 
                                callbackUrl: '/' 
                            })}
                            sx={{ pl: 3, pr: 4, py: 1.5 }}
                        >
                            <ListItemIcon sx={{ color: '#111e0f' }}>
                                <LogoutOutlinedIcon />
                            </ListItemIcon>
                            <Typography 
                                variant='body2' 
                                component='div'
                                sx={{ pl: 0.5, color: '#111e0f' }}
                            >
                                Logout
                            </Typography>
                        </MenuItem> 
                    </Menu>
                </div> 
            </div>
        </header>
    )
}