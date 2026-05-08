import Banner from "@/assets/images/homem/banner-principal.jpg";

export const Hero = () => {
  return (
    <div className="container">
  <section className='relative h-125 rounded-[20px] mb-10'>
    <img 
      src={Banner} 
      alt="Homem sentado com os tênis da Syntaxwear" 
      className='w-full h-full object-cover rounded-[20px]' 
    />

    <div className='absolute w-full bottom-0 flex justify-end items-center text-center px-6 md:px-24 pb-32'>
      <div className='flex flex-col items-center text-white w-[388px]'>
        <h2 className='text-xl font-medium leading-normal tracking-wider mb-2.5'>
          Krypton One
        </h2>
        <h1 className='text-2xl leading-9 tracking-widest mb-10'>
          Transforme qualquer passo em presença
        </h1>   
            <div className="flex justify-center items-center gap-4">
              <button>
              {/* <button className="cursor-pointer bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"> */}
                Ver modelos
              </button>
              <button>
              {/* <button className="cursor-pointer bg-accent text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"> */}
                Comprar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
