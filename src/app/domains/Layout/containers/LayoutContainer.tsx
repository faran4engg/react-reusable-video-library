import { useState, FC, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from 'app/router/routes';

import { NavSidebar, Content, Header } from 'app/domains/Layout/components';
import { NotFoundPage } from 'app/pages/NotFoundPage/async';

const cls = {
  layout:
    'flex h-screen bg-light-mode-content-bg dark:bg-dark-mode-content-bg text-gray-500 dark:text-gray-200',
  mainWrapper: 'flex flex-col flex-1 w-full',
};

const LayoutContainer: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.twTheme) return;
    document.querySelector('html')!.classList.add(localStorage.twTheme);
  }, []);

  return (
    <div className={cls.layout}>
      <NavSidebar
        isSidebarOpen={isSidebarOpen}
        handleIsSidebarOpen={() => setIsSidebarOpen(prevFlag => !prevFlag)}
      />

      <div className={cls.mainWrapper}>
        <Header
          handleIsSidebarOpen={() => setIsSidebarOpen(prevFlag => !prevFlag)}
        />

        <Content>
          <Switch>
            {routes.map(route =>
              route.component ? (
                <Route
                  key={route.path}
                  exact={true}
                  path={`${route.path}`}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  render={(props: any) => <route.component {...props} />}
                />
              ) : null,
            )}
            <Redirect exact from="/" to="/home" />

            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </div>
    </div>
  );
};

export default LayoutContainer;
