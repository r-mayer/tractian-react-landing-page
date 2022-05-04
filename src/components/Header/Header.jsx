import './Header.css';

function Header() {
    return (
        <div className="header-container">
            <header>
                <img src="logo.svg" alt="Logo" className='logo'/>
                <div className="middle-links">
                    <ul>
                        <li>Soluções</li>
                        <li>Indústrias</li>
                        <li>Sobre</li>
                        <li>Materiais</li>
                        <li>Blog</li>
                        <li>FLAG</li>
                    </ul>
                </div>
                <div className="right-links">
                    <p>Área do Cliente</p>
                    <p>Demonstração</p>
                </div>
            </header>
            <div className="hero-container">
                <h1>Titulo</h1>
                <p>Textooooooo</p>
            </div>
        </div>
    )
}

export default Header;