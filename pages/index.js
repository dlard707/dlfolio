import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pofessor David</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="p-80 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      
      <div className="py-4 px-4 max-w-sm bg-transparent rounded-xl shadow-md space-y-2 sm:py-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img src="images/dave.jpg" alt="logo" className="w-32 h-32 mb-4 block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" />
        <h1 className="text-4xl font-bold text-white">David Larronda</h1>
      </div>
      <div className="text-center space-y-2 sm:text-left md:text-center">
        <div className="space-y-0.5">
          <p className="text-xl text-indigo-300 text-center  my-8 font-semibold md:font-medium">
            Professor de física
          </p>
          <p className="text-indigo-500 my-16 text-center text-lg font-mono font-semibold ">
            Desenvolvedor
          </p>
          <div className="">
            <p className="text-gray-500 my-16 text-center font-medium">
              Especialista em ensino mediado por tecnologia.
            </p>
          </div>

          <button className="py-2 px-4  text-lg text-purple-600  my-16 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> <a link href=" https://api.whatsapp.com/send?phone=5511973849522">Mensagem</a></button>
        </div>


      </div>


    </main>

    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
      

      
    </div>
  )
}
