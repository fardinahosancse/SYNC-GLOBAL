import {Routes, Route,Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";


// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'
import VideoIcon from  '../assets/video_icon.svg'
import VideoIconp from  '../assets/video_chat.png'


export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()


  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="sync logo" />
          <span>SYNC</span>
        </li>

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <li>


<Link to={{ pathname: "https://synctalk.netlify.app/" }} target="_blank">
          <button type="button" className="btn">
          <img src={VideoIcon} alt="sync logo" />
          </button>
        </Link>

        <Link to="/sync">
          <button type="button" className="btn">
          Kanban Tool
          </button>
        </Link>


            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}

       

          </li>
        )}
      </ul>
    </nav>
  )
}
