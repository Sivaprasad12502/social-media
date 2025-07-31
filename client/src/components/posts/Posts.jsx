import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts?userId="+userId).then((res) => res.data),
  });
  if(error){
    console.log(error)
  }
  console.log(userId)

  return (
    <div className="posts">
      {error
        ? "Something Went Wrong"
        : isLoading
        ? "Loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};
