import { Badge, Card, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'

interface ProjectItem {
  title: string;
  status: 'In research' | 'In progress' | 'Exploring';
  timeframe: string;
  description: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Factory-ready computational design tools',
    status: 'In progress',
    timeframe: '2024 — Present',
    description:
      'Building automation that links architectural intent with fabrication data, keeping structural analysis and production in sync.'
  },
  {
    title: 'Structural exploration playbook',
    status: 'In research',
    timeframe: '2024',
    description:
      'Documenting repeatable workflows that turn Grasshopper and FEM experiments into deployable services for engineering teams.'
  },
  {
    title: 'Robotics and AI sketchbook',
    status: 'Exploring',
    timeframe: 'Ongoing',
    description:
      'Weekend experiments that combine motion planning, computer vision, and physical prototyping to prototype new interfaces.'
  }
]

const statusColor: Record<ProjectItem['status'], string> = {
  'In progress': 'ember',
  'In research': 'pine',
  Exploring: 'sunrise'
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
            Selected initiatives that connect software, physical products, and data-rich workflows.
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
