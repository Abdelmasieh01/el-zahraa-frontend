import React from 'react'
import About from './About'
import { fetchProfile } from '../page'

async function page() {
  const {profile , imageUrl} = await fetchProfile()
  return (
    <div>
      <About items={profile} imageUrl={imageUrl}/>
    </div>
  )
}

export default page