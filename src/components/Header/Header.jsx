import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className='purple darken-3'>
      <div className='nav-wrapper'>
        <Link to='!#' className='brand-logo'>
          ReactShop
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/ReactLearn-vitrina'>Shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
