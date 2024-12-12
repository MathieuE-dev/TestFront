'use client';
import React, { useState, useEffect } from 'react';
import { filters } from '../data/data';
import '../design/menu.css';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';

interface MenuItemType {
  id: number;
  name: string;
  preview: string;
  price: number;
  ingredients: string;
  description: string;
  category: string; 
}

export default function Menu() {
  const [data, setData] = useState<MenuItemType[]>([]);
  const [items, setItems] = useState<MenuItemType[]>([]);

  const getMenuData = () => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((menu: MenuItemType[]) => setData(menu)) 
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterChange = (id: number, category: string) => {
    const filteredItems = data.filter((item) => item.category === category);
    setItems(filteredItems);
  };

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <h1>Our Menu</h1>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? 'filter-active' : ''}`}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {items.length === 0 ? (
            <Preloader />
          ) : (
            items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
