'use client';
import '../style/stylesheet.css';
import React from 'react';
import { ActionIcon, ActionIconGroup } from "@mantine/core"
import {IconMail, IconPaperclip} from '@tabler/icons-react'
import { socials } from "../models/models";
import SocialBar from './../components/SocialBar/SocialBar';
//import  StickyCards  from './../StickyCards/StickyCards';

export default function HomePage() {
  return (
    <>
  <div> 
    <SocialBar/>
    <div>
      
    </div>

  </div>

  </>); //npm {run build} {start} 
}
