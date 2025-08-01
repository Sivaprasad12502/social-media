import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });
  const query = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["comments"],
      });
      console.log("coments added");
    },
    onError: (error) => {
      console.error("Error adding post:", error.message);
    },
  });
  const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ desc, postId });
    setDesc("");
  };
  console.log(data);
  return (
    <div className="comments">
      <div className="write">
        <img
          src={"http://localhost:800/upload/" + currentUser.profilePic}
          alt=""
        />
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "loading"
        : data.map((comment) => (
            <div className="comment">
              <img src={comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
