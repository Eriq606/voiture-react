import React from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';

function Button({couleur_theme = 'btn btn-info', label = 'rechercher', type = "button", fonction}) {
  return (
    <>
        <button type={type} className={couleur_theme} onClick={fonction}>{label}</button>
    </>
  );
}

export default Button;
