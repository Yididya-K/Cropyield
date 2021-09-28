import React from 'react'
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { Divider, Flex, RadioGroup, Radio, Checkbox, HStack, CheckboxGroup, Box, Heading, useColorModeValue, SimpleGrid, GridItem, Stack, FormControl, FormLabel, Select, Input, Button, ButtonGroup, chakra } from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md';
const predictionform2 = () => {
  const history=useHistory()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [serverResponse, setServerResponse] = useState(data.)
  const submitForm = (data) => {
    const body = {
    fregion_code:data.fregion_code,
    zone_code:dat,
    woreda_code:data.woreda_code,
    edu_level:data.edu_level,
    soil_type:data.soil_type,
    soil_quality:data.soil_quality,
    fiield_status:data.fiield_status,
    crop_method:data.crop_method,
    field_view:data.field_view,
    apperance_field:data.apperance_field,
    ext_prog:data.ext_prog,
    irregated:data.irregated,
    is_urea:data.is_urea,
    quant_urea:data.quant_urea,
    is_dap:data.is_dap,
    quant_dap:data.quant_dap,
    is_manure:data.is_manure,
    is_compost:data.is_compost,
    is_organic:data.is_organic,
    temp_crop_no:data.temp_crop_no,
    is_prev_error:data.is_prev_error,
    prev_status:data.prev_status,
    field_prep:data.field_prep,
    how_much_planted:data.how_much_planted,
    crop_prev_damage:data.crop_prev_damage,
    is_herbicide:data.is_herbicide,
    is_fungi:data.is_fungi,
    is_crop_damage:data.is_crop_damage,
    damage_percent:data.damage_percent,
    quantity_field:data.quantity_field,
    sowing_teq:data.sowing_teq,
    crop_roat:data.crop_roat,
    is_chemic_fert:data.is_chemic_fert,
    dap_quant:data.dap_quant,
    urea_quant:data.urea_quant,
    crop_stand:data.crop_stand,
    is_harvested:data.is_harvested,
    crop_harvested_kg:data.crop_harvested_kg,
    is_less_harvst:data.is_less_harvst,
    percent_planted:data.percent_planted,
    why_less_harvst:data.why_less_harvst,
    crop_damg:data.crop_damg,
    cause_crop_damg:data.cause_crop_damg,
    percent_crop_damg:data.percent_crop_damg,
    AnnualMeanTemperaturedegC:data.AnnualMeanTemperaturedegC,
    MeanTemperatureofWettestQuar:data.MeanTemperatureofWettestQuar,
    AnnualPrecipitationmm:data.AnnualPrecipitationmm,
    PrecipitationofWettestMonth:data.PrecipitationofWettestMonth,
    PrecipitationofWettestQuarter:data.PrecipitationofWettestQuarter,
    AgroecologicalZones:data.AgroecologicalZones,
    PotentialWetnessIndex:data.PotentialWetnessIndex,
    Nutrientavailability:data.Nutrientavailability,
    Nutrientretentioncapacity:data.Nutrientretentioncapacity,
    Rootingconditions:data.Rootingconditions,
    Oxygenavailabilitytoroots:data.Oxygenavailabilitytoroots,
    Excesssalts:data.Excesssalts,
    Toxicity:data.Toxicity,
    Workabilityconstrainingfield:data.Workabilityconstrainingfield,
    Avgannualtotalrainfallmm:data.Avgannualtotalrainfallmm,
    Avgtotalrainfallinwettestqu:data.Avgtotalrainfallinwettestqu,
    Avgstartofwettestquarterin:data.Avgstartofwettestquarterin,
    monthtotalrainfallmmin:data.monthtotalrainfallmmin,
    Totalrainfallmminwettestq:data.Totalrainfallmminwettestq,
    Startofwettestquarterindeka:data.Startofwettestquarterindeka,
    geo_lat:data.geo_lat,
    geo_long:data.geo_long,
    PlotSlopepercent:data.PlotSlopepercent,
    PlotElevationm:data.PlotElevationm,
    PlotPotentialWetnessIndex:data.PlotPotentialWetnessIndex,
}

const requestOptions = {
  method: "POST",
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(body)
}
fetch('/prediction/predict', requestOptions)
  .then(res => res.json())
  .then(data => {
    setServerResponse(data.message)
    console.log(serverResponse)
    history.push({pathname: '/result',result:serverResponse})

  })

reset()
}
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
                  {...register("fregion_code", { required: true })}  

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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}>
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
                <RadioGroup name="irregated" {...register("soil_type", { required: true })}>
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
                  {...register("soil_type", { required: true })}
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
                  {...register("soil_type", { required: true })}
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
                <RadioGroup name="is_manure" {...register("soil_type", { required: true })} defaultValue="2">
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
                <RadioGroup name="is_compost" {...register("soil_type", { required: true })}>
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
                <RadioGroup name="is_organic" {...register("soil_type", { required: true })}
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

export default predictionform2
