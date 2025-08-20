import { useState } from 'react'
import { AppShell, Burger, Title, NavLink, Avatar, Menu, Group, ActionIcon } from '@mantine/core'
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
      header={{ height: 70 }}
      navbar={{ 
        width: 250, 
        breakpoint: 'sm', 
        collapsed: { mobile: !opened } 
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger 
              opened={opened} 
              onClick={() => setOpened(!opened)} 
              hiddenFrom="sm" 
              size="sm" 
            />
            <Title order={3}>Personal Website</Title>
          </Group>
          
          <Group>
            <ActionIcon variant="subtle" size="lg">
              <IconBell size={20} />
            </ActionIcon>
            
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  style={{ cursor: 'pointer' }}
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Account</Menu.Label>
                <Menu.Item leftSection={<IconUser size={14} />}>Your Profile</Menu.Item>
                <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<IconLogout size={14} />}>Sign out</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
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