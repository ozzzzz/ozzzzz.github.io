import { Anchor, Blockquote, Container, Grid, Image, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import bogdanPhoto from '../assets/bogdan_photo_4.jpeg'
import profileData from '../utils/profileData'

const Home = () => {

  return (
    <Container size="lg" py="xl">
      <Grid gutter="xl" align="stretch">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg" align="flex-start">
            <Stack gap="lg">
              <Title order={3}>
                Hey, I am Bogdan
              </Title>
              <Text>
                A senior software engineer and technical leader with {profileData.experienceYears} years of experience with motto:
              </Text>
              <Blockquote fs="italic">
                "My goal is to make the team more efficient and the work smoother when I'm around than when I'm not."
              </Blockquote>
            </Stack>
            <Stack>
              <Text>
                Passionate about building solutions that either make people's lives easier and healthier, or reduce environmental impact. Click <Anchor component={Link} to="/about">About me</Anchor> if you want to read how I did that in my career so far.
              </Text>
            </Stack>
            <Stack>
              <Text>
                Open to new opportunities and collaborations if they are fun enough. Click <Anchor component={Link} to="/contact">Contact</Anchor> to make some cool stuff together or just meet if you wanna to get in touch.
              </Text>
            </Stack>

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
    </Container >
  )
}
export default Home
