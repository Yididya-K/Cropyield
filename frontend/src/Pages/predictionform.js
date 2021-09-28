import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form'
import {
  Divider, Flex, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Tab, TabList, TabPanel, Tabs, TabPanels, Box, Heading, useColorModeValue, SimpleGrid, GridItem, Stack, FormControl, FormLabel, Select, Input, Button, useDisclosure, ButtonGroup, chakra
} from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { resultContext } from '../App';
import MapApp from "./mapapp";
export default function PredictionForm(props) {
  const [point, setPoint] = React.useState([9.1450, 40.4897]);
  const history = useHistory();
  const contextResult = useContext(resultContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [serverResponse, setServerResponse] = useState('')
  const submitForm = (data) => {
    const body = {
      crop_type:props.location.name,
      AgroecologicalZones: data.AgroecologicalZones,
      AnnualMeanTemperaturedegC: data.AnnualMeanTemperaturedegC,
      AnnualPrecipitationmm: data.AnnualPrecipitationmm,
      Avgannualtotalrainfallmm: data.Avgannualtotalrainfallmm,
      Avgstartofwettestquarterin: data.Avgstartofwettestquarterin,
      Avgtotalrainfallinwettestqu: data.Avgtotalrainfallinwettestqu,
      Elevationm: data.Elevationm,
      Excesssalts: data.Excesssalts,
      MeanTemperatureofWettestQuar: data.MeanTemperatureofWettestQuar,
      Nutrientavailability: data.Nutrientavailability,
      Nutrientretentioncapacity: data.Nutrientretentioncapacity,
      Oxygenavailabilitytoroots: data.Oxygenavailabilitytoroots,
      PlotElevationm: data.PlotElevationm,
      PlotPotentialWetnessIndex: data.PlotPotentialWetnessIndex,
      PlotSlopepercent: data.PlotSlopepercent,
      PotentialWetnessIndex: data.PotentialWetnessIndex,
      PrecipitationofWettestMonth: data.PrecipitationofWettestMonth,
      PrecipitationofWettestQuarter: data.PrecipitationofWettestQuarter,
      Rootingconditions: data.Rootingconditions,
      Slopepercent: data.Slopepercent,
      Startofwettestquarterindeka: data.Startofwettestquarterindeka,
      Totalrainfallmminwettestq: data.Totalrainfallmminwettestq,
      Toxicity: data.Toxicity,
      Workabilityconstrainingfield: data.Workabilityconstrainingfield,
      crop_method: data.crop_method,
      ext_prog: data.ext_prog,
      field_irreg: data.field_irreg,
      field_view: data.field_view,
      how_prepared: data.how_prepared,
      is_compost: data.is_compost,
      is_crop_rote: data.is_crop_rote,
      is_fungi: data.is_fungi,
      is_herb: data.is_herb,
      is_manure: data.is_manure,
      is_organic_fert: data.is_organic_fert,
      is_pesti: data.is_pesti,
      is_prev_erros: data.is_prev_erros,
      lat_mod: parseFloat(point[0]),
      lon_mod: parseFloat(point[1]),
      monthtotalrainfallmmin: data.monthtotalrainfallmmin,
      oxen: data.oxen,
      plant_month: data.plant_month,
      planted_percent: data.planted_percent,
      prev_damage: data.prev_damage,
      region_code: data.region_code,
      seedling: data.seedling,
      soil_quality: data.soil_quality,
      soil_type: data.soil_type,
      sow_teq: data.sow_teq,
      tilled_rate: data.tilled_rate,
      total_chemic: data.total_chemic,
      total_dap: data.total_dap,
      total_labor: data.total_labor,
      total_nps: data.total_nps,
      total_urea: data.total_urea,
      woreda_code: data.woreda_code,
      zone_code: data.zone_code,

    }
    console.log(body)
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
        console.log(data.prediction)
        contextResult.prediction = data.prediction
        
        history.push('/result')
      }
      )
      

  }

  return (
    <>
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
         
          <chakra.form
            method="POST"
            overflow={{ sm: "hidden" }}
          >
            <Tabs m="2" variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Location</Tab>
                <Tab>Soil</Tab>
                <Tab>Temprature</Tab>
                <Tab>Others</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Divider color="brand.600" />

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
                          Region
                        </FormLabel>
                        <Select
                          id="region_code"
                          name="region_code"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("region_code", { required: true })}
                        >
                          <option value='1'>Tigray</option>
                          <option value='2'>Afar</option>
                          <option value='3'>Amhara</option>
                          <option value='4'>Oromia</option>
                          <option value='5'>Somali</option>
                          <option value='6'>Benishangul Gumuz</option>
                          <option value='7'>SNNP</option>
                          <option value='12'> Gambela</option>
                          <option value='13'> Harar</option>
                          <option value='15'> Dire Dawa</option>
                        </Select>
                        {errors.region_code?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          zone_code
                        </FormLabel>
                        <Input
                          type="Number"
                          name="zone_code"
                          id="zone_code"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("zone_code", { required: true })}
                        />
                        {errors.zone_code?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="Woreda"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Woreda
                        </FormLabel>
                        <Input
                          type="Number"
                          name="woreda_code"
                          id="woreda_code"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="woreda_code"
                          {...register("woreda_code", { required: true })}
                        />
                        {errors.woreda_code?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="woreda"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          AgroecologicalZones
                        </FormLabel>
                        <Select
                          id="AgroecologicalZones"
                          name="AgroecologicalZones"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("AgroecologicalZones", { required: true })}
                        >
                          <option value='311'> Tropic-Warm/aird </option>
                          <option value='312'>Tropic-Warm/Semi-aird</option>
                          <option value='313'> Tropic-Warm/semi-humid</option>
                          <option value='314'> Tropic-Warm/humid </option>
                          <option value='321'> Tropic-Cool/aird</option>
                          <option value='322'>Tropic-Cool/semi-aird </option>
                          <option value='323'>Tropic-Cool/semi-humid </option>
                          <option value='324'>Tropic-Cool/humid </option>
                        </Select>
                        {errors.AgroecologicalZones?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>


                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Elevation in m
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Elevation"
                          id="Elevation"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Elevation"
                          {...register("Elevationm", { required: true })}
                        />
                        {errors.Elevationm?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Plot Elivation in m
                        </FormLabel>
                        <Input
                          type="Number"
                          name="PlotElevationm"
                          id="PlotElevationm"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="PlotElevationm"
                          {...register("PlotElevationm", { required: true })}
                        />
                        {errors.PlotElevationm?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Plot Slope percent
                        </FormLabel>
                        <Input
                          type="Number"
                          name="PlotSlopepercent"
                          id="PlotSlopepercent"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="plot Slope percent"
                          {...register("PlotSlopepercent", { required: true })}
                        />
                        {errors.PlotSlopepercent?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Slope Percent
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Slopepercent"
                          id="Slopepercent"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Slopepercent"
                          {...register("Slopepercent", { required: true })}
                        />
                        {errors.Slopepercent?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                    </SimpleGrid>
                    <Divider color="brand.600" p={4} />
                    <SimpleGrid columns={1} spacing={6}>
                      <MapApp point={point} setPoint={setPoint} />
                    </SimpleGrid>
                  </Stack>


                </TabPanel>

                <TabPanel>
                  <Divider color="brand.600" />

                  <Stack
                    px={4}
                    py={5}
                    p={[null, 6]}
                    spacing={6}
                  >
                    <SimpleGrid columns={8} spacing={6}>
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
                          <option value="1">LEPTOSOL</option>
                          <option value="2">CAMBISOL</option>
                          <option value="3">VERTISOL</option>
                          <option value="4">LUVISOL</option>
                          <option value="5">MIXED TYPE</option>
                          <option value="6">OTHER (SPECIFY)</option>
                        </Select>
                        {errors.soil_type?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
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
                          {...register("soil_quality", { required: true })}
                        >
                          <option value="1">GOOD</option>
                          <option value="2">FAIR</option>
                          <option value="3">POOR</option>

                        </Select>
                        {errors.soil_quality?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
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
                          {...register("crop_method", { required: true })}
                        >
                          <option value="1">Pure Stand</option>
                          <option value="2">Mixed Crop</option>
                        </Select>
                        {errors.crop_method?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Rotting Condition
                        </FormLabel>
                        <Select
                          id="Rootingconditions"
                          name="Rootingconditions"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Rootingconditions", { required: true })}
                        >
                          <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Rootingconditions?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Workability constraining field 
                        </FormLabel>
                        <Select 
                          id="Workabilityconstrainingfield"
                          name="Workabilityconstrainingfield"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Workabilityconstrainingfield", { required: true })}
                        >
                          <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Workabilityconstrainingfield?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
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
                          {...register("field_view", { required: true })}
                        >
                          <option value="1">OPEN</option>
                          <option value="2">TREE/PERMANENT CROPS</option>
                          <option value="3">HOME/COMPOUND</option>
                          <option value="4"> PARTIALLY </option>
                          <option value="5"> OTHER  </option>
                        </Select>
                        {errors.field_view?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>

                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is Fungi used
                        </FormLabel>
                        <Select
                          id="is_fungi"
                          name="is_fungi"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_fungi", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_fungi?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is Herb
                        </FormLabel>
                        <Select
                          id="is_dap"
                          name="is_dap"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_herb", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_herb?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is Manure used
                        </FormLabel>
                        <Select
                          id="is_manure"
                          name="is_manure"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_manure", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_manure?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is Compost used
                        </FormLabel>
                        <Select
                          id="is_compost"
                          name="is_compost"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_compost", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_compost?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is Pesticide used
                        </FormLabel>
                        <Select
                          id="is_pesti"
                          name="is_pesti"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_pesti", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_pesti?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is organic fertlizer used
                        </FormLabel>
                        <Select
                          id="is_organic_fert"
                          name="is_organic_fert"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_organic_fert", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_organic_fert?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is prev errors
                        </FormLabel>
                        <Select
                          id="is_prev_erros"
                          name="is_prev_erros"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_prev_erros", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_prev_erros?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is Crop rotation used
                        </FormLabel>
                        <Select
                          id="is_crop_rote"
                          name="is_crop_rote"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("is_crop_rote", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.is_crop_rote?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="region"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is prevented from prev_damage
                        </FormLabel>
                        <Select
                          id="prev_damage"
                          name="prev_damage"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("prev_damage", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.prev_damage?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Total Chemical used
                        </FormLabel>
                        <Input
                          type="Number"
                          name="total_chemic"
                          id="total_chemic"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="total_chemic"
                          {...register("total_chemic", { required: true })}
                        />
                        {errors.Elevationm?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Total Dap used
                        </FormLabel>
                        <Input
                          type="Number"
                          name="total_dap"
                          id="total_dap"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="total_dap"
                          {...register("total_dap", { required: true })}
                        />
                        {errors.total_dap?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Total NPS used
                        </FormLabel>
                        <Input
                          type="Number"
                          name="total_nps"
                          id="total_nps"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="total_nps"
                          {...register("total_nps", { required: true })}
                        />
                        {errors.total_nps?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Total Urea used
                        </FormLabel>
                        <Input
                          type="Number"
                          name="total_urea"
                          id="total_urea"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="total_urea"
                          {...register("total_urea", { required: true })}
                        />
                        {errors.total_urea?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                    </SimpleGrid>
                    <Divider color="brand.600" p={4} />


                  </Stack>
                  <Divider p={4} />


                </TabPanel>
                <TabPanel>
                  <Divider color="brand.600" />

                  <Stack
                    px={4}
                    py={5}
                    p={[null, 6]}
                    spacing={6}
                  >
                    <SimpleGrid columns={8} spacing={6}>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Potential Wetness index
                        </FormLabel>
                        
                        <Input
                          type="Number"
                          name="PotentialWetnessIndex"
                          id="PotentialWetnessIndex"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("PotentialWetnessIndex", { required: true })}
                        />
                        {errors.PotentialWetnessIndex?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Precipitation of Wettest Quarter
                        </FormLabel>
                        <Input
                          type="Number" 
                          name="PrecipitationofWettestQuarter"
                          id="PrecipitationofWettestQuarter"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("PrecipitationofWettestQuarter", { required: true })}
                        />
                        {errors.PrecipitationofWettestQuarter?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Plot Potential Wetness index
                        </FormLabel>
                        <Input
                          type="Number"
                          name="PlotPotentialWetnessIndex"
                          id="PlotPotentialWetnessIndex"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("PlotPotentialWetnessIndex", { required: true })}
                        />
                        {errors.PlotPotentialWetnessIndex?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          precipitation of Wettest Month
                        </FormLabel>
                        <Input
                          type="Number"
                          name="PrecipitationofWettestMonth"
                          id="PrecipitationofWettestMonth"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("PrecipitationofWettestMonth", { required: true })}
                        />
                        {errors.PrecipitationofWettestMonth?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Start of Wettest Quarter index
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Startofwettestquarterindeka"
                          id="Startofwettestquarterindeka"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("Startofwettestquarterindeka", { required: true })}
                        />
                        {errors.Startofwettestquarterindeka?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Total Rain fall in wettest quarter in mm
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Totalrainfallmminwettestq"
                          id="Totalrainfallmminwettestq"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Total Rain fall in wettest quarter in mm"
                          {...register("Totalrainfallmminwettestq", { required: true })}
                        />
                        {errors.Totalrainfallmminwettestq?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Mean Temprature of wettest Quarter
                        </FormLabel>
                        <Input
                          type="Number"
                          name="MeanTemperatureofWettestQuar"
                          id="MeanTemperatureofWettestQuar"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("MeanTemperatureofWettestQuar", { required: true })}
                        />
                        {errors.MeanTemperatureofWettestQuar?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Monthly Total Rainfall
                        </FormLabel>
                        <Input
                          type="Number"
                          name="monthtotalrainfallmmin"
                          id="monthtotalrainfallmmin"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("monthtotalrainfallmmin", { required: true })}
                        />
                        {errors.monthtotalrainfallmmin?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Annual mean Temprature
                        </FormLabel>
                        <Input
                          type="Number"
                          name="AnnualMeanTemperaturedegC"
                          id="AnnualMeanTemperaturedegC"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("AnnualMeanTemperaturedegC", { required: true })}
                        />
                        {errors.AnnualMeanTemperaturedegC?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Annual percipitation in mm
                        </FormLabel>
                        <Input
                          type="Number"
                          name="AnnualPrecipitationmm"
                          id="AnnualPrecipitationmm"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("AnnualPrecipitationmm", { required: true })}
                        />
                        {errors.AnnualPrecipitationmm?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Average total rainfall
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Avgannualtotalrainfallmm"
                          id="Avgannualtotalrainfallmm"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("Avgannualtotalrainfallmm", { required: true })}
                        />
                        {errors.Avgannualtotalrainfallmm?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Average start of wettest quarter
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Avgstartofwettestquarterin"
                          id="Avgstartofwettestquarterin"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("Avgstartofwettestquarterin", { required: true })}
                        />
                        {errors.Avgstartofwettestquarterin?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="zone_code"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Average total rainfall in wettest quarter
                        </FormLabel>
                        <Input
                          type="Number"
                          name="Avgtotalrainfallinwettestqu"
                          id="Avgtotalrainfallinwettestqu"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="Zone"
                          {...register("Avgtotalrainfallinwettestqu", { required: true })}
                        />
                        {errors.Avgtotalrainfallinwettestqu?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                     

                    </SimpleGrid>
                  </Stack>

                </TabPanel>

                <TabPanel>
                  <Divider color="brand.600" />
                  <Stack
                    px={4}
                    py={5}
                    p={[null, 6]}
                    spacing={6}
                  >
                    <SimpleGrid columns={8} spacing={6}>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="ext_prog"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Extension Program
                        </FormLabel>
                        <Select
                          id="ext_prog"
                          name="ext_prog"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("ext_prog", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.ext_prog?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="ext_prog"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Is field  Irrigated
                        </FormLabel>
                        <Select
                          id="field_irreg"
                          name="field_irreg"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("field_irreg", { required: true })}
                        >
                          <option value='1'>yes</option>
                          <option value='2'>No</option>
                        </Select>
                        {errors.ext_prog?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
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
                          id="how_prepared"
                          name="how_prepared"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("how_prepared", { required: true })}
                        >
                          <option value="1">USING OWN TRACTOR</option>
                          <option value="2">USING RENTED TRACTOR</option>
                          <option value="3"> USING OWNED LIVESTOCK</option>
                          <option value="4" >USING RENTED LIVETSOCK</option>
                          <option value="5">DIGGING BY HAND</option>
                        </Select>
                        {errors.how_prepared?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
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
                          {...register("sow_teq", { required: true })}
                        >
                          <option value="1">BROADCAST PLANTING</option>
                          <option value="2">RAW PLANTING</option>
                        </Select>
                        {errors.sow_teq?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Toxicity
                        </FormLabel>
                        <Select 
                          id="Toxicity"
                          name="Toxicity"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Toxicity", { required: true })}
                        >
                           <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Toxicity?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Excess Salt
                        </FormLabel>
                        <Select  
                          id="Excesssalts"
                          name="Excesssalts"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Excesssalts", { required: true })}
                        >
                           <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Excesssalts?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Nutrition Availability
                        </FormLabel>
                        <Select  
                          id="Nutrientavailability"
                          name="Nutrientavailability"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Nutrientavailability", { required: true })}
                        >
                           <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Nutrientavailability?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Nutrition Retention Capacity
                        </FormLabel>
                        <Select  
                          id="Nutrientretentioncapacity"
                          name="Nutrientretentioncapacity"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Nutrientretentioncapacity", { required: true })}
                        >
                           <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Nutrientretentioncapacity?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                           Oxygen Availability To Roots
                        </FormLabel>
                        <Select  
                          id="Oxygenavailabilitytoroots"
                          name="Oxygenavailabilitytoroots"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("Oxygenavailabilitytoroots", { required: true })}
                        >
                           <option value="1">Slight Constraint</option>
                          <option value="2">Moderate Constraint</option>
                          <option value="3"> Severe Constraint</option>
                          <option value="4" >Very Severe Constraint</option>
                          <option value="5">Mainly non-soil</option>
                        </Select>
                        {errors.Oxygenavailabilitytoroots?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Oxen used
                        </FormLabel>
                        <Input
                          type="Number"
                          name="oxen"
                          id="oxen"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="oxen"
                          {...register("oxen", { required: true })}
                        />
                        {errors.oxen?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Tilled Rate
                        </FormLabel>
                        <Input
                          type="Number"
                          name="oxen"
                          id="oxen"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="tilled_rate"
                          {...register("tilled_rate", { required: true })}
                        />
                        {errors.tilled_rate?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Total Labour
                        </FormLabel>
                        <Input 
                          type="Number"
                          name="total_labor"
                          id="total_labor"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="total_labor"
                          {...register("total_labor", { required: true })}
                        />
                        {errors.total_labor?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl> 
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                          Planted percent
                        </FormLabel>
                        <Input 
                          type="Number"
                          name="planted_percent"
                          id="planted_percent"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="planted_percent"
                          {...register("planted_percent", { required: true })}
                        />
                        {errors.planted_percent?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                           Quantity of seed
                        </FormLabel>
                        <Input 
                          type="Number"
                          name="seedling"
                          id="seedling"
                          autoComplete="state"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          placeholder="seedling"
                          {...register("seedling", { required: true })}
                        />
                        {errors.seedling?.type === "required" && <span style={{ color: 'red' }}><small>Field Required</small></span>}
                      </FormControl>
                      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color={useColorModeValue("gray.700", "gray.50")}
                        >
                           Planted Month
                        </FormLabel>
                        <Select  
                          id="plant_month"
                          name="plant_month"
                          autoComplete="country"
                          placeholder="Select option"
                          mt={1}
                          focusBorderColor="brand.600"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          {...register("plant_month", { required: true })}
                        >
                           <option value="1">January</option>
                          <option value="2">February </option>
                          <option value="3"> March </option>
                          <option value="4" >April  </option>
                          <option value="5">May </option>
                          <option value="6">June </option>
                          <option value="7">July </option>
                          <option value="8">August </option>
                          <option value="9">September </option>
                          <option value="10">October </option>
                          <option value="11">November </option>
                          <option value="12">December </option>
                        </Select>
                        {errors.plant_month?.type === "required" && <span style={{ color: 'red' }}><small>Please select one</small></span>}
                      </FormControl>
                    </SimpleGrid>
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
                        onClick={handleSubmit(submitForm)}
                      >
                        Predict
                      </Button>
                    </Box>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </chakra.form>
        </Box>
      </Flex>
    </>
  )
}


