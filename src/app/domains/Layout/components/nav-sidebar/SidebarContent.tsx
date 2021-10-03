import { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { mainRoutes, searchRoutes, infoRoutes } from 'app/router/sidebar';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import Islaamify360Logo from 'assets/img/logo.png';

interface SidebarContentProps {
  handleIsSidebarOpen: () => void;
}

const SidebarContent: FC<SidebarContentProps> = ({ handleIsSidebarOpen }) => (
  <div className="py-4 pt-0 text-gray-700 dark:text-gray-400">
    <ul className="mt-10 lg:mt-0 ">
      <li className="relative px-6 py-3 ">
        <NavLink to="/home" className="hidden lg:block">
          <img
            loading="lazy"
            className="h-10 ml-8 cursor-pointer lg:ml-0"
            src={Islaamify360Logo}
            alt="Islaamify360-Logo"
            width="128"
            height="40"
          />
        </NavLink>
      </li>
      {mainRoutes.map(route => (
        <li
          className="relative px-6 py-2"
          key={route.name}
          onClick={handleIsSidebarOpen}
        >
          <NavLink
            exact
            to={route.path}
            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150"
          >
            <Route path={route.path} exact={route.exact}>
              <span className="absolute inset-y-0 left-0 w-1 bg-purple-700 rounded-tr-lg rounded-br-lg" />
            </Route>
            <SvgIcon className="w-5 h-5" icon={route.icon} />
            <span className="ml-4">{route.name}</span>
          </NavLink>
        </li>
      ))}
      <li className="relative px-6 text-center">➖</li>

      {searchRoutes.map(route => (
        <li
          className="relative px-6 py-2"
          key={route.name}
          onClick={handleIsSidebarOpen}
        >
          <NavLink
            exact
            to={route.path}
            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150"
          >
            <Route path={route.path} exact={route.exact}>
              <span className="absolute inset-y-0 left-0 w-1 bg-purple-700 rounded-tr-lg rounded-br-lg" />
            </Route>
            <SvgIcon className="w-5 h-5" icon={route.icon} />
            <span className="ml-4">{route.name}</span>
          </NavLink>
        </li>
      ))}
      <li className="relative px-6 text-center">➖</li>
      {infoRoutes.map(route => (
        <li
          className="relative px-6 py-2"
          key={route.name}
          onClick={handleIsSidebarOpen}
        >
          <NavLink
            exact
            to={route.path}
            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150"
          >
            <Route path={route.path} exact={route.exact}>
              <span className="absolute inset-y-0 left-0 w-1 bg-purple-700 rounded-tr-lg rounded-br-lg" />
            </Route>
            <SvgIcon className="w-5 h-5" icon={route.icon} />
            <span className="ml-4">{route.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarContent;
