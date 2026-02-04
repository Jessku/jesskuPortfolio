'use client';
import '../../style/stylesheet.css';;
import { ActionIcon, ActionIconGroup } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitch, IconMail, IconPaperclip } from '@tabler/icons-react'
import { socials } from "../../models/models";
import Image from 'next/image';

export default function SocialBar() {
    return (
        <div>
            <div className = "flexRow">
                <div id = "name">Connect with Me!</div>
            </div>
            <div className = "flexRow3">
                 <div id = "h1"> Jessee Horton</div>
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
            </div>
            <div className = "flexRow3">
                <Image src={"/Jessee.jpg"} alt="Jessee Horton" width={276} height={276}/>
                <div className = "flexCol">
                 <div id = "h1">Accolades</div>
                 <div id = "name2">*Wayne State University, BS in Computer Science</div>
                 <div id = "name2">*Cognixia Horizons Grad</div>
                 <div id = "name2">*Apple Developer Foundations Grad</div>
                 <div id = "name2">*Sky Flame</div>
                </div>
                <div className = "flexCol">
                <div id = "name2">*Twitch Affiliate</div>
                <div id = "name2">*Twitch Affiliate</div>
                <div id = "name2">*Twitch Affiliate</div>
                <div id = "name2">*Twitch Affiliate</div>
                </div>
            </div>
        </div>
    );
}