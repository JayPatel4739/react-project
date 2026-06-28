import aiIcon from "../assets/ai-icon.png"

export default function Header(){
    return(
        <header className="header">
            <img src={aiIcon} alt="AI Icon" className="ai-icon" />
            <h1>AI Recipe Generator</h1>
        </header>
    )
}