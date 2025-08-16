import logo from '../assets/logo.svg';

export default function Header({ setTimer }) {
    return (
        <header className='header'>
            <img src={logo} className="logo" alt="Vite logo" />
            <h1>Quiz App</h1>
        </header>
    );
}