import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ForumIcon from '@mui/icons-material/Forum'

const menu = [
    {
        id: 1,
        name: 'Home',
        alt: 'Home Page',
        icon: (<HomeOutlinedIcon />),
        disabled: false,
        route: '/home', 
    },
    {
        id: 2,
        name: 'Analytics',
        alt: 'Analytics Page',
        icon: (<BarChartOutlinedIcon />),
        disabled: false,
        route: '/analytics', 
    },
    {
        id: 3,
        name: 'Utilities',
        alt: 'Utilities Page',
        icon: (<DatasetOutlinedIcon />),
        disabled: true,
        route: '',
    },
    {
        id: 4,
        name: 'Articles',
        alt: 'Articles Page',
        icon: (<ArticleOutlinedIcon />),
        disabled: true,
        route: '',
    },
    {
        id: 5,
        name: 'Community',
        alt: 'Community Page',
        icon: (<ForumIcon />),
        disabled: true,
        route: '',
    },
    {
        id: 6,
        name: 'Settings',
        alt: 'Settings Page',
        icon: (<SettingsOutlinedIcon />),
        disabled: true,
        route: '',
    }
]

export default menu