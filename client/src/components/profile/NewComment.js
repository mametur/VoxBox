import React from 'react'
import { Link } from 'react-router-dom';


export const NewComment = ({thread}) => {

    function convert(date){
        let datearray = date.split("T");
        let newdate = datearray[0].split("-");
        const newDatePart1 = newdate[2] + "-" + newdate[1] + "-" + newdate[0];
        const datePart2 = datearray[1].split(":");
        const newDatePart2 = datePart2[0] + " : " + datePart2[1];
        const result = newDatePart1 + " / " + newDatePart2;
        console.log(result)
        return result ;
    }

    return (
        <div>
           <div className="comment-box">
               <div className="comment-up">
                    <Link className="link" to ={{
                        pathname: `/profile/${thread.user.user_id}`,
                        state: {post:thread}
                    }}><h2 className="comment-user-name">{thread.user.firstName} {thread.user.lastName}</h2></Link>
                   <p>replied on {convert(thread.createdAt)}</p>
               </div>
               <div className="comment-text">{thread.comment_content}</div>
            </div> 
        </div>
    )
}
