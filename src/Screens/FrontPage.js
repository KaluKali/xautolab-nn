import React from 'react';
import FrontPagePromo from '../components/FrontPagePromo';

class MainPage extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <FrontPagePromo />
      </div>
    );
  }
}

export default MainPage;
