import { Comment } from "../Comment";

const CommentBox = (props: Props) => {
    const{review} = props;
    return (
      <> 
      <div className="row">
        <div className="col-6">
        <span className="col-6">
             <img src={review.avatar} alt="Comment avatar"/>
        </span>
        </div>
        <div className="col-6">
        <span>
          {<a href="mailto:{review.email}">{review.email}</a>}
        </span>
        <p>{review.content}</p>
        </div>
      </div>
      </>
     )
}
interface Props{
    review : Comment;
}
export default CommentBox;