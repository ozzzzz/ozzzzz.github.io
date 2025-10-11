import { Accordion, Badge, Card, Group, Stack, Text, Title } from '@mantine/core'
import profileData, { ProfileData } from '../utils/profileData'

interface AboutDetailedProps {
  data?: ProfileData
}

const AboutDetailed = ({ data = profileData }: AboutDetailedProps) => {
  const { experiences, education, certificates, presentations, articles, patents, interests } = data

  return (
    <Stack gap="xl">
      <Stack gap="md">
        <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
          Experience
        </Text>
        <Accordion variant="contained" radius="md" multiple>
          {experiences.map((experience, index) => (
            <Accordion.Item value={`${experience.company}-${experience.period}-${index}`} key={`${experience.company}-${experience.period}-${index}`}>
              <Accordion.Control>
                <Group justify="space-between" align="flex-start">
                  <Stack gap={0}>
                    <Title order={4}>{experience.role}</Title>
                    <Text>{experience.company}</Text>
                  </Stack>
                  <Stack gap={0} align="flex-end">
                    <Text>{experience.period}</Text>
                    <Text>{experience.location}</Text>
                  </Stack>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="sm">
                  {experience.technologies.length > 0 && (
                    <Group gap="xs">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} color="sage" variant="light" radius="sm">
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  )}
                  <Text>{experience.summary}</Text>
                  <Stack gap="xs">
                    {experience.contributions.map((item) => (
                      <Text key={item}>
                        • {item}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Education
          </Text>
          <Stack gap="md">
            {education.map((entry) => (
              <Stack key={entry.degree} gap={4}>
                <Title order={5}>{entry.degree}</Title>
                <Text>{entry.institution}</Text>
                <Text>{entry.period}</Text>
                <Text>{entry.details}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Certificates
          </Text>
          <Stack gap="xs">
            {certificates.map((certificate) => (
              <Text key={certificate.title}>
                <Text component="span" fw={600}>
                  {certificate.title}
                </Text>{' '}
                — {certificate.provider} ({certificate.year})
              </Text>
            ))}
          </Stack>
        </Stack>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Presentations
          </Text>
          <Stack gap="xs">
            {presentations.map((presentation) => (
              <Text key={presentation.title}>
                <Text component="span" fw={600}>
                  {presentation.title}
                </Text>{' '}
                — {presentation.event} ({presentation.year})
              </Text>
            ))}
          </Stack>
        </Stack>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Articles
          </Text>
          <Stack gap="xs">
            {articles.map((article) => (
              <Text key={article.title}>
                <Text component="span" fw={600}>
                  {article.title}
                </Text>{' '}
                — {article.publication} ({article.year})
              </Text>
            ))}
          </Stack>
        </Stack>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Patents
          </Text>
          <Stack gap="xs">
            {patents.map((patent) => (
              <Text key={patent.number}>
                <Text component="span" fw={600}>
                  {patent.title}
                </Text>{' '}
                — {patent.number} ({patent.year})
              </Text>
            ))}
          </Stack>
        </Stack>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text tt="uppercase" fw={600} style={{ letterSpacing: '0.2em' }}>
            Interests
          </Text>
          <Group gap="xs">
            {interests.map((interest) => (
              <Badge key={interest} color="sunrise" variant="light" radius="xl">
                {interest}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Card>
    </Stack>
  )
}

export default AboutDetailed
