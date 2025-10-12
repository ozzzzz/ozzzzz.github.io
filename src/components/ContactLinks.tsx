import { Button, Group } from '@mantine/core'
import type { ContactLink } from '../utils/profileData'

interface ContactLinksProps {
  contacts: ContactLink[];
}

const ContactLinks = ({ contacts }: ContactLinksProps) => {

  return (
    <Group gap="sm" wrap="wrap">
      {contacts.map((contact, index) => (
        <Button
          key={contact.href}
          component="a"
          href={contact.href}
          target="_blank"
          rel="noreferrer"
          variant={index === 0 ? 'filled' : 'light'}
          color={index === 0 ? 'primary' : 'accent'}
          radius="xl"
        >
          {contact.label}
        </Button>
      ))}
    </Group>
  )
}

export default ContactLinks
