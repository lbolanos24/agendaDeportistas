import { Box, Image } from "@chakra-ui/react";

type Props = {};

function HamburgerIcon(props: Props) {
  return (
    <>
      <Box>
        <Image boxSize="2rem" src={"/public/menu.png"} alt="Menu" />
      </Box>
    </>
  );
}

export default HamburgerIcon;
