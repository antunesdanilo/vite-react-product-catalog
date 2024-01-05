import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-[100vh] bg-white'>
      <img src="/images/logo.png" className="w-[300px] mb-12" alt="company logotype" />
      <div className='flex flex-col items-center'>
        <div className='text-[#A076F2] text-[90px]'>404</div>
        <div className='text-[#A076F2] text-[40px]'>Página não encontrada</div>
      </div>
      <div className='text-[#555555] font-semibold mt-20'>Que tal navegar pela nossa lista de livros?</div>
      <Link to='/' className='text-[#555555] font-semibold hover:underline mb-20'>
        Navegar
      </Link>
    </div>
  )
}

export { NotFound };