import React, { Component } from "react";

class ApiError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="apiError">
          Something has gone wrong, please reload the page and try again
        </div>
      );
    }
    return this.props.children;
  }
}

export default ApiError;
