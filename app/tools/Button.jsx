import React from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';

function Button({couleur_theme = 'btn btn-info', label = 'rechercher', fonction}) {
  return (
    <>
        <button type="button" className={couleur_theme} onClick={fonction}>{label}</button>
    </>
  );
}

export default Button;
