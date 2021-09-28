import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import {
  Box,
  Heading,
  Image,
  Divider, InputGroup,
  InputRightElement,
  useColorModeValue,
  Container,
  SimpleGrid,
  GridItem,
  Select, chakra, Flex, FormControl,
  FormLabel,
  Input,
  Icon, useToast,
  Stack,
  Button,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export default function RegistrationForm() {


  const [show, setShow] = React.useState(false)
  // const [showSuccess, setShowSuccess] = useState(false)
  const toast = useToast()
  const handleClickPass = () => setShow(!show)
  const [showConfirm, setShowconfirm] = React.useState(false)
  const handleClickConfirm = () => setShowconfirm(!showConfirm)
  const { register,handleSubmit, reset, formState: { errors } } = useForm();
  const [serverResponse, setServerResponse] = useState('')
  const submitForm = (data) => {
    console.log(data)
    if (data.password === data.confirmpassword) {
      const body = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      }
      // percent_planted:float
      // is_urea:int
      // is_fungi:int
      // is_dap:int
      // is_chemic_fert:int
      // is_compost:int
      // is_manure:int
      // Oxygenavailabilitytoroots:int
      // Nutrientavailability:int
      // Totalrainfallmminwettestq:float
      // MeanTemperatureofWettestQuar:int
      // AnnualMeanTemperaturedegC:float
      // Avgstartofwettestquarterin:float
      // monthtotalrainfallmmin:float
      // PlotElevationm:float
      // PlotSlopepercent:float
      // geo_long:float
      // geo_lat:float
      // edu_level:int
      // how_much_planted:float
      const requestOptions = {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      fetch('/auth/signup', requestOptions)
        .then(res => res.json())
        .then(data => {
          setServerResponse(data.message)
          console.log(serverResponse)
          // setShowSuccess(true)
        })
      reset()
    }
    else {
      alert("password do not match")
    }
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
            Sign up
          </Heading>
 {/*  */}
          {/* {showSuccess ?toast({
            title: "Account created.",
            description: <p>{serverResponse}</p>,
            status: "success",
            duration: 9000,
            isClosable: true,
          }): <Heading marginTop="6" textAlign="center">
            Sign up
          </Heading>} */}
          
          <chakra.form
            method="POST"
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              spacing={6}
            >
              <SimpleGrid columns={6} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    First name
                  </FormLabel>
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="given-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    {...register("firstname", { required: true, maxLength: 25 })}
                    rounded="md"
                  />
                  {errors.firstname?.type === "required" && <span style={{ color: 'red' }}> <small>first name required</small></span>}
                  {errors.firstname?.type === "maxLength" && <span style={{ color: 'red' }}><small> Only  25 characters</small> </span>}
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="last_name"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Last name
                  </FormLabel>
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="family-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("lastname", { required: true, maxLength: 25 })}
                  />
                  {errors.lastname?.type === "maxLength" && <span style={{ color: 'red' }}><small>Only 25 characters</small></span>}
                  {errors.lastname?.type === "required" && <span style={{ color: 'red' }}><small>last name required</small></span>}
                </FormControl>

                <FormControl as={GridItem} colSpan={6}>
                  <FormLabel
                    htmlFor="email"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    id="email_address"
                    autoComplete="email"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("email", {
                      required: "Required",
                      maxLength: 80,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      }
                    })}
                  />
                  {errors.email?.type === "pattern" && <span style={{ color: 'red' }}><small>Invalid email address</small></span>}
                  {errors.email?.type === "required" && <span style={{ color: 'red' }}><small>Enter email address</small></span>}
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="password"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      type={show ? "text" : "password"}
                      name="password"
                      id="password"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("password", { required: true, minLength: 8 })}
                    />

                    <InputRightElement >
                      <Button h="1.75rem" size="sm" onClick={handleClickPass}>
                        {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password?.type === "minLength" && <span style={{ color: 'red' }}><small>Password should be atleast 8 chars</small></span>}
                  {errors.password?.type === "required" && <span style={{ color: 'red' }}><small>Enter password</small></span>}
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Repeat Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      type={showConfirm ? "text" : "password"}
                      name="confirmpassword"
                      id="confirmpassword"
                      autoComplete="state"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("confirmpassword", { required: true, minLength: 8 })}
                    />
                    <InputRightElement >
                      <Button h="1.75rem" align='right' size="sm" onClick={handleClickConfirm}>
                        {showConfirm ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.confirmpassword?.type === "minLength" && <span style={{ color: 'red' }}><small>Password should be atleast 8 chars</small></span>}
                  {errors.confirmpassword?.type === "required" && <span style={{ color: 'red' }}><small>Confirm password</small></span>}
                </FormControl>


              </SimpleGrid>
            </Stack>
            <Box
              alignSelf='center'
              width="100%"
              px={10}
              py={10}
              textAlign="center"
              spacing={6}
            >
              <Button
                width="100%"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}
                onClick={handleSubmit(submitForm)}>
                Sign Up
              </Button>
            </Box>
          </chakra.form>

        </Box>
      </Box>
      <Divider marginTop={10} />
    </Container>
  );
};

