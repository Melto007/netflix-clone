import React, {useState} from 'react'
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import './navbar.scss'

const Navbar = () => {
    const [ isScrolled, setIsScrolled ] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
    
    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img 
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                    alt="netflix logo" 
                    />
                    <div className="navlinks">
                        <span>Homepage</span>
                        <span>Series</span>
                        <span>Movies</span>
                        <span>New and Popular</span>
                        <span>My List</span>
                    </div>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="profile icon" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                    <div className='handburger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar