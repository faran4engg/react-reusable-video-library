// @ts-nocheck
import { Component } from 'react';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import Button from 'app/domains/Common/components/Forms/button/Button';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="px-4">
          <section className="py-8 px-4 text-center">
            <div className="flex justify-center">
              <SvgIcon icon="Error404Icon" />
            </div>
            <h1 className="mt-8 text-xl text-gray-700">
              <strong>Oops !</strong>
              <br /> Something went wrong
            </h1>
            <Button
              className="mt-8"
              onClick={() => window.location.assign('/')}
            >
              Go to Home page
            </Button>
          </section>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
