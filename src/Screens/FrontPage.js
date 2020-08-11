import React from "react";

import FrontPagePromo from "../components/FrontPagePromo";
// import SimpleSlider from "../components/ProductsCarousel/ProductsCarousel";
import Loader from "../components/UI/Loaders/Loader";

class MainPage extends React.Component {
  state = {
    loading: true,
    // products: []
  };

  async componentDidMount() {
    try {
      // const { data: products } = await http.get(`products`);
      // this.setState({ loading: false, products });
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <FrontPagePromo />
        {/*<section className="section ">*/}
        {/*  <h3 className="title">Check out our amazing products</h3>*/}
        {/*  <div className="is-relative">*/}
        {/*    {this.state.loading ? (*/}
        {/*      <Loader />*/}
        {/*    ) : (*/}
        {/*      <SimpleSlider products={this.state.products} />*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>
    );
  }
}

export default MainPage;
