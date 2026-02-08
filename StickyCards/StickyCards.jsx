import "./StickyCards.css"

const StickyCards = ()=> {
    const stickyCardsData = [
        { index: 1, title: "TakoDachi", image: "/sticky-cards/card_5.gif",content: "Takodachi" },
        { index: 2, title : "Miku", image: "/sticky-cards/card_1.png", content: "Miku v3" },
        { index: 3, title: "GUN Mobile", image: "/sticky-cards/card_3.webp", content: "GUN Mobile" },
        {index: 4, title: "Emblem Past", image: "/sticky-cards/card_2.png", content: "Days of Emblem Past"}
    ]
    return <div className="sticky-cards-container">
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