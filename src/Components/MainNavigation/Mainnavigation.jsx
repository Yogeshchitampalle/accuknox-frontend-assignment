import { useState, useEffect } from 'react';
import { IconButton, Navbar, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Cog6ToothIcon, UserIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useSelector } from 'react-redux';
// import './Mainnavigation.css';

const Mainnavigation = () => {
  const [searchData, setSearchData] = useState('');
  const [filteredWidgets, setFilteredWidgets] = useState([]);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const datas = useSelector((state) => state.Widget.widgets);

  const allWidgets = datas.categories.reduce((acc, category) => {
    return [...acc, ...category.widgets];
  }, []);

  // Filter widgets based on search input
  useEffect(() => {
    const filtered = allWidgets.filter(widget =>
      widget.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredWidgets(filtered);
  }, [searchData]);

  // Handle search input change
  const searchHandler = (e) => {
    setSearchData(e.target.value);
  };

  // Handle theme change
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Navbar className="sticky top-0 z-10 mx-auto bg-[#bad3f1] from-blue-gray-900 to-blue-gray-800 px-4 py-3 max-w-full">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          {/* Navigation */}
          <Typography
            as="a"
            href="#"
            color='black'
            className="mr-2 ml-3 cursor-pointer font-bold"
          >
            <div className="text-lg font-semibold text-foreground">
              Home {' > '} Dashboard V2
            </div>
          </Typography>

          {/* Centered Search Box */}
          <div className='flex justify-center items-center w-full h-16'>
            <div className='flex items-center bg-white w-[30vw] max-w-[500px] border-2 border-gray-300 rounded-full shadow-md'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='p-2 text-gray-500' />
              <input
                type='text'
                placeholder='Search Widgets...'
                value={searchData}
                onChange={searchHandler}
                className='bg-white p-2 w-full rounded-full outline-none'
              />
            </div>
          </div>

          {/* Icons on the right side */}
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text">
              <Cog6ToothIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="text">
              <BellIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="text">
              <UserIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="text" onClick={toggleTheme}>
              {theme === 'light' ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </div>
      </Navbar>

      {/* Search Results Dropdown */}
      {searchData && (
        <div className="absolute top-0 mt-14 w-80 left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-md border border-gray-200 z-10">
          {filteredWidgets.length > 0 ? (
            <ul>
              {filteredWidgets.map(widget => (
                <li key={widget.id} className="p-2 border-b border-gray-200">
                  {widget.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No widgets found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Mainnavigation;
