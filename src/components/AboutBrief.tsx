import { SimpleGrid, Stack, Text, Title } from '@mantine/core'
import profileData, { ProfileData } from '../utils/profileData'
import Paragraph from './Paragraph'

interface AboutBriefProps {
  data?: ProfileData
}

const AboutBrief = ({ data = profileData }: AboutBriefProps) => {
  const { overview, quickFacts, principles, techStack } = data

  return (<>
    <Paragraph title='OVERVIEW'>
      {overview.map((item) => (
        <Text key={item}>
          • {item}
        </Text>
      ))}
    </Paragraph>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'xl'}>
      <Paragraph title='PRINCIPLES' >
        <Stack gap={"xl"}>
          {principles.map((principle) => (
            <Stack key={principle.title} gap={'xs'}>
              <Title order={5}>{principle.title}</Title>
              <Text>{principle.description}</Text>
            </Stack>
          ))}
        </Stack>
      </Paragraph>
      <Stack gap="xl">
        <Paragraph title='QUICK FACTS'>
          {quickFacts.map((fact) => (
            <Text key={fact.label}>
              {fact.label}: <b>{fact.value}</b>
            </Text>
          ))}
        </Paragraph>
        <Paragraph title='TECH STACK'>
          {techStack.map((stack) => (
            <Text key={stack.name}>
              {stack.name}: <b>{stack.technologies.join(', ')}</b>
            </Text>
          ))}
        </Paragraph>
      </Stack>
    </SimpleGrid >
  </>
  )
}

export default AboutBrief
