import { Link,useParams,useSearchParams ,useNavigate} from "react-router-dom";
function Getdata() {
    const [searchparam,setsearchparam] = useSearchParams();
    const name = searchparam.get('name');
   
  const navigate = useNavigate();
    return(
    <div>
          hello {name}  search param page
          <button onClick={()=>setsearchparam({name:'newname'})}> chnage param </button>
          <button onClick={()=>navigate('/about')}> Go to about page using navigation </button>
    </div>
    )
}
export default Getdata;