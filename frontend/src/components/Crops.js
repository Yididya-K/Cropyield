import React from 'react'
import {Link} from 'react-router-dom'
import Cards from '../components/Cards'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    SimpleGrid,
  } from '@chakra-ui/react';
const Crops = (props) => {
    return (
        <div>
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
             Crop{' '}
            <Text as={'span'} color={'green.400'}>
           Type
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            below there are listed 5 diffrent crop types. choose the one you want to make the yield prediction of.
          </Text>
        </Stack>
      </Container>
      <Stack spacing={12} direction={'column'}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 7, xl: 24 }}
        py={5}
        mx="auto"
      >
          <Cards  name ='Barley'
          image="url('https://images.unsplash.com/photo-1499946253127-725623d773d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80') " 
          description="
          As a whole grain, barley provides fiber, vitamins, and minerals.. Consuming a diet rich in whole grains may help reduce the risk of obesity, diabetes, heart disease, certain types of cancer"{...props}/>
          <Cards  name='Maize' 
          image="url('https://images.unsplash.com/photo-1550828484-5d57523a2815?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvcm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" 
           description=" Maize has become a staple food in many parts of the world, with the total production of maize surpassing that of wheat or rice. In addition to being consumed directly by humans"{...props}/>
          <Cards name='Sorghum'
           image="url('https://www.feedipedia.org/sites/default/files/images/sorghum_red.jpg')"  
           description="a genus of about 25 species of flowering plants in the grass family. Some of these species are grown as cereals for human consumption and some in pastures for animals. "{...props}/>
          <Cards name='Teff' 
          image="url('https://www.treehugger.com/thmb/E2Qo8q3_f9HO-pcRWVxzMf-v4gU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__06__teff-105408052bc242409f8c50b776ff6bad.jpg')"
           description="Teff is a tiny, round, khaki-colored grain closely resembling millet. Its scientific name is Eragrostis teff. “Teffa”, the Amharic word for “lost”, is so named because of teff's small size."{...props}/>
          <Cards name='Wheat'
          image="url('https://images.unsplash.com/photo-1543257580-7269da773bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hlYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 ')" 
           description=" comes from a type of grass (Triticum)  widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum"{...props}/>
          </SimpleGrid>
      </Stack>
        </div>
    )
}

export default Crops
