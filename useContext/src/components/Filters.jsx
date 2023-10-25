import React, { useState, useId } from 'react';
import './Filters.css';

function Filters() {
    const [minPrice, setminPrice] = useState(0);
    const minPRiceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        setminPrice(e.target.value);
    };

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPRiceFilterId}>Precio </label>
                <input
                    type="range"
                    id={minPRiceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>
                    <sup>{minPrice}</sup>
                </span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId}>
                    <option value="all">Todas</option>
                    <option value="laptos">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                    <option value="home-decoration">Decoraciones</option>
                </select>
            </div>
        </section>
    );
}

export default Filters;
