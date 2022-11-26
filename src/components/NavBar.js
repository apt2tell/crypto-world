import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const views = [
    {
      id: 1,
      text: 'Home',
      path: '/',
    },
    {
      id: 1,
      text: 'Details',
      path: '/Details',
    },
  ];

  return (
    <>
      <Navbar>
        {views.map((view) => (
          <li key={view.id}>
            <Link
              to={view.path}
            >
              {view.text}
            </Link>
          </li>
        ))}
      </Navbar>
    </>
  );
};

export default NavBar;
