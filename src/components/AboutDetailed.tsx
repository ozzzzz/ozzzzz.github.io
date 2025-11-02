import { Accordion, Anchor, Badge, Card, Group, Stack, Text, Title } from '@mantine/core'
import profileData, { ProfileData } from '../utils/profileData'
import Paragraph from './Paragraph'
import Link from './Link'

interface AboutDetailedProps {
  data?: ProfileData
}

const AboutDetailed = ({ data = profileData }: AboutDetailedProps) => {
  const { experiences, principles, education, certificates, presentations, articles, patents, interests } = data

  return (
    <Stack gap="xl">
      <Paragraph title="EXPERIENCE">
        <Accordion variant="contained" radius="md" multiple mt="md">
          {experiences.map((experience, index) => (
            <Accordion.Item value={`${experience.company}-${experience.period}-${index}`} key={`${experience.company}-${experience.period}-${index}`}>
              <Accordion.Control>
                <Group justify="space-between" align="flex-start">
                  <Stack gap={0}>
                    <Title order={4}>{experience.role}</Title>
                    <Text>{experience.company}</Text>
                  </Stack>
                  <Stack gap={0} align="flex-end" mr='xs'>
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
                        <Badge key={tech} color="lightAccent" variant="light" radius="sm">
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
      </Paragraph>

      <Paragraph title='PRINCIPLES' >
        <Stack gap="md">
          {principles.map((principle) => (
            <Stack key={principle.title} gap={0}>
              <Title order={5}>{principle.title}</Title>
              <Text>{principle.description}</Text>
            </Stack>
          ))}
        </Stack>
      </Paragraph>

      <Paragraph title='EDUCATION'>
        <Stack gap="md">
          {education.map((entry) => (
            <Stack key={entry.degree} gap="0">
              <Title order={5}>{entry.degree}</Title>
              <Text>{entry.institution}</Text>
              <Text>{entry.period}</Text>
              <Text>{entry.details}</Text>
            </Stack>
          ))}
        </Stack>
      </Paragraph>

      <Paragraph title="ARTICLES">
        <Stack gap="md">
          {articles.map((article) => (
            <Stack key={article.title} gap='0'>
              <Title order={5}>{article.title}</Title>
              <Text>{article.publication} ({article.year})</Text>
              <Link text="Read Article" url={article.url || ""} withArrow />
            </Stack>
          ))}
        </Stack>
      </Paragraph >

      <Paragraph title="PATENTS">
        <Stack gap="md">
          {patents.map((patent) => (
            <Stack key={patent.number} gap="0">
              <Title order={5}>{patent.title}</Title>
              <Text>{patent.number} ({patent.year})</Text>
              <Link text="View Patent" url={patent.url || ""} withArrow />
            </Stack>
          ))}
        </Stack>
      </Paragraph>
    </Stack >
  )
}

export default AboutDetailed
