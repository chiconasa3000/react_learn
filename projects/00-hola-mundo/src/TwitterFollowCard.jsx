import {useState} from "react"

export function TwitterFollowCard({children,formatUserName,userName}){

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo": "Seguir"
    //modify style with condition
    const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                {/* src="https://media.licdn.com/dms/image/D4E03AQGg1GvFDvBCtg/profile-displayphoto-shrink_800_800/0/1684438357547?e=2147483647&v=beta&t=qgnKo947wrxdn1fMEzXFE-cFTAYTqiDcGoS81pOh1ew" */}
                <img
                    className="tw-followCard-avatar" 
                    alt="el avatar de chris" 
                    src={`https://unavatar.io/${userName}`}/>
                <div className="tw-followCard-info">
                    {children}
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
