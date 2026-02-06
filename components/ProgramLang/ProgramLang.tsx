'use client';
import { ActionIcon } from '@mantine/core';
import '../../style/stylesheet.css';
import { IconBrandJavascript, IconBrandPython, IconBrandReact, IconBrandReactNative, IconCoffee } from '@tabler/icons-react'
import { projects } from '../../models/models';

export default function ProgramLang() {
    return (
        <div className = "flexCol">
            <div className = "flexCol">
                <div id = "h1">Programming Languages & Technologies</div>
                <div className = "flexRow3">
                    <div id = "name2">*JavaScript/TypeScript - </div> 
                    <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open("http://localhost:3000")}>
                        <IconBrandReactNative/>
                    </ActionIcon>
                    < div id = "name2">(Recursion!)</div>
                    </div>
                <div className = "flexRow3">
                    <div id = "name2">*Python</div>
                    <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open("http://localhost:3000")}>
                        <IconBrandPython/>
                    </ActionIcon>
                    </div>
                <div className = "flexRow3">
                    <div id = "name2">*Java (JDBC) - </div> 
                    <ActionIcon variant="default" size="lg" aria-label="name" color="grape" onClick={() => window.open(projects.jdbc)}>
                        <IconCoffee/>
                    </ActionIcon>
            </div>
        </div>
    </div>
    );
}