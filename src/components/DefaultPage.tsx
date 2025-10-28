import React from 'react';
import { Container, Title } from '@mantine/core';

interface DefaultPageProps {
    title: string,
    children: React.ReactNode,
}

const DefaultPage = ({ title, children }: DefaultPageProps) => {
    return (
        <Container size="lg" py="md">
            <Title order={3} mb="xl">{title}</Title>
            {children}
        </Container>
    )
}

export default DefaultPage;