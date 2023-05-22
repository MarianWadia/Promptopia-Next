import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-med:hidden'/>
        <span className='text-center orange_gradient'>AI Powered Prompts</span>
      </h1>
      <p className='desc text-center'>promptopia is an open-source 
        AI prompting tools for modern tools to discover, create and share crative prompts.
      </p>
      <Feed />
      
    </section>
  )
}

export default Home