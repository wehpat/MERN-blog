import React from 'react'
import { useLocation } from "react-router-dom";
import DashProfile from '../components/DashProfile.jsx';
import DashSidebar from '../components/DashSidebar.jsx';
import DashPost from '../components/DashPost.jsx';
import DashUsers from '../components/DashUsers.jsx'

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = React.useState('')
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    console.log(tabFromUrl)
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar/>
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile/>}
      {/* posts */}
      {tab === 'post' && <DashPost/>}
      {/* users */}
      {tab === 'users' && <DashUsers/>}
    </div>
  )
}
