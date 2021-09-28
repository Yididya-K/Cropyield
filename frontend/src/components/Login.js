import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import {
  Box,
  Heading,
  Link, InputGroup, InputRightElement,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,Icon,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Center, chakra, Flex, FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { login } from '../auth';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
  
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const { register,  handleSubmit, reset, formState: { errors } } = useForm();


  const history=useHistory()
  const loginuser = (data) => {
    console.log(data)
   
    const requestOptions={
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    }
    fetch('/auth/login',requestOptions)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      login(data.access_token)
      history.push('/home')
    })

    reset()
  }


  return (
    <Container maxW={'7xl'} p="12">

      <Box
        marginTop="100"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Image
              borderRadius="lg"
              src={
                'https://images.unsplash.com/photo-1527330772182-997f9850cab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
              }
              alt="farm image"
              objectFit="contain"
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(green 2px, transparent 1px)',
                'radial(green 2px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <Heading marginTop="6" textAlign="center">

            Sign in

          </Heading>
          <Box
            py={12} px={6} >
            <chakra.form
              method="POST"

              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" {...register("email", {
                    required: "Required",
                    maxLength: 80,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    }
                  })}
                  />
                  {errors.email?.type === "pattern" && <span style={{ color: 'red' }}>Invalid email address</span>}
                  {errors.email?.type === "required" && <span style={{ color: 'red' }}>Enter email address</span>}
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input  name="password"
                    id="password" type={show ? "text" : "password"} {...register("password", { required: true, minLength: 8 })} type="password" />
                    <InputRightElement >
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password?.type === "minLength" && <span style={{ color: 'red' }}>Password should be atleast 8 chars</span>}
                  {errors.password?.type === "required" && <span style={{ color: 'red' }}>Enter password</span>}
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'green.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    onClick={handleSubmit(loginuser)}
                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500',

                    }}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </chakra.form>
          </Box>
        </Box>
      </Box>

    </Container>
  );
};





// plant_month: data.plant_month,
// planted_percent: data.planted_percent,
// {seedling: data.seedling, quantity of seed
// {tilled_rate: data.tilled_rate, how many the field was tilled
// {total_labor: data.total_labor,
// {Toxicity: data.Toxicity,
// {Excesssalts: data.Excesssalts,

// {Nutrientavailability: data.Nutrientavailability,
// {Nutrientretentioncapacity: data.Nutrientretentioncapacity,
// Oxygenavailabilitytoroots: data.Oxygenavailabilitytoroots,