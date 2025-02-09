import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const SocialLogIn = () => {
    const {googleLogIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()


    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(result => {
                   const userInfo = {
                    email : result.user?.email,
                    name :  result.user?.displayName
                   }
             axiosPublic.post('/users',userInfo )
             .then(res => {
                 console.log(res.data);
                 navigate('/')
             })
             .catch(err => console.log(err))
        })
    }
    return (
        <div>

              <button className='btn btn-success btn-outline' onClick={handleGoogleLogIn}>google log in </button>
            
        </div>
    );
};

export default SocialLogIn;