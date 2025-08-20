import { Container, Title, Text, Stack, Paper } from '@mantine/core'

function About() {
  return (
    <Container size="lg" py={60}>
      <Stack spacing="xl">
        <Title order={1} size="3rem" weight={600}>
          About Me
        </Title>

        <Stack spacing="lg">
          <Paper p="md" withBorder>
            <Title order={3} size="lg" mb="sm">
              Who I am
            </Title>
            <Text color="dimmed">
              I'm a passionate developer who enjoys creating beautiful and functional web applications.
              I love working with modern technologies and continuously learning new skills.
            </Text>
          </Paper>

          <Paper p="md" withBorder>
            <Title order={3} size="lg" mb="sm">
              What I do
            </Title>
            <Text color="dimmed">
              I specialize in full-stack web development, with expertise in React, Node.js, and modern web technologies.
              I enjoy building user-friendly interfaces and solving complex problems.
            </Text>
          </Paper>

          <Paper p="md" withBorder>
            <Title order={3} size="lg" mb="sm">
              Get in touch
            </Title>
            <Text color="dimmed">
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </Text>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  )
}

export default About