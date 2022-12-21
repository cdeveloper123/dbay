import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

function PaymentSuccess() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <Box sx={{
            justifyContent: 'center',
            alignContent: 'space-between',
            width: '100%',
            backgroundColor: '#D9D9D9'
        }}>
            <Typography>Payment Successful</Typography>
            <CheckCircleIcon color="success"/>
            <Button variant="outlined" onClick={handleClick}>Home</Button>
        </Box>
    )
}
export default PaymentSuccess;