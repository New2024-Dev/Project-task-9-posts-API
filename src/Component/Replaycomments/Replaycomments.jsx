
import "./Replaycomments.css"
import EditComment from "../EditComment/EditComment"

function Replaycomments(props){
    
    return(
        <div>
            {props.Addreply.map((comment) =>{
        return(
            <>
            <EditComment 
            updatecomment={props.updatecomment}
            Key={comment.commentid}
            comment={comment}
             Deletecomment={props.Deletecomment}
             postid={props.postid}
            ></EditComment>
            </>
            )
            })}
        
        </div>
    )
}

export default Replaycomments