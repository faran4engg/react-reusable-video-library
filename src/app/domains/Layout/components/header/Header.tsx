import { useState, FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderProps } from './types';
import Islaamify360Logo from 'assets/img/logo.png';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';

const Header: FC<HeaderProps> = ({ handleIsSidebarOpen }) => {
  // const history = useHistory();
  const twTheme = localStorage.getItem('twTheme');
  const [mode, setMode] = useState(twTheme || 'light');
  const htmlElement = document.querySelector('html')!;

  useEffect(() => {
    if (!localStorage.getItem('twTheme')) {
      htmlElement.classList.add('dark');
      localStorage.setItem('twTheme', 'dark');
      setMode('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDark = () => {
    if (localStorage.getItem('twTheme') === 'dark') {
      htmlElement.classList.remove('dark');
      localStorage.setItem('twTheme', 'light');
      setMode('light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('twTheme', 'dark');
      setMode('dark');
    }
  };

  return (
    <header className="z-40 py-2 shadow-md lg:shadow-none shadow-bottom bg-light-mode dark:bg-dark-mode">
      <div className="container flex justify-between items-center px-3 mx-auto h-full text-theme-color-light dark:text-theme-color-dark">
        {/* <!-- Mobile hamburger --> */}
        <button
          onClick={handleIsSidebarOpen}
          className="p-1 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-green-200"
          aria-label="Menu"
        >
          <SvgIcon className="w-6 h-6" icon="MenuIcon" />
        </button>

        <div className="flex flex-1 justify-center h-10">
          <NavLink to="/home" className="block lg:hidden">
            <img
              loading="lazy"
              className="h-10 cursor-pointer lg:ml-0"
              src={Islaamify360Logo}
              alt="Islaamify360-Logo"
              width="133"
              height="40"
            />
          </NavLink>
        </div>
        <ul className="flex flex-shrink-0 items-center space-x-6">
          {/* <li className="relative text-theme-color-light dark:text-theme-color-dark">
            <button
              onClick={() => history.push('/search')}
              className="relative align-middle rounded-md focus:outline-none"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <SvgIcon className="w-5 h-5" icon="SearchIcon" />
            </button>
          </li> */}
          {/* <!-- Theme toggler --> */}
          <li className="relative text-theme-color-light dark:text-theme-color-dark">
            <button
              onClick={toggleDark}
              className="relative align-middle rounded-md focus:outline-none"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              {mode === 'light' ? (
                <span className="mx-auto w-5 h-5 animate-spin">🌚</span>
              ) : (
                <span className="mx-auto w-5 h-5 animate-spin">💡</span>
              )}

              {/* <!-- Notification badge --> */}
              <span className="inline-block absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border-2 border-white animate-ping transform translate-x-1 -translate-y-1 dark:border-gray-800" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
