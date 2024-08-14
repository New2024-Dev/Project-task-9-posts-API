import { useState } from "react"
import "./Addnewreply.css"

function Addnewreply(props){
    const [commentinput, setcommentinput] = useState("")

    function changesendnewrepley(event){
        setcommentinput(event.target.value)  
    }

    function clicksendnewreply(event){
        props.Hidereplysection()
        const id= event.target.getAttribute("uniqid")
        props.Replynewcomment(commentinput, id)
        setcommentinput("")

    }
    return(
        <div id="replydiv">
            <input value={commentinput} onChange={changesendnewrepley}
             placeholder="Add new reply" />
            <button onClick={clicksendnewreply}
            uniqid={props.uniqid}>Reply</button>
        </div>
    )
}

export default Addnewreply