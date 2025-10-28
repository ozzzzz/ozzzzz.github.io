import { useState } from 'react'
import { Container, SegmentedControl, Stack, Text, Title } from '@mantine/core'
import AboutBrief from '../components/AboutBrief'
import AboutDetailed from '../components/AboutDetailed'
import profileData from '../utils/profileData'
import DefaultPage from '../components/DefaultPage'

type ViewMode = 'brief' | 'detailed'

const About = () => {
  const [view, setView] = useState<ViewMode>('brief')

  return (
    <DefaultPage title='About me'>

      <Stack gap="xl">
        <Text>
          Toggle between a concise overview and the full CV-backed story of my work.
        </Text>

        <SegmentedControl
          value={view}
          size='md'
          onChange={(value) => setView(value as ViewMode)}
          data={[
            { label: 'Brief', value: 'brief' },
            { label: 'Detailed', value: 'detailed' }
          ]}
          radius="xl"
          color="mainColor"
        />

        {view === 'brief' ? <AboutBrief data={profileData} /> : <AboutDetailed data={profileData} />}
      </Stack>

    </DefaultPage>
  )
}

export default About
