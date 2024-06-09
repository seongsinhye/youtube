import { React, useState } from 'react';
// import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className='flex justify-around ... mt-6'>
      {/* <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link> */}
      <FiMenu size='24' />
      <img src='/images/youtube logo 01.png' className='w-32' />

      <form>
        <div
          className={`relative border border-gray-300 rounded-s-lg h-14 transition-width duration-500 ${
            isClicked ? 'w-[40rem]' : 'w-[32rem]'
          }`}
        >
          <input
            placeholder='검색'
            type='text'
            className='w-96 p-3 focus:outline-none h-12'
            // className={`h-12 p-3 focus:outline-none ${
            //   isClicked ? 'w-72' : 'w-128'
            // }`}
            onFocus={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
          />
          <button className='border-gray-300 bg-slate-200	w-16 h-14 rounded-r-lg absolute -right-14 hover:bg-slate-400'>
            <CiSearch size='24' className='m-auto' />
          </button>
        </div>
      </form>

      <img
        src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        className='h-16 w-16 rounded-full'
      />
    </nav>
  );
}
