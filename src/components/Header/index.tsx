import Logo from '../../assets/images/icons/logo/Logo.svg';
import UserIcon from '../../assets/images/icons/logo/icon-user.svg';
import AboutIcon from '../../assets/images/icons/logo/icon-question.svg';
import CardIcon from '../../assets/images/icons/logo/icon-compras.svg';

export const Header = () => {
    return (
        <div className='relative'>
            <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                    <img src={Logo} alt="Logo SytaxWear" className="h-8 w-auto" />

                    <nav>
                        <ul className="flex gap-6 text-sm font-medium">
                            <li><a href="#masculino" className="hover:text-accent transition-colors">Masculino</a></li>
                            <li><a href="#feminino" className="hover:text-accent transition-colors">Feminino</a></li>
                            <li><a href="#outlet" className="hover:text-accent transition-colors">Outlet</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className="flex items-center gap-6">
                            <li className="hidden md:block"><a href="#" className="text-sm hover:text-accent">Nossas Lojas</a></li>
                            <li className="hidden md:block"><a href="#" className="text-sm hover:text-accent">Sobre</a></li>
                            <li><a href="#"><img src={UserIcon} alt="Ícone de Usuário" className="w-6 h-6" /></a></li>
                            <li><a href="#"><img src={AboutIcon} alt="Ícone de Sobre" className="w-6 h-6" /></a></li>
                            <li><a href="#"><img src={CardIcon} alt="Ícone de Compras" className="w-6 h-6" /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};