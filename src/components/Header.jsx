import indianFlag from '../assets/indian_flagSVG.svg';

function Header() {
    return (
        <header className="header">
            <a href="">
                <img src={indianFlag} className='logo' alt="Indian flag" />
            </a>
            <h1>Quiz India</h1>
        </header>
    );
}

export default Header;