import '../styles/styles.css';

const Header = () => {
    return(
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
  <div className="container-fluid">
    <a className="navbar-brand text-primary"  href="#">Orders <span className="text-danger">App</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Suppliers</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Customers</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
} 

export default Header;