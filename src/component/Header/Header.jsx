import './Header.scss'

const Header = () => {

    return (
        <div className='header'>
            <ul className='header__list'> 
                <li className='header__item'>
                    Home
                </li>
                <li className='header__item'>
                    Project
                </li>
                <li className='header__item'>
                    Resume
                </li>
                <li className='header__item'> 
                    About Me
                </li>
            </ul>
        </div>
    )
}

export default Header