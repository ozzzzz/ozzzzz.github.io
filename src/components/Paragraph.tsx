import React from 'react';
import { Anchor, Stack, Title } from '@mantine/core';

interface ParagraphProps {
    title: string,
    children: React.ReactNode,
    link?: string,
    linkText?: string,
}

const Paragraph = ({ title, children, link, linkText }: ParagraphProps) => {
    return (
        <Stack gap="xs">
            <Title order={4} >{title}</Title>
            {children}
            {link && linkText && <Anchor fz="sm" fw={300} href={link} target="_blank" rel="noopener noreferrer">{linkText}</Anchor>}
        </Stack>
    )
}

export default Paragraph;