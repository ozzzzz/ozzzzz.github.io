import { Badge, Card, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'

interface ProjectItem {
  title: string;
  status: 'In research' | 'In progress' | 'Exploring' | 'Completed';
  timeframe: string;
  description: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Support for the Veterinary System',
    status: 'Completed',
    timeframe: '2021 — 2024',
    description:
      'Supporting and developing a platform for the veterinary system, written in PHP and pure JavaScript.'
  }
]

const statusColor: Record<ProjectItem['status'], string> = {
  'In progress': 'ember',
  'In research': 'pine',
  'Exploring': 'sunrise',
  'Completed': 'pine'
}

const Projects = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1} c="pine.9">
            Projects
          </Title>
          <Text size="lg" c="pine.6">
            My side projects and research explorations. Will be updated soon.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {projects.map((project) => (
            <Card key={project.title} withBorder p="lg" radius="md" shadow="sm">
              <Stack gap="sm">
                <Group justify="space-between" align="baseline">
                  <Title order={3} size="1.25rem" c="pine.9">
                    {project.title}
                  </Title>
                  <Badge color={statusColor[project.status]} variant="light" radius="xl">
                    {project.status}
                  </Badge>
                </Group>
                <Text size="sm" c="pine.5">
                  {project.timeframe}
                </Text>
                <Text c="pine.7">{project.description}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default Projects
