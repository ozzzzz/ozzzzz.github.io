import { Badge, Button, Card, Container, Divider, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import profileData from '../utils/profileData'

const Home = () => {
  const {
    name,
    headline,
    currentFocus,
    overview,
    focusAreas,
    experiences,
    articles,
    contacts,
    quickFacts
  } = profileData

  const highlightedExperiences = experiences.slice(0, 3)
  const featuredArticles = articles.slice(0, 3)

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Text size="xs" tt="uppercase" fw={600} c="pine.6" style={{ letterSpacing: '0.3em' }}>
            {name}
          </Text>
          <Title order={1} fw={600} c="pine.9">
            {headline}
          </Title>
          <Text size="lg" c="pine.6">
            {currentFocus}
          </Text>
          <Group gap="sm" mt="sm">
            {contacts.map((contact, index) => (
              <Button
                key={contact.href}
                component="a"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                variant={index === 0 ? 'filled' : 'light'}
                color={index === 0 ? 'ember' : 'pine'}
                radius="xl"
              >
                {contact.label}
              </Button>
            ))}
          </Group>
        </Stack>

        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
              Overview
            </Text>
            <Stack gap="sm">
              {overview.map((item) => (
                <Text key={item} size="md" c="pine.8">
                  {item}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Card>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <Card withBorder p="lg" radius="md">
            <Stack gap="sm">
              <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
                Currently
              </Text>
              <Stack gap="sm">
                {quickFacts.map((fact) => (
                  <Stack key={fact.label} gap={0}>
                    <Text size="sm" c="pine.5" tt="uppercase" fw={500}>
                      {fact.label}
                    </Text>
                    <Text size="md" fw={600} c="pine.9">
                      {fact.value}
                    </Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Card>

          <Card withBorder p="lg" radius="md">
            <Stack gap="sm">
              <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
                Focus Areas
              </Text>
              <Group gap="xs">
                {focusAreas.map((area) => (
                  <Badge key={area} color="sunrise" variant="light" radius="xl">
                    {area}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Card>
        </SimpleGrid>

        <Stack gap="md">
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Recent Work
          </Text>
          <Stack gap="lg">
            {highlightedExperiences.map((experience) => (
              <Card key={`${experience.company}-${experience.period}`} withBorder p="lg" radius="md">
                <Stack gap="sm">
                  <Group justify="space-between" align="flex-start">
                    <Stack gap={0}>
                      <Text fw={600} c="pine.9">
                        {experience.role}
                      </Text>
                      <Text c="pine.6">{experience.company}</Text>
                    </Stack>
                    <Text size="sm" c="pine.5">
                      {experience.period}
                    </Text>
                  </Group>
                  <Text size="sm" tt="uppercase" fw={500} c="pine.5">
                    {experience.location}
                  </Text>
                  <Text c="pine.8">{experience.summary}</Text>
                  <Divider color="sage.3" />
                  <Stack gap="xs">
                    {experience.contributions.map((item) => (
                      <Text key={item} size="sm" c="pine.6">
                        • {item}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Stack>

        <Stack gap="md">
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Selected Writing
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {featuredArticles.map((article) => (
              <Card
                key={article.title}
                component="a"
                href={article.url}
                target="_blank"
                rel="noreferrer"
                withBorder
                p="lg"
                radius="md"
                shadow="sm"
                style={{ textDecoration: 'none' }}
              >
                <Stack gap={6}>
                  <Text size="xs" tt="uppercase" fw={500} c="pine.5">
                    {article.publication} · {article.year}
                  </Text>
                  <Text fw={600} c="pine.9">
                    {article.title}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>

        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
              Elsewhere
            </Text>
            <Text c="pine.7">
              I love hearing about ambitious problems that blend software, data, and physical products. Reach out if you want to explore something together.
            </Text>
            <Group gap="sm" mt="sm">
              {contacts.map((contact) => (
                <Badge key={contact.value} color="sage" variant="light" radius="xl">
                  {contact.value}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Card>

        <Text size="xs" tt="uppercase" fw={500} c="pine.5" style={{ letterSpacing: '0.2em' }}>
          Handcrafted in {new Date().getFullYear()} — stay curious.
        </Text>
      </Stack>
    </Container>
  )
}

export default Home
