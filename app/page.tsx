'use client';
import '../style/stylesheet.css';
import React from 'react';
import { ActionIcon, ActionIconGroup } from "@mantine/core"
import {IconMail, IconPaperclip} from '@tabler/icons-react'
import { socials } from "../models/models";
import SocialBar from './../components/SocialBar/SocialBar';
import ProgramLang from '../components/ProgramLang/ProgramLang';
import  StickyCards  from './../StickyCards/StickyCards';

export default function HomePage() {
  return (
    <>  
  <div> 
    <SocialBar />
    <div>
    <ProgramLang />
    </div>
    <StickyCards />
  </div>

  </>); //npm {run build} {start} 
}
