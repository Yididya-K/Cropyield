import React from 'react'
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { Divider, Flex, RadioGroup, Radio, Checkbox, HStack, CheckboxGroup, Box, Heading, useColorModeValue, SimpleGrid, GridItem, Stack, FormControl, FormLabel, Select, Input, Button, ButtonGroup, chakra } from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md';
const Step1 = ({ formData, setForm, navigation }) => {
  const { fregion_code,
    soil_type,
    soil_quality,
    fiield_status,
    crop_method,
    field_view,
    apperance_field,
    ext_prog,
    irregated,
    is_urea,
    quant_urea,
    is_dap,
    quant_dap,
    is_manure,
    is_compost,
    is_organic,
    prev_status,
    field_prep,
    sowing_teq,
  } = formData;
  const [value, setValue] = React.useState("2");
  console.log(value);
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      py='80px'
      w="full"
      alignItems="center"
      justifyContent="center">
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}

      >
        <Heading color='green' p={4} align='center'> First Step</Heading>
        <chakra.form
          method="POST"
          overflow={{ sm: "hidden" }}
        >
          <Stack
            px={4}
            py={5}
            p={[null, 6]}
            spacing={6}
          >
            <SimpleGrid columns={8} spacing={6}>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="region"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  region
                </FormLabel>
                <Select
                  id="fregion_code"
                  name="fregion_code"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  value={fregion_code}
                  onChange={setForm}
                  w="full"
                  rounded="md"


                >
                  <option value='1'>Addis Ababa</option>
                  <option>Somale</option>
                  <option>SNNPR</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </Select>
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Soil Type
                </FormLabel>
                <Select
                  id="soil_type"
                  name="soil_type"
                  autoComplete="country"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={soil_type}
                  onChange={setForm}
                >
                  <option>LEPTOSOL</option>
                  <option>CAMBISOL</option>
                  <option>VERTISOL</option>
                  <option>LUVISOL</option>
                  <option>MIXED TYPE</option>
                  <option>OTHER (SPECIFY)</option>
                </Select>
              </FormControl>

              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Soil Quality
                </FormLabel>
                <Select
                  id="soil_quality"
                  name="soil_quality"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={soil_quality}
                  onChange={setForm}
                >
                  <option>GOOD</option>
                  <option>FAIR</option>
                  <option>POOR</option>

                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Status of the field
                </FormLabel>
                <Select
                  id="fiield_status"
                  name="fiield_status"
                  autoComplete="country"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={fiield_status}
                  onChange={setForm}
                >
                  <option>CULTIVATED</option>
                  <option>PASTURE</option>
                  <option>FALLOW</option>
                  <option>FOREST</option>
                  <option>LAND PREPARED FOR BELG SEASON</option>
                  <option>RENTED OUT</option>
                  <option>OTHER (SPECIFY)</option>
                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Crop Method
                </FormLabel>
                <Select
                  id="crop_method"
                  name="crop_method"
                  autoComplete="country"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={crop_method}
                  onChange={setForm}
                >
                  <option>Pure Stand</option>
                  <option>Mixed Crop</option>
                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Field View
                </FormLabel>
                <Select
                  id="field_view"
                  name="field_view"
                  autoComplete="country"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={field_view}
                  onChange={setForm}
                >
                  <option>OPEN</option>
                  <option>TREE/PERMANENT CROPS</option>
                  <option>HOME/COMPOUND</option>
                  <option> PARTIALLY </option>
                  <option> OTHER (SPECIFY) </option>
                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Apperance Field
                </FormLabel>
                <Select
                  id="apperance_field"
                  name="apperance_field"

                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={apperance_field}
                  onChange={setForm}
                >
                  <option>FLAT</option>
                  <option>SLOPPY-(MODERATE)</option>
                  <option>SLOPPY-(STEEP)</option>
                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Previous Status
                </FormLabel>
                <Select
                  id="prev_status"
                  name="prev_status"

                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={prev_status}
                  onChange={setForm}
                >
                  <option>FALLOW</option>
                  <option>CROPS</option>
                  <option>FOREST/WOODLAND/PASTURE</option>
                  <option>RENTED OUT</option>
                  <option>OTHER (SPECIFY)</option>

                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Field Preparation
                </FormLabel>
                <Select
                  id="field_prep"
                  name="field_prep"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={field_prep}
                  onChange={setForm}
                >
                  <option>USING OWN TRACTOR</option>
                  <option>USING RENTED TRACTOR</option>
                  <option> USING OWNED LIVESTOCK</option>
                  <option>USING RENTED LIVETSOCK</option>
                  <option>DIGGING BY HAND</option>

                </Select>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Sowing Technique
                </FormLabel>
                <Select
                  id="sowing_teq"
                  name="sowing_teq"
                  autoComplete="country"
                  placeholder="Select option"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  value={sowing_teq}
                  onChange={setForm}
                >
                  <option>BROADCAST PLANTING</option>
                  <option> RAW PLANTING</option>
                </Select>
              </FormControl>
            </SimpleGrid>
            <Divider color="brand.600" p={4} />
            <SimpleGrid columns={8} spacing={6}>

              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Extension Program
                </FormLabel>
               
                <RadioGroup id="ext_prog" name="ext_prog"
                  onChange={(e) => setForm(e.target.value)} value={ext_prog}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Is it Irrigated
                </FormLabel>
                <RadioGroup name="irregated" value={value}
                  onChange={setValue}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Is urea used
                </FormLabel>
                <RadioGroup name="is_urea" value={is_urea}
                  onChange={setForm}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Input
                  type="text"
                  name="quant_urea"
                  id="quant_urea"
                  autoComplete="state"
                  mt={1}
                  focusBorderColor="brand.600"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  placeholder="urea amount"
                  value={quant_urea}
                  onChange={setForm}
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Is DAP used
                </FormLabel>
                <RadioGroup name="is_dap" value={is_dap}
                  onChange={setForm}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Input
                  type="text"
                  name=" quant_dap"
                  id=" quant_dap"
                  focusBorderColor="brand.600"
                  autoComplete="state"
                  mt={1}
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  placeholder="Dap amount"
                  value={quant_dap}
                  onChange={setForm}
                />
              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Is Manure used
                </FormLabel>
                <RadioGroup name="is_manure" value={is_manure}
                  onChange={setForm} defaultValue="2">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>

              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Is Compost used
                </FormLabel>
                <RadioGroup name="is_compost" value={is_compost}
                  onChange={setForm}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>


              </FormControl>
              <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                  htmlFor="country"
                  fontSize="sm"
                  fontWeight="md"
                  color={useColorModeValue("gray.700", "gray.50")}
                >
                  Is it  organic
                </FormLabel>
                <RadioGroup name="is_organic" value={is_organic}
                  onChange={setForm}>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </SimpleGrid>
          </Stack>
          <Divider p={4} />
          <Box
            py={3}
            w='100%'
            bg={useColorModeValue("gray.50", "gray.900")}
            textAlign="right"
          >
            <Button
              rightIcon={<MdArrowForward />}
              type="submit"
              colorScheme="green"
              _focus={{ shadow: "" }}
              fontWeight="md"
            >
              next
            </Button>
          </Box>
        </chakra.form>

      </Box>





    </Flex>
  )
}

