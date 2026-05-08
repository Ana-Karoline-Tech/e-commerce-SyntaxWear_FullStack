import Logo from '../../assets/images/icons/logo/Logo.svg';
import UserIcon from '../../assets/images/icons/logo/icon-user.svg';
import AboutIcon from '../../assets/images/icons/logo/icon-question.svg';
import CardIcon from '../../assets/images/icons/logo/icon-compras.svg';

export const Header = () => {
    return (
        <div className='relative'>
            <header className="fixed top-10 left-0 right-0 z-10">
                <div className=" bg-white max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl mt-5">
                    <img 
                        src={Logo} 
                        alt="Logo SytaxWear" 
                        className="w-[150px] h-[48px]" 
                    />

                    <nav className='hidden md:block'>
                        <ul className="flex gap-10 text-sm font-medium">
                            <li><a href="#masculino" className="hover:text-accent transition-colors">Masculino</a></li>
                            <li><a href="#feminino" className="hover:text-accent transition-colors">Feminino</a></li>
                            <li><a href="#outlet" className="hover:text-accent transition-colors">Outlet</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className="flex items-center gap-10">
                            <li className="hidden md:block"><a href="#" className="text-sm hover:text-accent">Nossas Lojas</a></li>
                            <li className="hidden md:block"><a href="#" className="text-sm hover:text-accent">Sobre</a></li>
                            <li><a href="#"><img src={UserIcon} alt="Ícone de Usuário" className="w-6 h-6" /></a></li>
                            <li><a href="#"><img src={AboutIcon} alt="Ícone de Sobre" className="w-6 h-6" /></a></li>
                            <li>
                                <a href="#" className="relative">
                                    <img src={CardIcon} alt="Ícone de Compras" className="w-6 h-6" />
                                    <span className="absolute -top-2 -right-2 bg-accent text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold">
                                        0
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};