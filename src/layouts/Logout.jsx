import {useAuthContext} from '../hooks/useAuthContext';
import "./styles/logout.css"
const Logout=()=>{
   
    const {dispatchs}=useAuthContext();
    
    const handleLogout=()=>{
      //  console.log('logging out')
        localStorage.removeItem('user')
        dispatchs({type:'LOGOUT'})

        //change below method to redirect

        window.location.href='/'

    }
    return <button className='logout' onClick={handleLogout}>Logout</button>
}

export default Logout