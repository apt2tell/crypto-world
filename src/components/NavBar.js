import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const views = [
    {
      id: 1,
      text: '',
      path: '/',
    },
  ];

  return (
    <ul>
      <nav>
        {views.map((view) => (
          <li key={view.id}>
            <Link
              to={view.path}
            >
              {view.text}
            </Link>
          </li>
        ))}
      </nav>
    </ul>
  );
};

export default NavBar;
