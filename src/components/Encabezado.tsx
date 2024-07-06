import HamburgerIcon from "./HamburgerIcon";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  Flex,
  Center,
  Box,
  Image,
  Spacer,
} from "@chakra-ui/react";

type Props = {
  data: { id: number; name: string; page: string }[];
  onClick: (element: { id: number; name: string; page: string }) => void;
};

function Encabezado(props: Props) {
  const data = props.data;

  const handleClick = (event: { id: number; name: string; page: string }) => {
    props.onClick(event);
  };

  return (
    <>
      <Flex bgGradient="linear(to-r,darkblue, blue.500)">
        <Center w="100px">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              alignItems={"right"}
            />
            <MenuList>
              {data.map((item) => (
                <MenuItem onClick={() => handleClick(item)} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Center>
        <Spacer />
        <Box p="2">
          <Text margin={"15px"} fontSize="40px" color="white" shadow={"revert"}>
            Sistema de agendamiento de clases para deportistas
          </Text>
        </Box>
        <Spacer />
        <Image
          boxSize="60px"
          m="20px 20px 20px 20px"
          src={"/public/gimnasia-ritmica.png"}
          alt="Gimnasta"
        />
      </Flex>
    </>
  );
}

export default Encabezado;
