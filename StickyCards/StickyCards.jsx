"use client";
import React, { use } from "react"
import {useRef} from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"
import "./StickyCards.css"

gsap.registerPlugin(ScrollTrigger);

const StickyCards = ()=> {
    const stickyCardsData = [
        { index: 1, title: "TakoDachi", image: "/sticky-cards/card_5.gif",content: "Takodachi" },
        { index: 2, title : "Miku", image: "/sticky-cards/card_1.png", content: "Miku v3" },
        { index: 3, title: "GUN Mobile", image: "/sticky-cards/card_3.webp", content: "GUN Mobile" },
        {index: 4, title: "Emblem Past", image: "/sticky-cards/card_2.png", content: "Days of Emblem Past"},
        {index: 5, title: "Asura in Naraka", image: "/sticky-cards/card_6.png", content: "Asura in Naraka"}
    ]

    const containerRef = useRef(null); 
    useGSAP(() => {
        const stickyCards = document.querySelectorAll(".sticky-card");

        stickyCards.forEach((card, index) => {
            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: stickyCards[stickyCards.length - 1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                })
            }
        });
    }, {scope: containerRef}); // For sticky card animations

    return <div className="sticky-cards-container" ref={containerRef}>
        {stickyCardsData.map((cardData, index) => (
            <div className = "sticky-card" key={index}>
                <div className = "sticky-card-index">
                    <h1>{cardData.index}</h1>
                </div>
                <div className = "sticky-card-content">{cardData.content}</div>
                <div className = "sticky-card-image">
                    <img src={cardData.image} alt={cardData.title} />
                </div>
                </div>
        ))}
    </div>
    
}

export default StickyCards;