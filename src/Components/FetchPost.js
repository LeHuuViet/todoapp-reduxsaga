import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../redux/app.action";

const FetchPost = () => {
  const dispatch = useDispatch();
  const fetchPost = () => {
    console.log(123);
    dispatch(loadPostStart());
  };
  const state = useSelector((state) => ({ ...state.app }));
  return (
    <>
      <h1 style={{textAlign: "left"}}>Fetch Post using ReduxSaga</h1>
      <div style={{textAlign: "left"}}>
        {!state.loading &&
          state.posts.map((post) => <li key={post.id}>{post.title}</li>)}
        <Button type="primary" onClick={fetchPost}>
          FetchPost
        </Button>
      </div>
    </>
  );
};

export default FetchPost;
