import React, { Component } from 'react';
import Resume from '../assets/documents/UX-Resume.pdf'

class Download extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Resume} target = "_blank"></a>
      </div>
    );
  }
}

export default Download;