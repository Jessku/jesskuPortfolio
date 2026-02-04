'use client';
import { ActionIcon } from '@mantine/core';
import '../../style/stylesheet.css';
import { IconBrandJavascript, IconBrandReact, IconBrandReactNative } from '@tabler/icons-react'

export default function ProgramLang() {
    return (
        <div className = "flexCol">
            <div className = "flexCol">
                <div id = "h1">Programming Languages & Technologies</div>
                <div className = "flexRow3">
                    <div id = "name2">*JavaScript/TypeScript</div> 
                    <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open("http://localhost:3000")}>
                        <IconBrandReactNative/>
                    </ActionIcon>
                    < div id = "name2">(Recursion!)</div>
                    </div>
                <div id = "name2">*Python</div>
                <div id = "name2">*Java</div>
            </div>
        </div>
    );
}