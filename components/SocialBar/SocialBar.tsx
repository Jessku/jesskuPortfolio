'use client';
import '../../style/stylesheet.css';;
import { ActionIcon, ActionIconGroup } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitch, IconMail, IconPaperclip } from '@tabler/icons-react'
import { socials } from "../../models/models";
import Image from 'next/image';

export default function SocialBar() {
    return (
        <div>
            <div className = "flexRow2">
                <div id = "name">Connect with Me!</div>
            </div>
            <div className = "flexRow2">
                 <div id = "name2"> Jessee Horton</div>
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
            <div className = "flexRow2">
                <Image src={"/Jessee.jpg"} alt="Jessee Horton" width={276} height={276}/>
                <div className = "flexCol">
                 <div id = "name2">*Wayne State University, BS in Computer Science</div>
                 <div id = "name2">*Cognixia</div>
                 <div id = "name2">*Sky Flame</div>
                </div>
                <div id = "name">Software Engineer Intern at Cognixia</div>
            </div>
        </div>
    );
}