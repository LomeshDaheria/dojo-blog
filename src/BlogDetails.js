import { useParams,useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import api from "./api/posts.js";

const BlogDetails = () => {
  const { id } = useParams();
  // console.log(typeof(id));
  const navigate=useNavigate();
  const { data, error, isPending } = useFetch('http://localhost:4000/blogs/' + id);
  
  async function handleClick(e){
   
   try{
      const response=await api.delete(`/blogs/${id}`);

  //    const res=await fetch(`http://localhost:4000/blogs/${id}`,{
  //      method:"DELETE",
  //  });
    console.log(response.data);
     navigate("/");
   }
   catch(err){
    console.log(err.message);
   }
  }
  async function editClick(e){
    console.log(typeof(id));
    e.preventDefault();
    navigate(`/edit/${id}`);
  }
  return (
    <div className="data-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && (
        <article>
          <h2>{ data[0].title }</h2>
          <p>Written by { data[0].id}</p>
          <div>{ data[0].body }</div>
          <button onClick={handleClick}>delete</button>
          <button onClick={editClick}>edit</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;