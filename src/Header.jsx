import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src="logo.jpg" style={{width:'100px'}} alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/solution">Solution</Link></li>
          <li><Link to="/advice">Advice</Link></li>
        </ul>
      </nav>
      <div className="header-button">
      </div>
      
    </header>
  );
}

export default Header;
