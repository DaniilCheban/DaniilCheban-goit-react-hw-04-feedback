import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export { Section };
