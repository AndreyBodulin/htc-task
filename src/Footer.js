import react from "react";
import './App.css';

function Footer() {
    return(
        <div className='footer'>
            <img className='footer_logo' src='assets/htc.png' alt='no logo'/>
            <span className='footer_location'>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</span>
            <span className='footer_number'>+7 (3412) 93-88-61, 43-29-29</span>
            <a className='footer_link' href=''>htc-cs.ru</a>
        </div>
    );
};
export default Footer;