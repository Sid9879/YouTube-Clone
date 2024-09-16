import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
// import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import { API_KEY} from "../../Data";
import profile_pic from '../../assets/profile_pic.png'
import axios from 'axios'
const Navbar = ({setsidebar}) => {
 
//   let searchRef = useRef()
//   const [search,setSearch] = useState('search')

//  let getVideo = async()=>{
//   let res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?search${search}part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${API_KEY}`)
//   console.log(res.data.items)

//  }
//  useEffect(()=>{
// getVideo(search)
//  },[search])

//  const handlesearch = (e)=>{
// e.preventDefault()
// let search = searchRef.current.value
// setSearch(search)
// console.log(search)
//  }


  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
       <img className='menu-icon' onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
       <Link to="/"><img className='logo' src={logo} alt="" /></Link> 
      </div>
      
      <div className='nav-middle flex-div'>
        <div  className='search-box flex-div'>
        <input  type="text" />
        {/* <button className='btn btn-danger' type='submit'>Search</button> */}
        <img src={search_icon} alt="" />
        </div>
        
      </div>

<div className='nav-right flex-div'>
  <img src={upload_icon} alt="" />
  <img src={more_icon} alt="" />
  <img src={notification_icon} alt="" />
  <img src={profile_pic} className='user-icon' alt="" />
</div>

    </nav>
  )
}

export default Navbar
