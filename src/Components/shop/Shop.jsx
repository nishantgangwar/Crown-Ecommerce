import React from "react";
import PreviewCollection from "../preview_collection/PreviewCollection";
import SHOP_DATA from "./shop.data";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
       {collections.map(({id, ...otherCollectionProps}) => (
           <PreviewCollection key={id} {...otherCollectionProps}/>
       ))}
      </div>
    );
  }
}

export default Shop;
