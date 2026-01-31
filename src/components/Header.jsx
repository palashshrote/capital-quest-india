import indianFlag from '../assets/indian_flagSVG.svg';

function Header() {
    return (
        <header>
            <a href="">
                <img src={indianFlag} className='logo' alt="Indian flag" />
            </a>
            <h1>Capital Quest India</h1>
        </header>
    );
}

export default Header;