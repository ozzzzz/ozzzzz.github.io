import { useState } from 'react'
import { Container, SegmentedControl, Stack, Text, Title } from '@mantine/core'
import AboutBrief from '../components/AboutBrief'
import AboutDetailed from '../components/AboutDetailed'
import profileData from '../utils/profileData'

type ViewMode = 'brief' | 'detailed'

const About = () => {
  const [view, setView] = useState<ViewMode>('brief')

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1} c="pine.9">
            About me
          </Title>
          <Text size="lg" c="pine.6">
            Toggle between a concise overview and the full CV-backed story of my work.
          </Text>
        </Stack>

        <SegmentedControl
          value={view}
          onChange={(value) => setView(value as ViewMode)}
          data={[
            { label: 'Brief', value: 'brief' },
            { label: 'Detailed', value: 'detailed' }
          ]}
          radius="xl"
          color="ember"
        />

        {view === 'brief' ? <AboutBrief data={profileData} /> : <AboutDetailed data={profileData} />}
      </Stack>
    </Container>
  )
}

export default About
