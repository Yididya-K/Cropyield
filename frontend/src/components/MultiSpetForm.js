import React from "react";
import {useForm,useStep} from 'react-hooks-helper';
import Review from "./stepForm/Review";
import Step1 from "./stepForm/Step1";
import Step2 from "./stepForm/Step2";
import Step3 from "./stepForm/Step3";
import Submit from "./stepForm/Submit";


const defaultData={
  fregion_code:'',
  zone_code:'',
  woreda_code:'',
  edu_level:'',
  soil_type:'',
  soil_quality:'',
  fiield_status:'',
  crop_method:'',
  field_view:'',
  apperance_field:'',
  ext_prog:'1',
  irregated:'',
  is_urea:'',
  quant_urea:'',
  is_dap:'',
  quant_dap:'',
  is_manure:'',
  is_compost:'',
  is_organic:'',
  temp_crop_no:'',
  is_prev_error:'',
  prev_status:'',
  field_prep:'',
  how_much_planted:'',
  crop_prev_damage:'',
  is_herbicide:'',
  is_fungi:'',
  is_crop_damage:'',
  damage_percent:'',
  quantity_field:'',
  sowing_teq:'',
  crop_roat:'',
  is_chemic_fert:'',
  dap_quant:'',
  urea_quant:'',
  crop_stand:'',
  is_harvested:'',
  crop_harvested_kg:'',
  is_less_harvst:'',
  percent_planted:'',
  why_less_harvst:'',
  crop_damg:'',
  cause_crop_damg:'',
  percent_crop_damg:'',
  AnnualMeanTemperaturedegC:'',
  MeanTemperatureofWettestQuar:'',
  AnnualPrecipitationmm:'',
  PrecipitationofWettestMonth:'',
  PrecipitationofWettestQuarter:'',
  AgroecologicalZones:'',
  PotentialWetnessIndex:'',
  Nutrientavailability:'',
  Nutrientretentioncapacity:'',
  Rootingconditions:'',
  Oxygenavailabilitytoroots:'',
  Excesssalts:'',
  Toxicity:'',
  Workabilityconstrainingfield:'',
  Avgannualtotalrainfallmm:'',
  Avgtotalrainfallinwettestqu:'',
  Avgstartofwettestquarterin:'',
  monthtotalrainfallmmin:'',
  Totalrainfallmminwettestq:'',
  Startofwettestquarterindeka:'',
  geo_lat:'',
  geo_long:'',
  PlotSlopepercent:'',
  PlotElevationm:'',
  PlotPotentialWetnessIndex:'',
};
const steps=[
  {id:'step1'},
  {id:'step2'},
  {id:'step3'},
  {id:'review'},
  {id:'submit'}

]
 export const MultiStepForm=()=>{
  const [formData,setForm]=useForm(defaultData);
  const {step,navigation}=useStep({
    steps,initialStep:0
  });
  const props={formData,setForm,navigation}
  switch(step.id){
    case 'step1':
      return <Step1 {...props}/>;
    case 'step2':
      return <Step2 {...props}/>;
    case 'step3':
      return <Step3 {...props}/>;
    case 'review':
      return <Review {...props}/>;
    case 'submit':
      return <Submit {...props}/>
    
  }
  return (
   <>
    <h1>MultiStepForm</h1>
   </>
  );
}
export default MultiStepForm;