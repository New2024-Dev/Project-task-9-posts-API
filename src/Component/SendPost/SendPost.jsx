import { useState } from "react"
import "./SendPost.css"

function SendPost(props){
    const [commentvalue, setcommentvalue] = useState("")

    function postSendClick(){
        props.addNewPostInsideArray(commentvalue);
        setcommentvalue("")
    }

function postSendChange(event){
    setcommentvalue(event.target.value)
}

    return(
        <div id="senddiv">
            <input value={commentvalue} onChange={postSendChange}
            id="input" placeholder="Add a comment"></input>
            <button id="butt" onClick={postSendClick}>Send</button>
        </div>

    )
}

export default SendPost