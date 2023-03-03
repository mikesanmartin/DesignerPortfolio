import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation sx={{ width: 500 }}>
                    <h5>Ulises Navas</h5><hr/>
                    <h5>Contactame</h5>
                    <Link to="/contact">
                        <BottomNavigationAction label="Contacto" value="contact" icon={<ConnectWithoutContactIcon color='info' fontSize='large'/>}/>
                    </Link>
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default Footer