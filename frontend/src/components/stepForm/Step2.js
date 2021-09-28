
import React from 'react'
import {Flex,Box,Heading,useColorModeValue} from '@chakra-ui/react'
function Step2() {
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
          <Heading>Step 2</Heading>
         

        </Box>
      </Flex>
    )
}

export default Step2



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

// export const step2 =(props)=> {
//   return (
//     <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
    
//       <h1>Step2</h1>
//       <Box mt={[10, 0]}>
//         <SimpleGrid
//           display={{ base: "initial", md: "grid" }}
//           columns={{ md: 3 }}
//           spacing={{ md: 6 }}
//         >
//           <GridItem colSpan={{ md: 1 }}>
//             <Box px={[4, 0]}>
//               <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
//                 Personal Information
//               </Heading>
//               <Text
//                 mt={1}
//                 fontSize="sm"
//                 color={useColorModeValue("gray.600", "gray.400")}
//               >
//                 Use a permanent address where you can receive mail.
//               </Text>
//             </Box>
//           </GridItem>
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
//                   <FormControl as={GridItem} colSpan={[6, 3]}>
//                     <FormLabel
//                       htmlFor="first_name"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       First name
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="first_name"
//                       id="first_name"
//                       autoComplete="given-name"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 3]}>
//                     <FormLabel
//                       htmlFor="last_name"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       Last name
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="last_name"
//                       id="last_name"
//                       autoComplete="family-name"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 4]}>
//                     <FormLabel
//                       htmlFor="email_address"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       Email address
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="email_address"
//                       id="email_address"
//                       autoComplete="email"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 3]}>
//                     <FormLabel
//                       htmlFor="country"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       Country / Region
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

//                   <FormControl as={GridItem} colSpan={6}>
//                     <FormLabel
//                       htmlFor="street_address"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       Street address
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="street_address"
//                       id="street_address"
//                       autoComplete="street-address"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
//                     <FormLabel
//                       htmlFor="city"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color={useColorModeValue("gray.700", "gray.50")}
//                     >
//                       City
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
//                       State / Province
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
//                       ZIP / Postal
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
//                   colorScheme="brand"
//                   _focus={{ shadow: "" }}
//                   fontWeight="md"
//                 >
//                   Save
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
