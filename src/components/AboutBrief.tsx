import { Badge, Card, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import profileData, { ProfileData } from '../utils/profileData'

interface AboutBriefProps {
  data?: ProfileData
}

const AboutBrief = ({ data = profileData }: AboutBriefProps) => {
  const { name, headline, currentFocus, overview, quickFacts, contacts, focusAreas, experiences } = data
  const highlightedExperiences = experiences.slice(0, 3)

  return (
    <Stack gap="xl">
      <Card withBorder p="lg" radius="md">
        <Stack gap="xs">
          <Title order={2} c="pine.9">{name}</Title>
          <Text size="lg" c="pine.7">{headline}</Text>
          <Text c="pine.6">{currentFocus}</Text>
        </Stack>
      </Card>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
              Quick Facts
            </Text>
            <Stack gap="sm">
              {quickFacts.map((fact) => (
                <Stack key={fact.label} gap={0}>
                  <Text size="sm" c="pine.5" tt="uppercase" fw={500}>
                    {fact.label}
                  </Text>
                  <Text fw={600} c="pine.9">{fact.value}</Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Card>

        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
              Reach Out
            </Text>
            <Stack gap="xs">
              {contacts.map((contact) => (
                <Text key={contact.href} c="pine.7">
                  <Text component="span" fw={600} c="pine.9">
                    {contact.label}
                  </Text>{' '}
                  · {contact.value}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Card>
      </SimpleGrid>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Overview
          </Text>
          <Stack gap="sm">
            {overview.map((item) => (
              <Text key={item} c="pine.8">
                {item}
              </Text>
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

      <Stack gap="md">
        <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
          Recent Highlights
        </Text>
        <Stack gap="lg">
          {highlightedExperiences.map((experience) => (
            <Card key={`${experience.company}-${experience.period}`} withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Group justify="space-between" align="flex-start">
                  <Stack gap={0}>
                    <Text fw={600} c="pine.9">{experience.role}</Text>
                    <Text c="pine.6">{experience.company}</Text>
                  </Stack>
                  <Text size="sm" c="pine.5">{experience.period}</Text>
                </Group>
                <Text size="sm" tt="uppercase" fw={500} c="pine.5">
                  {experience.location}
                </Text>
                <Text c="pine.7">{experience.summary}</Text>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AboutBrief
