import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectSelectionsForPreview } from "../../redux/shop/shop.selectors.js";

import "./collections-overview.style.scss";

const CellectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectSelectionsForPreview
});

export default connect(mapStateToProps)(CellectionsOverview);
