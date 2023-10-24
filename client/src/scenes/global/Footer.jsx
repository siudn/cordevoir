import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontweight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            cordevoir
          </Typography>
          <div>
            Scelerisque sed erat venenatis tempus diam placerat senectus ante
            lectus posuere tincidunt. Si tempus justo fusce gravida est
            scelerisque sem. In diam congue at leo rhoncus. Inceptos vestibulum
            sapien leo elit aliquam dolor.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            10 Cordevoir Way, New York, New York 10001
          </Typography>
          <Typography mb="30px">Email: cordevoir@gmail.com</Typography>
          <Typography mb="30px">(973) 379-9739</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
