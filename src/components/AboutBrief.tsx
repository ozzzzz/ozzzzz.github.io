import { Card, Group, SimpleGrid, Stack, Text } from '@mantine/core'
import profileData, { ProfileData } from '../utils/profileData'
import Paragraph from './Paragraph'

interface AboutBriefProps {
  data?: ProfileData
}

const AboutBrief = ({ data = profileData }: AboutBriefProps) => {
  const { overview, quickFacts, contacts, experiences, principles } = data
  const highlightedExperiences = experiences.slice(0, 3)

  return (<>
    <Paragraph title='Overview'>
      {overview.map((item) => (
        <Text key={item}>
          {item}
        </Text>
      ))}
    </Paragraph>
    <Stack gap="xl">
      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Overview
          </Text>
          <Stack gap="sm">
            {overview.map((item) => (
              <Text key={item}>
                {item}
              </Text>
            ))}
          </Stack>
        </Stack>
      </Card>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
              Quick Facts
            </Text>
            <Stack gap="sm">
              {quickFacts.map((fact) => (
                <Stack key={fact.label} gap={0}>
                  <Text tt="uppercase" fw={500}>
                    {fact.label}
                  </Text>
                  <Text fw={600}>{fact.value}</Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Card>

        {/* <Card withBorder p="lg" radius="md">
          <Stack gap="sm">
            <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
              Reach Out
            </Text>
            <Stack gap="xs">
              {contacts.map((contact) => (
                <Text key={contact.href}>
                  <Text component="span" fw={600}>
                    {contact.label}
                  </Text>{' '}
                  · {contact.value}
                </Text>
              ))}
            </Stack>
          </Stack>
        </Card> */}
      </SimpleGrid>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Principles
          </Text>
          <Stack gap="sm">
            {principles.map((principle) => (
              <Stack key={principle.title} gap={4}>
                <Text fw={600}>{principle.title}</Text>
                <Text>{principle.description}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Card>



      <Stack gap="md">
        <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
          Recent Highlights
        </Text>
        <Stack gap="lg">
          {highlightedExperiences.map((experience) => (
            <Card key={`${experience.company}-${experience.period}`} withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Group justify="space-between" align="flex-start">
                  <Stack gap={0}>
                    <Text fw={600}>{experience.role}</Text>
                    <Text>{experience.company}</Text>
                  </Stack>
                  <Text>{experience.period}</Text>
                </Group>
                <Text tt="uppercase" fw={500}>
                  {experience.location}
                </Text>
                <Text>{experience.summary}</Text>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  </>
  )
}

export default AboutBrief
