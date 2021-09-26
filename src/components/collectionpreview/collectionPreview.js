import React from "react";
import styled from "styled-components";
import { CollectionItem } from "../collection-item/collectionItem";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyled>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...itemprops }) => (
          <CollectionItem key={id} {...itemprops} />
        ))}
    </div>
  </CollectionPreviewStyled>
);

export default CollectionPreview;
const CollectionPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;
