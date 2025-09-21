import { Container, Title, Text, Stack, Paper, Group, Anchor, Badge, List, Divider, SimpleGrid, Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import profileData from '../utils/profileData'

function ProfileDetailed() {
  const {
    name,
    headline,
    location,
    contacts,
    overview,
    currentFocus,
    experiences,
    focusAreas,
    education,
    certificates,
    presentations,
    articles,
    interests
  } = profileData

  return (
    <Container size="lg" py={60}>
      <Stack spacing="xl">
        <Stack spacing="xs">
          <Title order={1}>{name}</Title>
          <Text size="xl" fw={500}>{headline}</Text>
          <Text color="dimmed">Based in {location}</Text>
          <Text color="dimmed">{currentFocus}</Text>
        </Stack>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Overview</Title>
          <Stack mt="sm" spacing="sm">
            {overview.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </Stack>
        </Paper>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <Paper withBorder p="lg" radius="md">
            <Title order={3} size="1.2rem">Contacts</Title>
            <Stack mt="sm" spacing="xs">
              {contacts.map((contact) => (
                <Anchor key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
                  {contact.label}: {contact.value}
                </Anchor>
              ))}
            </Stack>
          </Paper>

          <Paper withBorder p="lg" radius="md">
            <Title order={3} size="1.2rem">Focus areas</Title>
            <Group mt="sm" spacing="sm">
              {focusAreas.map((area) => (
                <Badge key={area} size="lg" variant="light">{area}</Badge>
              ))}
            </Group>
          </Paper>
        </SimpleGrid>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Experience</Title>
          <Stack mt="lg" spacing="xl">
            {experiences.map((experience, index) => {
              const isLast = index === experiences.length - 1

              return (
                <Stack key={`${experience.company}-${experience.period}`} spacing="sm">
                  <Group justify="space-between" align="flex-start">
                    <div>
                      <Text fw={600}>{experience.role}</Text>
                      {experience.companyUrl ? (
                      <Anchor href={experience.companyUrl} target="_blank" rel="noreferrer">
                        {experience.company}
                      </Anchor>
                    ) : (
                      <Text>{experience.company}</Text>
                    )}
                  </div>
                  <Text color="dimmed">{experience.period}</Text>
                </Group>
                <Text color="dimmed">{experience.location}</Text>
                <Group spacing="xs">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} size="sm" variant="outline">{tech}</Badge>
                  ))}
                </Group>
                <Text>{experience.summary}</Text>
                <List spacing="xs">
                  {experience.contributions.map((item) => (
                    <List.Item key={item}>{item}</List.Item>
                  ))}
                </List>
                {!isLast && <Divider />}
              </Stack>
              )
            })}
          </Stack>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Education</Title>
          <Stack mt="md" spacing="lg">
            {education.map((entry) => (
              <Stack key={entry.degree} spacing="xs">
                <Text fw={600}>{entry.degree}</Text>
                <Text>{entry.institution}</Text>
                <Text color="dimmed">{entry.period}</Text>
                <Text>{entry.details}</Text>
              </Stack>
            ))}
          </Stack>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Certificates</Title>
          <List spacing="xs" mt="sm">
            {certificates.map((certificate) => (
              <List.Item key={certificate.title}>
                {certificate.url ? (
                  <Anchor href={certificate.url} target="_blank" rel="noreferrer">
                    {certificate.title}
                  </Anchor>
                ) : (
                  certificate.title
                )}
                {` — ${certificate.provider} (${certificate.year})`}
              </List.Item>
            ))}
          </List>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Presentations</Title>
          <List spacing="xs" mt="sm">
            {presentations.map((presentation) => (
              <List.Item key={presentation.title}>
                {presentation.url ? (
                  <Anchor href={presentation.url} target="_blank" rel="noreferrer">
                    {presentation.title}
                  </Anchor>
                ) : (
                  presentation.title
                )}
                {` — ${presentation.event} (${presentation.year})`}
              </List.Item>
            ))}
          </List>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Articles</Title>
          <List spacing="xs" mt="sm">
            {articles.map((article) => (
              <List.Item key={article.title}>
                {article.url ? (
                  <Anchor href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </Anchor>
                ) : (
                  article.title
                )}
                {` — ${article.publication} (${article.year})`}
              </List.Item>
            ))}
          </List>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Title order={2} size="1.4rem">Interests</Title>
          <List spacing="xs" mt="sm">
            {interests.map((interest) => (
              <List.Item key={interest}>{interest}</List.Item>
            ))}
          </List>
        </Paper>

        <Group justify="space-between">
          <Button component={Link} to="/profile/brief" variant="subtle">
            Back to snapshot
          </Button>
          <Button component={Link} to="/">
            Return home
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}

export default ProfileDetailed
