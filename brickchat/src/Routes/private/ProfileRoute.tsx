import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import DogImage from '../../components/dashboard/DogImage'
import BRToolbar from '../../components/dashboard/BRToolbar'
import Profile from '../../components/profile/Profile'



type Props = {}

export default function ProfileRoute({}: Props) {
  return (
    <div>   
        <Profile></Profile>
    </div>
  )
}