import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const userStyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={userStyle}>
            <h4>Post Of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetail}>Click to see Details</button>
            
        </div>
    );
};

export default Post;