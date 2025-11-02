import { Anchor, Blockquote, Container, Grid, Image, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import bogdanPhoto from '../assets/bogdan_photo_4.jpeg'
import profileData from '../utils/profileData'
import DefaultPage from '../components/DefaultPage'

const Home = () => {

  return (
    <DefaultPage title='Hey, I am Bogdan'>
      <Grid align="stretch">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="xl" align="flex-start">
            <Text>
              A senior software engineer and technical leader with {profileData.experienceYears} years of experience with motto:
            </Text>

            <Blockquote fs="italic">
              "My goal is to make the team more efficient and the work smoother when I'm around than when I'm not."
            </Blockquote>

            <Text>
              Passionate about building solutions that either make people's lives easier and healthier, or reduce environmental impact. Click <Anchor component={Link} to="/about">About me</Anchor> if you want to read how I did that in my career so far.
            </Text>

            <Text>
              Open to new opportunities and collaborations if they are fun enough. Click <Anchor component={Link} to="/contact">Contact</Anchor> to make some cool stuff together or just meet if you wanna to get in touch.
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
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
export default Home
