import { useState } from 'react'
import { AppShell, Burger, Title, NavLink, Avatar, Menu, Group, ActionIcon, Badge } from '@mantine/core'
import { IconBell, IconUser, IconSettings, IconLogout } from '@tabler/icons-react'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

function Navigation({ children }) {
  const [opened, setOpened] = useState(false)
  const location = useLocation()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Header >
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            hiddenFrom="sm"
            size="sm"
          />
          <Title order={3}>Bogdan Has Fun</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            component={Link}
            to={item.href}
            label={item.name}
            active={location.pathname === item.href}
            onClick={() => setOpened(false)}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default Navigation