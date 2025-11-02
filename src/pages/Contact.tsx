import { Container, Grid, Image, Stack, Text, Title } from '@mantine/core'
import ContactAnchor from '../components/ContactAnchor'
import profileData from '../utils/profileData'
import bogdanPhoto from '../assets/bogdan_photo_1.jpg'
import DefaultPage from '../components/DefaultPage'



const Contact = () => {
  const { location, contacts } = profileData

  return (
    <DefaultPage title='Contact'>
      <Grid align="flex-start">
        <Grid.Col span={{ base: 12, md: 8 }}>

          <Stack gap="md">
            <Text>The fastest way to connect with me is online, using {ContactAnchor(contacts.email)} or {ContactAnchor(contacts.linkedin)}.</Text>
            <Text>Alternatively, we can meet somewhere near {location}.</Text>
          </Stack>

        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Image
            src={bogdanPhoto}
            alt="Bogdan Neterebskii"
            radius="md"
            w="100%"
            mx="auto"
          />
        </Grid.Col>
      </Grid>
    </DefaultPage>
  )
}

export default Contact
