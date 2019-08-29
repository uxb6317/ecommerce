import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-Spinner/with-Spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps), // provides isLoading prop to CollectionPage
  WithSpinner // HOC that renders a spinner or the component
)(CollectionPage);

export default CollectionPageContainer;
