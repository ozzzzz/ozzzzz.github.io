import React from 'react';
import { Stack, Title, useMantineTheme } from '@mantine/core';
import Link from './Link';

interface ParagraphProps {
    title: string,
    children: React.ReactNode,
    link?: string,
    linkText?: string,
}

const Paragraph = ({ title, children, link, linkText }: ParagraphProps) => {
    const theme = useMantineTheme();
    return (
        <Stack gap="xs">
            <Title order={4} tt="uppercase" fw={600} style={{ letterSpacing: '0.25em', color: theme.colors.mainColor[7] }} >{title}</Title>
            {children}
            {link && linkText && <Link text={linkText} url={link} />}
        </Stack >
    )
}

export default Paragraph;