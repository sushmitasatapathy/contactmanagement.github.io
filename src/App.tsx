// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import AddContact from './components/AddContact';
import { Provider } from 'react-redux';
import store from './store'; // Assuming you have a Redux store defined in a separate file
import 'tailwindcss/tailwind.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <nav className="flex items-center justify-between bg-black text-white px-4 py-2">
          <div className="flex items-center">
            <img
              src="https://resources.sansan.com/hubfs/Imported_Blog_Media/Contact-Management.jpg" // Replace with the actual path to your logo image
              alt="Logo"
              className="h-8 w-12 mr-5"
            />
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                className="py-1 px-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none">
                {/* Add search icon here */}
                <svg
                  className="fill-current h-4 w-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a7 7 0 100-14 7 7 0 000 14zm9.707 2.293a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L14.414 10l3.293 3.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <select
              className="py-1 px-2 border border-black-400 rounded focus:outline-none focus:border-blue-500"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <Link to="/" className="text-blue-500 hover:text-blue-700 font-bold text-lg">
              Contacts
            </Link>
            <Link
              to="/add-contact"
              className="text-blue-500 hover:text-blue-700 font-bold text-lg ml-4"
            >
              Add Contact
            </Link>
          </div>
        </nav>
        <div className="flex flex-grow">
          <div className="container mx-auto px-4">
            <Routes>
              <Route
                path="/"
                element={<ContactList searchTerm={searchTerm} filter={filter} />}
              />
              <Route path="/add" element={<ContactDetails />} />
              <Route path="/add-contact" element={<AddContact />} />
              <Route path="/contactlist" element={<ContactList searchTerm={searchTerm} filter={filter} />}
/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
