import { useState } from "react"
import "./Counteritems.css"
import Addnewreply from "../Addnewreply/Addnewreply"
import Replaycomments from "../Replaycomments/Replaycomments"

function Counteritems(props){
    const [showreplydiv, setshowreplydiv] = useState(false)
const [count, setcount] = useState(props.countnum)

function Add() {
    let newvalue = count + 1;
    setcount(newvalue) 

}

function Muins() {
    let newvalue = count - 1;
    if (count > 0) {
    setcount(newvalue);
}
} 

function deleteBtnClick(event){
    props.Deletpost(event.target.getAttribute("uniqid"))
}

function replyclick(){
let Addnewreply = !showreplydiv;
setshowreplydiv(Addnewreply)
}

function Hidereplysection(){
    setshowreplydiv(false)
}

    return(
        <div id="alldivs">
        <div id="maindiv">
            <div id="counterdiv">
                <button onClick={Add} ><img src={props.Pluspic}/></button>
                <label id="number">{count}</label>
                <button onClick={Muins} ><img src={props.Minuspic}/></button>
            </div>

            <div id="profilmain">
                <div id="profildiv">
                    <img src={props.Profilpic} />
                    <h3 id="headname">{props.profilname}</h3>
                    <span id="time">{props.Time}</span>
                    {props.profilname == 'Aya'?
                    <button className="deletebtn" uniqid={props.uniqid}
                    onClick={deleteBtnClick}>Delete</button>:
                    null}
                    

                    <button id="reply" onClick={replyclick}>
                        <img src={props.Replypic}/>{props.Replyword}</button>
                </div>

                <div id="pargdiv">
                    <p id="parg">{props.Comment}</p>
                </div>

            </div>
        </div>
        <Replaycomments
        updatecomment={props.updatecomment}
        postid={props.uniqid} 
         Addreply={props.comments}
         Deletecomment={props.Deletecomment}></Replaycomments>

        {showreplydiv == true?
            <Addnewreply Replynewcomment={props.Replynewcomment}
            uniqid={props.uniqid}
            Hidereplysection={Hidereplysection}>
            </Addnewreply>:
        null}
        </div>

    )
}

export default Counteritems
