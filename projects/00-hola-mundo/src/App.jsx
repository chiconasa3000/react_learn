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
                name="langchain-ai"
            />
            <TwitterFollowCard 
                formatUserName={formatUserName}
                isFollowing
                userName="chiconasa3000"
                name="christiaasdasdasdasdn suca velando"
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                userName="midudev"
                name="Miguel Ángel Durán"
            />
        </div>
    )
}