import Header from './Header'

export default function Jogo() {
  return (
    <div className='bg-bg-telas1 h-svh'>
      <Header/>
        <div className='xl:max-w-7xl xl:m-auto'>
        <div className='xl:h-[640px] h-[450px]'>
            <h1 className='text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent text-3xl font-bold text-center mt-10'>NOSSO JOGO</h1>
            <iframe  className=" mt-10 w-[380px] ml-[50px] xl:w-11/12 xl:h-full xl:ml-[85px] h-[330px]" width="560" height="315" src="https://www.youtube.com/embed/XdBqoDMmDys?si=h7qHqdvIM6JmuWMn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        </div>
        </div>
    </div>
  )
}