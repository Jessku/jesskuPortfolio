'use client';
import '../../style/stylesheet.css';;
import { ActionIcon, ActionIconGroup } from "@mantine/core"
import { IconMail, IconPaperclip } from '@tabler/icons-react'
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
            </ActionIconGroup>
            <div>Hatsune Miku</div>
        </div>
    );
}