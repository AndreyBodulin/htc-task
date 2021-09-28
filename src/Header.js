import react from "react";
import './App.css';

function Header(props){
    return(
      <header className="header container">
        <div className="logo">
          <img src="assets/logo.jpg" alt="No logo" />
        </div>
        <div className="search">
            <input className="search_input" type="text" placeholder="Поиск..." />
            <button className="search_btn">Найти</button>
        </div>
          <div className="login">
              <button className="login_btn">Войти</button>
          </div>
      </header>
    );
};
export default Header;