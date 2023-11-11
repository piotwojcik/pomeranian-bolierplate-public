import React, { useState } from 'react';

import './styles/header.css';

import PomerLogo from '../Images/start-it-logo.svg';
import SettingLogo from '../Images/setting.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import ProfilePhoto from '../Images/Piotr_Wojcik_WEEK4_CV.JPG';
import { Arrow } from '../Components/Icons/Arrow';

//  ../ wyjscie folder wyzej , ./ szukanie w tym samym folderze
export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handletoggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toogleMenu = () => {
    return (
      <div className="toggle-menu">
        <button className="log-in">Zaloguj się</button>
        <div>
          Nie masz konta?
          <button>Zarejestruj się</button>
        </div>
      </div>
    );
  };
  return (
    <header>
      <div className="header-container">
        <img src={PomerLogo} alt="Logo" />
        <div className="items-container">
          <img src={SettingLogo} alt="Logo" />
          <RoundedImage src={ProfilePhoto} size={{ width: 50, height: 50 }} />
          <div className="name-container">
            <span>Piotr</span>
            <span className="student">kursant</span>
          </div>
          <div className="relative-div">
            <Arrow onClick={handletoggleMenu} />
            <div className="absolut-div">{isMenuOpen && toogleMenu()}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
