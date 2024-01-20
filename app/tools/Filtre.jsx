
import React, { useState } from 'react';
import '../assets/assets/css/demo.css';
import '../assets/assets/vendor/css/core.css';
import '../assets/assets/vendor/css/theme-default.css';
import Button from '../tools/Button';

function Filtre({ onSearchClick }) {

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFiltreClick = () => {
        onSearchClick(minPrice, maxPrice);
    };

    return (
        <div className="card mb-4">
            <h5 className="card-header">Filter</h5>
            <div className="card-body demo-vertical-spacing demo-only-element">
                <div className="input-group">
                    <span className="input-group-text">Ar</span>
                    <input type="text" className="form-control" placeholder="Price min" aria-label="Amount (to the nearest dollar)" onChange={(e) => setMinPrice(e.target.value)} />
                    <span className="input-group-text">.00</span>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Ar</span>
                    <input type="text" className="form-control" placeholder="Price max" aria-label="Amount (to the nearest dollar)" onChange={(e) => setMaxPrice(e.target.value)} />
                    <span className="input-group-text">.00</span>
                </div>
                <div className='d-flex justify-content-center'>
                <Button couleur_theme='btn btn-warning' label='search' fonction={handleFiltreClick} />
                </div>
            </div>
        </div>
    );
}

export default Filtre;
