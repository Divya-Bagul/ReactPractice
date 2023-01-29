import { Link,useParams} from "react-router-dom";
function Getdata() {
    const params = useParams();
    const {name}=params;
    const {number}=params;
  
    return(
    <div>
          hello {name} and {number} page
    </div>
    )
}
export default Getdata;