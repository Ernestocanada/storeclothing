import React from "react";
import ShopData from "./shopData";
import CollectionPreview from "../../components/collectionpreview/collectionPreview";
import styled from "styled-components";

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <ShopPageStyled>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </ShopPageStyled>
    );
  }
}

const ShopPageStyled = styled.div``;
