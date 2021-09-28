import React from "react";
import { chakra, Box, Flex, useColorModeValue, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
const Cards = props => {
  console.log(props.name)
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      _hover={{
        boxShadow: "dark-lg",
      }}
      rounded="lg"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Link to={{ pathname:'/predictionform',
          name:props.name
          
          }}>
       
        <Flex
          as='button'
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"

        >
          <Box
            w={1 / 3}
            bgSize="cover"
            bgImage={props.image}
          ></Box>

          <Box w={2 / 3} p={{ base: 4, md: 4 }} >

            <chakra.h1
              fontSize="2xl"
              fontWeight="bold"
              color={'green.400'}
            >
              {props.name}
            </chakra.h1>

            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {props.description}
            </chakra.p>




          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Cards;
