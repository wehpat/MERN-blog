import React from 'react'
import { Sidebar } from "flowbite-react"
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice.js';

export default function DashSidebar() {
    const location = useLocation()
    const [tab, setTab] = React.useState('')
    React.useEffect(() => {
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if (tabFromUrl) {
        setTab(tabFromUrl)
      }
    }, [location.search])
    const dispatch = useDispatch();
    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: "POST",
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      } catch (err) {
        console.log(err.message);
      }
    };
  
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark' as='div'>
                    Profile
                </Sidebar.Item>
                </Link>
                <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer' as='div' onClick={handleSignout}>
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
