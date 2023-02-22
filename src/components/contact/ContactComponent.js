import Footer from "../footer/Footer"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { InstagramURL } from "../../features/URLS";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const ContactComponent = () => {

    console.log(process.env.REACT_APP_INSTAGRAM_URL)
    return(
        <div>
            <h1>Contacto Ulises Navas</h1>
            <ul>
                <li>
                    <Link to={InstagramURL}>
                        <Button variant="contained">
                            <InstagramIcon/>
                            <p>Instagram</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button variant="contained">
                        <YouTubeIcon/>  
                        <p>YouTube</p>      
                    </Button>
                </li>
                <li>
                    <Button variant="contained">
                        <WhatsAppIcon/>
                        <p>Whatsapp</p>
                    </Button>
                </li>
                <li>
                    <Button variant="contained">
                        <EmailIcon/>
                        <p>Email</p>
                    </Button>
                </li>
            </ul>
            
            <Footer/>
        </div>
    )
}

export default ContactComponent