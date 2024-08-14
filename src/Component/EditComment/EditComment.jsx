import "./EditComment.css"
import { useState } from "react";

function EditComment({comment, postid, Deletecomment, updatecomment}){

    const [showEditsection, setshowEditsection]= useState(false)
    const [Editnewcomment, setEditnewcomment] = useState(comment.commentcontent)

    const [count, setcount] = useState(comment.countnum)

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

    const [postId] = useState(postid)
    const [commentId] = useState(comment.commentid)

    function deletcommentclicked(){
        Deletecomment(postId, commentId)
    
    }
    
    function Editcommentclick(){
       const neweditsecvalue = !showEditsection
       setshowEditsection(neweditsecvalue)
    }

    function changeEditcomment(event){
        setEditnewcomment(event.target.value)
    }

    function Updateclick(){
        setshowEditsection(false)
        updatecomment(Editnewcomment, postId, commentId)
    }
    

    return(
        <div id="maincommentdiv">
        <div id="commentdiv">
            <div id="counterdiv">
                <button onClick={Add}
                ><img src={comment.Pluspic}/></button>
                <label id="number">{count}</label>
                <button onClick={Muins}
                 ><img src={comment.Minuspic}/></button>
            </div>

            <div id="profilcommentmain">
                <div id="profilcommentdiv">
                    <img src={comment.Profilpic} />
                    <h3 id="headname">{comment.profilname}</h3>
                    <span id="time">{comment.Time}</span>
                    
                    
                    <button className="deletecommentbtn" 
                    onClick={deletcommentclicked}
                    
                    >Delete</button>
                    

                    <button id="replycomment" onClick={Editcommentclick} >
                        Edit</button>
                </div>


                <div id="pargcommentdiv">
               
                    {showEditsection==true?
                    (<>
                    <input id="editinput"
                     value={Editnewcomment}
                    onChange={changeEditcomment}></input>
                    <button id="updatebtn"
                    onClick={Updateclick}
                    >Update</button>
                    </>
                ):
                    (<p id="pargcomment">{comment.commentcontent}</p>)}
                </div>

            </div>
        </div>

        </div>
    )
}


export default EditComment