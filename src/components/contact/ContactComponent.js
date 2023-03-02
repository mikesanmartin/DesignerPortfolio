import Footer from "../footer/Footer"
import { Button } from "@mui/material";
import { InstagramURL, YouTubeURL, WhatsappURL, EmailURL } from "../../features/URLS";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const ContactComponent = () => {

    return(
        <div>
            <h1>Contacto Ulises Navas</h1>
            <ul>
                <li>
                    <a href={InstagramURL}>
                        <Button variant="contained">
                            <InstagramIcon/>
                            <p>Instagram</p>
                        </Button>
                    </a>
                </li>
                <li>
                    <a href={YouTubeURL}>
                        <Button variant="contained">
                            <YouTubeIcon/>  
                            <p>YouTube</p>      
                        </Button>
                    </a>
                </li>
                <li>
                    <a href={WhatsappURL}>
                        <Button variant="contained">
                            <WhatsAppIcon/>
                            <p>Whatsapp</p>
                        </Button>
                    </a>
                </li>
                <li>
                    <a href={EmailURL}>
                        <Button variant="contained">
                            <EmailIcon/>
                            <p>Email</p>
                        </Button>
                    </a>
                </li>
            </ul>
            
            <Footer/>
        </div>
    )
}

export default ContactComponent