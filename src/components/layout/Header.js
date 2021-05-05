import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <Link class='navbar-brand' to='/'>
            Shift Management
          </Link>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              <Link class='nav-link active' to='/create-shift'>
                Create a Shift
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
