import { Container, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Container component="footer" sx={{ py: 3 }} maxWidth="md">
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright © <Link href="#">upGrad</Link> 2021.
      </Typography>
    </Container>
  );
};

export default Footer;