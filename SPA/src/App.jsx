import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navigate" element={<Navigation />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/navigate">Navigate</Link>
      <br /><br />
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      Footer Section | Copyright © 2025 My Website
    </footer>
  );
}


function Home() {
  return <main>Welcome to Home page</main>;
}
function About() {
  return <main>Welcome to about section</main>;
}

function Login() {
  return <main>Welcome to login page</main>;
}

function Navigation() {
  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/login");
  }
  return (
    <main>
      <br />
      Currently in navigation page
      <br />
      <button onClick={handlenavigate}>Go to login page</button>
    </main>
  );
}

function ErrorPage() {
  return <>Error page not found</>;
}
export default App;
