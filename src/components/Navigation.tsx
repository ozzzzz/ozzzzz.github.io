import { Avatar, Burger, Container, Drawer, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink, useLocation } from 'react-router-dom'
import bogdanPhoto from '../assets/bogdan_photo_4.jpeg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About me', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
]

const Navigation = () => {
  const theme = useMantineTheme()
  const location = useLocation()
  const [opened, { toggle, close }] = useDisclosure(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return location.pathname.startsWith(path)
  }

  return (
    <>
      <Container size="lg" px="md" h="100%" py="md">
        <Stack gap="sm">
          <Group gap="md" align="center">

            <Text
              component={NavLink}
              to="/"
              fw={700}
              size="xl"
              style={{
                textDecoration: 'none',
                color: theme.colors.mainColor[9]
              }}
              onClick={close}
            >
              Bogdan Neterebskii
            </Text>
          </Group>

          <Group gap="xl" visibleFrom="sm" >
            {links.map((link) => {
              const active = isActive(link.to)

              return (
                <Text
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  size="sm"
                  c={active ? theme.colors.mainColor[9] : theme.colors.mainColor[4]}
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                  onClick={close}
                >
                  {link.label}
                </Text>
              )
            })}
          </Group>
        </Stack>

        <Burger
          hiddenFrom="sm"
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          size="sm"
          style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="sm"
      >
        <Stack gap="md" mt="lg">
          {links.map((link) => {
            const active = isActive(link.to)

            return (
              <Text
                key={link.to}
                component={NavLink}
                to={link.to}
                size="lg"
                c={active ? theme.colors.mainColor[9] : theme.colors.mainColor[4]}
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
                onClick={close}
              >
                {link.label}
              </Text>
            )
          })}
        </Stack>
      </Drawer>
    </>
  )
}

export default Navigation
