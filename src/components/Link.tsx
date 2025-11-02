import React from 'react';
import { Anchor } from '@mantine/core';

interface LinkProps {
    text: string,
    url: string,
    withArrow?: boolean,
    underline?: boolean,
}

const Link = ({ text, url, withArrow, underline }: LinkProps) => {
    return (
        <Anchor fz="sm" fw={300} href={url} target="_blank" rel="noopener noreferrer" underline={underline ? "always" : "never"} style={{ alignSelf: 'flex-start' }}>
            {text} {withArrow && '→'}
        </Anchor>
    )
}

export default Link;
