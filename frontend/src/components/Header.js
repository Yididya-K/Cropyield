import React from "react";
import { Link } from 'react-router-dom'
import {
  chakra,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { MdBuild, MdCall } from "react-icons/md"
import { IoIosArrowDown, IoMdAdd, IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth,logout } from '../auth'
import protectedRoute from '../protectedRoute';
export default function Header(props) {
  
  const [logged] = useAuth()
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.700");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();


  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"

        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button
        w="full"
        variant="ghost"

        leftIcon={<BsFillCameraVideoFill />}
      >
        Videos
      </Button>
    </VStack>
    
  );
  const LoggedInLinks = (
    <>
    <Link to='/'>
      <Button leftIcon={<IoMdLogOut />} onClick={logout} colorScheme="green" size='sm' variant="solid">
        logout
      </Button>
    </Link>
    </>
  );
  const LoggedOutLinks =(
    <>
    <Link to= '/signin'>
    <Button leftIcon={<IoMdLogIn />} colorScheme="green" size='sm' variant="solid">
        Sign in
      </Button>
      </Link>
      <Link to= '/register'>
      <Button leftIcon={<IoMdAdd />} colorScheme="green" size='sm' variant="solid">
        Sign up
      </Button>
      </Link>
       </>
  );
  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link to='/home'>
                <HStack>
                  <h1>Home</h1>
                </HStack>
              </Link>
            </Flex>
            <Flex>
              <HStack display={{ base: "none", md: "flex" }}>

                <Link to='/about'>
                  <Button
                    bg={bg}
                    color="brand.600"
                    display="inline-flex"
                    // alignItems="left"
                    fontSize="md"
                    _hover={{ color: '' }}
                    _focus={{ boxShadow: "none" }}
                  >
                    About Us
                  </Button>
                </Link>

              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
               {logged?LoggedInLinks:LoggedOutLinks}
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
