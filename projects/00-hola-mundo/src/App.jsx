import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

export function App(){
    const formatUserName = (username) => `@${username}`
    return(
        <div className="App">
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="langchain-ai"
            >
                <strong>langchain-ai</strong>
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={formatUserName}
                isFollowing
                userName="chiconasa3000"
            >
                <strong>christian suca velando</strong>
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                userName="midudev"
            >
                <strong>Miguel Ángel Durán</strong>
            </TwitterFollowCard>
        </div>
    )
}