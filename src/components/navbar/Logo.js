import { Box } from "@mui/system";
import Logo from '../../assests/Logo.png'

const DisplayLogo = () => {
    return(
        <Box
            component="img"
            sx={{
                width: 60,
                height: 60
            }}
            src={ Logo }
        />
    )
}

export default DisplayLogo