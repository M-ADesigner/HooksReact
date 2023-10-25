import React, { useState, useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

function Filters() {
    //FUENTE DE LA VERDAD!!
    const { setFilters, filters } = useFilters();
    
    const minPRiceFilterId = useId();
    const categoryFilterId = useId();


    const handleChangeMinPrice = (e) => {
        setFilters((prevState) => ({
            ...prevState,
            minPrice: e.target.value,
        }));
    };

    const handleChangeCategory = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            category: event.target.value,
        }));
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
                    value={filters.minPrice}
                />
                <span>
                    <sup>{filters.minPrice}</sup>
                </span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select
                    id={categoryFilterId}
                    onChange={handleChangeCategory}
                >
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                    <option value="home-decoration">Decoraciones</option>
                </select>
            </div>
        </section>
    );
}

export default Filters;
