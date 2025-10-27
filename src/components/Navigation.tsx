import { Burger, Button, Container, Drawer, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink, useLocation } from 'react-router-dom'

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
      <Container size="lg" px="md" h="100%">
        <Group justify="space-between" align="center" h="100%">
          <Text
            component={NavLink}
            to="/"
            fw={800}
            size="lg"
            style={{
              textDecoration: 'none',
              color: theme.colors.mainColor[9],
              fontFamily: theme.other.logoFont,
              fontWeight: 800,
              fontSize: '2.5rem',
              lineHeight: 1.1
            }}
            onClick={close}
          >
            Bogdan Has Fun
          </Text>

          <Group gap="xs" visibleFrom="sm">
            {links.map((link) => {
              const active = isActive(link.to)

              return (
                <Button
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  variant={active ? 'filled' : 'light'}
                  radius="xl"
                  onClick={close}
                >
                  {link.label}
                </Button>
              )
            })}
          </Group>

          <Burger
            hiddenFrom="sm"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            size="sm"
          />
        </Group>
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
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                variant={active ? 'filled' : 'light'}
                size="md"
                radius="md"
                fullWidth
                onClick={close}
              >
                {link.label}
              </Button>
            )
          })}
        </Stack>
      </Drawer>
    </>
  )
}

export default Navigation
