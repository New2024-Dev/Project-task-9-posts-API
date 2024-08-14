import "./Commentsshow.css"
import Counteritems from "../Counteritems/Counteritems"
import Plusicon from "/assets/Imgas/plus.svg"
import Minusicon from "/assets/Imgas/minus.svg"
import Replyicon from "/assets/Imgas/reply.svg"
import Amyimg from "/assets/Imgas/amyrobson.png"
import Maximg from "/assets/Imgas/maxblagun.png"
import SendPost from "../SendPost/SendPost"
import { useState, useEffect } from "react"
import juliusomoimg from "/assets/Imgas/image-juliusomo.png"


function Commentsshow(){
    
const [Arrayofobjects, setArrayofobjects] = useState([
    {Pluspic: "/assets/Imgas/plus.svg", "countnum": 12, 
        Minuspic: "/assets/Imgas/minus.svg",
            Profilpic: "/assets/Imgas/amyrobson.png", profilname: "amyrobson", 
            Time: "1 month ago", 
            Replypic: "/assets/Imgas/reply.svg",
            Replyword: "Reply", Comment: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well." ,
            id: 1,
             comments: []},
    
        {Pluspic: "/assets/Imgas/plus.svg", countnum: 5, 
        Minuspic: "/assets/Imgas/minus.svg",
            Profilpic: "/assets/Imgas/maxblagun.png", profilname: "maxblagun", 
            Time: "2 weeks ago", 
            Replypic: "/assets/Imgas/reply.svg",
            Replyword: "Reply", Comment: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        id: 2, 
        comments: [
            {Pluspic: "/assets/Imgas/plus.svg", countnum: 4, 
        Minuspic: "/assets/Imgas/minus.svg",
            Profilpic: "/assets/Imgas/image-ramsesmiron.png", profilname: "ramsesmiron",
             Time: "2 weeks ago", 
            Replypic: "/assets/Imgas/reply.svg",
            Replyword: "Reply", commentcontent: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        commentid: 1 
        }
        ]}
]);

     

       function newpostinarray(PostContent){
        let newPostObject = {
            Pluspic: Plusicon, countnum: 0, Minuspic: Minusicon,
                Profilpic: Amyimg, profilname: "Aya", 
                Time: "now", Replypic: Replyicon,
                Replyword: "Reply", Comment: PostContent,
                 id: Arrayofobjects.length +1, comments: []};
            
            let newArrayofobjects = [...Arrayofobjects, newPostObject];
            setArrayofobjects(newArrayofobjects)
        }
        function Deletpost(postdeleted){
        const newObjectAfterDelete = Arrayofobjects.filter((item)=>{
            return item.id != postdeleted;
        });
        setArrayofobjects(newObjectAfterDelete)
        }

        function Replynewcomment(replycommentcontent, id){
           let Myoldpost= Arrayofobjects.filter((post)=> post.id==id)[0];
           let oldcommentcount = Myoldpost.comments.length;
           let newcommentobject = {
            commentcontent: replycommentcontent,
            commentid: oldcommentcount + 1,
            Pluspic: Plusicon, countnum: 0, Minuspic: Minusicon,
                Profilpic: juliusomoimg, profilname: "Juliusomo", 
                Time: "now", Replypic: Replyicon,
                Replyword: "Reply",
           }


            let NewArrayofreply = Arrayofobjects.map((currentreply) => {
                if(currentreply.id == id) {
                    currentreply.comments.push(newcommentobject);
                }
                return(currentreply)
            }) ;
            setArrayofobjects(NewArrayofreply);
}

function Deletecomment(postid, commentid){
    console.log(postid, commentid);
    let newarrayaftcommdel = Arrayofobjects.map((post)=>{
        if (post.id == postid){
        let newarryofcomment = post.comments.filter((deltedcomment)=>{
            return deltedcomment.commentid != commentid;
        });
        return {...post, comments: newarryofcomment}
        }
    
        return post;
    })
    setArrayofobjects(newarrayaftcommdel)
}

function updatecomment(Newcomment, postid, commentid){
    console.log(Newcomment, postid, commentid);
    let newarrayaftcommupdated = Arrayofobjects.map((post)=>{
        if(post.id == postid){
            let newcontaintaftupdate= post.comments.map((comment)=>{
                if(comment.commentid==commentid){
            return{...comment, commentcontent : Newcomment}
                    
                }
                return comment;
            });
            post= {...post, comments:newcontaintaftupdate}
        }
        return post;
    })
    setArrayofobjects(newarrayaftcommupdated)
}
       
       return(
        <>
        <div>
        {Arrayofobjects.map((item) => {
            return(
                <Counteritems
                uniqid={item.id}
                key={item.id}
                Pluspic={item.Pluspic}
                countnum={item.countnum}
                Minuspic={item.Minuspic}
                Profilpic={item.Profilpic}
                profilname={item.profilname}
                Time={item.Time}
                Replypic={item.Replypic}
                Replyword={item.Replyword}
                Comment={item.Comment}
                Deletpost={Deletpost}
                comments={item.comments}
                Replynewcomment={Replynewcomment}
                Deletecomment={Deletecomment}
                updatecomment={updatecomment}
                ></Counteritems>
            )
        })}
        </div>
        <SendPost addNewPostInsideArray={newpostinarray}></SendPost>
        </>
    )
}

export default Commentsshow

