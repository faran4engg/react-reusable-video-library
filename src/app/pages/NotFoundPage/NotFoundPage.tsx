import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Oops ! Error</title>
      <meta name="description" content="not found page" />
    </Helmet>
    <div className="flex flex-col items-center">
      <SvgIcon
        className="mt-8 w-16 h-16 text-theme-color-light dark:text-theme-color-dark"
        icon="Error404Icon"
      />

      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="my-4 text-gray-700 dark:text-gray-300">
        Page not found. Check the address or
      </p>

      <Link
        className="animate-bounce text-theme-color-light dark:text-theme-color-dark hover:underline"
        to="/"
      >
        Go to Home page
      </Link>
    </div>
  </>
);

export default NotFoundPage;
