import { useAuthContext } from '../hooks/useAuthContext';
import "./styles/logout.css"
import man from "../images/man_sitting.jpg"

const Logout = () => {

  const { dispatchs } = useAuthContext();

  const handleLogout = () => {

    //  console.log('logging out')

    localStorage.removeItem('user')
    dispatchs({ type: 'LOGOUT' })

    //change below method to redirect

    window.location.href = '/'
  }
  return (
    <>
      <div className="text-center card">
        <div>
          <div className='img'>
            <img src={man} className="img-man"/>
          </div>

          <div className="heading">Comeback Soon !! </div>

          <div className='desc'>
            Are You sure You want to Logout?
          </div>
          <button className="cancel btn" onClick={handleLogout}>Cancel</button>
          <button className="logout btn" onClick={handleLogout}>Yes, Logout</button>
        </div>
      </div>
    </>
  );
}
export default Logout