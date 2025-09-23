import { Badge, Card, Divider, Group, Stack, Text, Title } from '@mantine/core'
import profileData, { ProfileData } from '../utils/profileData'

interface AboutDetailedProps {
  data?: ProfileData
}

const AboutDetailed = ({ data = profileData }: AboutDetailedProps) => {
  const { experiences, education, certificates, presentations, articles, interests } = data

  return (
    <Stack gap="xl">
      <Stack gap="md">
        <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
          Experience
        </Text>
        <Stack gap="lg">
          {experiences.map((experience, index) => (
            <Card key={`${experience.company}-${experience.period}`} withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Group justify="space-between" align="flex-start">
                  <Stack gap={0}>
                    <Title order={4} c="pine.9">{experience.role}</Title>
                    <Text c="pine.6">{experience.company}</Text>
                  </Stack>
                  <Stack gap={0} align="flex-end">
                    <Text size="sm" c="pine.5">{experience.period}</Text>
                    <Text size="sm" c="pine.5">{experience.location}</Text>
                  </Stack>
                </Group>
                {experience.technologies.length > 0 && (
                  <Group gap="xs">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} color="sage" variant="light" radius="sm">
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                )}
                <Text c="pine.7">{experience.summary}</Text>
                <Stack gap="xs">
                  {experience.contributions.map((item) => (
                    <Text key={item} size="sm" c="pine.6">
                      • {item}
                    </Text>
                  ))}
                </Stack>
                {index < experiences.length - 1 && <Divider color="sage.3" />}
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Education
          </Text>
          <Stack gap="md">
            {education.map((entry) => (
              <Stack key={entry.degree} gap={4}>
                <Title order={5} c="pine.9">{entry.degree}</Title>
                <Text c="pine.6">{entry.institution}</Text>
                <Text size="sm" c="pine.5">{entry.period}</Text>
                <Text c="pine.7">{entry.details}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Stack gap="sm">
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Certificates
          </Text>
          <Stack gap="xs">
            {certificates.map((certificate) => (
              <Text key={certificate.title} c="pine.7">
                <Text component="span" fw={600} c="pine.9">
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
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Presentations
          </Text>
          <Stack gap="xs">
            {presentations.map((presentation) => (
              <Text key={presentation.title} c="pine.7">
                <Text component="span" fw={600} c="pine.9">
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
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
            Articles
          </Text>
          <Stack gap="xs">
            {articles.map((article) => (
              <Text key={article.title} c="pine.7">
                <Text component="span" fw={600} c="pine.9">
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
          <Text size="sm" tt="uppercase" fw={600} c="pine.5" style={{ letterSpacing: '0.2em' }}>
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
