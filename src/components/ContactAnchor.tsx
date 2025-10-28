import { Anchor } from '@mantine/core'
import type { ContactLink } from '../utils/profileData'


const ContactAnchor = (contact: ContactLink) => {
  return < Anchor
    key={contact.href}
    href={contact.href}
    target="_blank"
    rel="noreferrer"
  >
    {contact.label}
  </Anchor >

}

export default ContactAnchor
