import React from 'react'
import {Flex,Box,Heading,useColorModeValue} from '@chakra-ui/react'
const Review = () => {
    return (
        <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg={useColorModeValue("white", "gray.800")}
          maxW="2xl"
        >
          <Heading>Review</Heading>
          

        </Box>
      </Flex>
    )
}

export default Review
