import Header from './Header'

export default function Jogo() {
  return (
    <div className='bg-bg-telas1 h-svh'>
      <Header/>
        <div className='xl:max-w-7xl xl:m-auto'>
        <div >
            <h1 className='text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent text-3xl font-bold text-center mt-10'>NOSSO JOGO</h1>
            <iframe className=" mt-10 w-96 ml-[20px] xl:w-11/12 xl:h-96 xl:ml-[85px]"  width="560" height="315" src="https://www.youtube.com/embed/EfAcDdFjAI0?si=7m9ZLg47u6YnbRNr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
    </div>
  )
}
