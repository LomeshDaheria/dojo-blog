import { useEffect } from "react";
import { useState ,useMemo} from "react";
import { useNavigate,useParams } from "react-router-dom";
import api from "./api/posts.js";


const EditPost = () => {
    const {id}=useParams();
    const memo=useMemo(() => first, [id])
    const navigate=useNavigate();
    const[isPending,setIsPending]=useState(null);
    let data;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState('mario');

    useEffect(()=>{
      async function start(){
        
        try{
          let response=await api.get(`/blogs/${id}`);
          // setIsPending(true);
          setBody(response.data.body);
          // console.log(response.data);
        }
        catch(err){
          if(err.response){
            const {header,status,data}=err.response;
            console.log(header);
            console.log(status);
            console.log(data);
          }
          else{
            console.log(err.name,err.message);
          }
        }
      }
  
      start();
    },[]);

    const handleEdit=(e)=>{
      e.preventDefault();
    }

    
    return (
      
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleEdit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button >Edit</button>
        </form>
      </div>
    );
}
 
export default EditPost;