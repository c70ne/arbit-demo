import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/joy/Button'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

import styles from '../styles/Nav.module.css'
import menu from '../data/menu.js'

export default function Nav() {

    const list = menu.map(item => {
        return (
            <Link href={item.route} key={item.id} alt={item.alt}>
                <a>
                    <Button 
                        disabled={item.disabled}
                        startIcon={item.icon}
                        sx={{ mt: 4 }}
                    >
                        <Typography 
                            variant='body2' 
                            component='div'
                            sx={{ pl: 0.5 }}
                        >
                            {item.name}
                        </Typography>
                    </Button>
                </a>
            </Link>
        )
    })

    return (
        <div className={styles.nav}>
            <div className={styles.logo} alt='Brand Logo'>
                R
            </div>
            {list}
            <Button 
                size='md' 
                startIcon={<LogoutOutlinedIcon />}
                onClick={() => signOut({ 
                    callbackUrl: '/' 
                })}
                sx={{ mt: 'auto', mr: 'auto' }}
            >
                Logout
            </Button>
        </div>
    )
}