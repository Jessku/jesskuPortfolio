'use client';
import '../../style/stylesheet.css';;
import { ActionIcon, ActionIconGroup } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitch, IconMail, IconPaperclip } from '@tabler/icons-react'
import { socials } from "../../models/models";

export default function SocialBar() {
    return (
        <div>
            <text> Jessee Horton</text>

            <ActionIconGroup>
                <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open(socials.resume)}>
                    <IconPaperclip />

                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open(`mailto:${socials.email}`)}>
                    <IconMail />
                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open(socials.linkedin)}>
                    <IconBrandLinkedin />
                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open(socials.github)}>
                    <IconBrandGithub />
                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open(socials.twitch)}>
                    <IconBrandTwitch />
                </ActionIcon>
            </ActionIconGroup>
            <div>Hatsune Miku</div>
        </div>
    );
}