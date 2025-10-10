import { Burger, Button, Container, Drawer, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About me', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contacts', to: '/contact' }
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
            fw={600}
            size="lg"
            style={{ textDecoration: 'none', color: theme.colors.ember[6] }}
            onClick={close}
          >
            Bogdan Neterebskii
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
                  color={active ? 'ember' : 'pine'}
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
            color={theme.colors.ember[6]}
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
        overlayProps={{ color: theme.colors.pine[8], opacity: 0.35 }}
        styles={{ content: { backgroundColor: theme.colors.sage[0] } }}
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
                color={active ? 'ember' : 'pine'}
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