export default Step1


















// import React from "react";
// import {
//   chakra,
//   Box,
//   Flex,
//   useColorModeValue,
//   SimpleGrid,
//   GridItem,
//   Heading,
//   Text,
//   Stack,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   FormHelperText,
//   Textarea,
//   Avatar,
//   Icon,
//   Button,
//   VisuallyHidden,
//   Select,
//   Checkbox,
//   RadioGroup,
//   Radio,
// } from "@chakra-ui/react";
// import { FaUser } from "react-icons/fa";

// export const step1=(props)=> {
//   console.log(props)
//   return (
//     <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>

//       <h1>step1</h1>
//       <Box mt={[10, 0]}>
//         <SimpleGrid
//           display={{ base: "initial", md: "grid" }}
//           columns={{ md: 3 }}
//           spacing={{ md: 6 }}
//         >

//           <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
//             <chakra.form

//               method="POST"
//               shadow="base"
//               rounded={[null, "md"]}
//               overflow={{ sm: "hidden" }}
//             >
//               <Stack
//                 px={4}
//                 py={5}
//                 p={[null, 6]}
//                 bg={useColorModeValue("white", "gray.700")}
//                 spacing={6}
//               >
//                 <SimpleGrid columns={6} spacing={6}>
//                 <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="country"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       region
//                     </FormLabel>
//                     <Select
//                       id="country"
//                       name="country"
//                       autoComplete="country"
//                       placeholder="Select option"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     >
//                       <option>United States</option>
//                       <option>Canada</option>
//                       <option>Mexico</option>
//                     </Select>
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="country"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       zone code
//                     </FormLabel>
//                     <Select
//                       id="country"
//                       name="country"
//                       autoComplete="country"
//                       placeholder="Select option"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     >
//                       <option>United States</option>
//                       <option>Canada</option>
//                       <option>Mexico</option>
//                     </Select>
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="country"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       woreda code
//                     </FormLabel>
//                     <Select
//                       id="country"
//                       name="country"
//                       autoComplete="country"
//                       placeholder="Select option"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     >
//                       <option>United States</option>
//                       <option>Canada</option>
//                       <option>Mexico</option>
//                     </Select>
//                   </FormControl>


//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="city"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       education
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="city"
//                       id="city"
//                       autoComplete="city"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="state"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       soil type
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="state"
//                       id="state"
//                       autoComplete="state"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       soil quality
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       field status
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       crop method
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       field view
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       apperance field
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                     urea quantity
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                     <FormLabel
//                       htmlFor="postal_code"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                      dap quantity
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="postal_code"
//                       id="postal_code"
//                       autoComplete="postal-code"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                 </SimpleGrid>
//               </Stack>
//               <Box
//                 px={{ base: 4, sm: 6 }}
//                 py={3}
//                 bg={useColorModeValue("gray.50", "gray.900")}
//                 textAlign="right"
//               >
//                 <Button
//                   type="submit"
//                   colorScheme="brand.600"
//                   _focus={{ shadow: "" }}
//                   fontWeight="md"
//                 >
//                   next
//                 </Button>
//               </Box>
//             </chakra.form>
//           </GridItem>
//         </SimpleGrid>
//       </Box>

//       <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
//         <Box py={5}>
//           <Box
//             borderTop="solid 1px"
//             borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
//           ></Box>
//         </Box>
//       </Box>

//      </Box>
//   );
// }
