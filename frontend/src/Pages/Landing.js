import {Link} from 'react-router-dom'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,Image,
    IconProps,Box
  } from '@chakra-ui/react';
  // import React, {useState, useEffect} from 'react';
  export default function Landing() {
    // const [currentTime,setCurrentTime]=useState(0);
    // useEffect(()=>{
    //   fetch('/time').then(res =>res.json()).then(data=>{
    //     setCurrentTime(data.time);
    //   })
    // })
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
             prediction{' '}
            <Text as={'span'} color={'green.400'}>
             made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          this web  application will provide a prediction analysis for crop yield production based on different parameters to assist policymakers and experts whose focus area is on the agricultural sector. 
          </Text>
          <Stack spacing={6} direction={'row'}>
          <Link to= '/signin'>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Get started
            </Button>
            </Link>
            <Link to='/about'>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
            </Link>
          </Stack>
          <Flex w={'full'}>
          <Image w={'full'} h="450"src="https://i.postimg.cc/3NV4bmnn/farming-life-flat-vector-illustration-82574-2039.png"  />
    
          </Flex>
        </Stack>
       
      </Container>
    );
  }
  

  