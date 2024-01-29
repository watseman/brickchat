import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import DogImage from '../../components/dashboard/DogImage'
import BRToolbar from '../../components/generic/BRToolbar'
import Profile from '../../components/profile/Profile'
import Sidebar from '../../components/generic/Sidebar'
import ProfileLayout from '../../components/layouts/ProfileLayout'



type Props = {}

export default function ProfileRoute({}: Props) {
  return (
    <>   
        <ProfileLayout>
          <Profile></Profile>
        </ProfileLayout>
        
    </>
  )
}