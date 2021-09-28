import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress';
import  React  from 'react';
import { useContext,useEffect } from 'react';
import { resultContext } from '../App';
import { useHistory } from 'react-router-dom';
import { Heading,Flex,Box,useColorModeValue,chakra,Link}from '@chakra-ui/react'
export default function Result({result}) {
    const history = useHistory();
    const contextResult = useContext(resultContext);
    useEffect(()=>{
        if (contextResult.prediction===0){
             history.replace("/predictionform");
        }
        
    })
    return(
        <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        mt="100"
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          width="800px"
          height="300px"
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
            <Box
              h={{ base: 64, lg: "full" }}
              rounded={{ lg: "lg" }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1536153635972-1fc2e818f642?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80')",
              }}
            ></Box>
          </Box>
  
          <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
             Predicted {" "}
              <chakra.span color={useColorModeValue("brand.600", "brand.400")}>
                Yield
              </chakra.span>
            </chakra.h2>
            <chakra.p m={4} color={useColorModeValue("gray.600", "gray.400")}>
            <h1 color='green'> Expeted yield:{`:${parseFloat(contextResult.prediction)} KG per Hectar`}</h1>
        <CircularProgress value={contextResult.prediction} max={4000000} m in={0} color="green.400">
            <CircularProgressLabel>{contextResult.prediction}</CircularProgressLabel>
        </CircularProgress>
            </chakra.p>
  
           
          </Box>
        </Box>
      </Flex>
       
      
    )
}