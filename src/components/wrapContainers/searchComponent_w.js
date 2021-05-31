import { connect } from "react-redux";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import mapStateToProps from "../../store/mapStateToProps";
import SearchComponent from "../search";

const SEARCH_COMPONENT_W = connect(mapStateToProps("SearchComponent"), mapDispatchToProps("SearchComponent"))(SearchComponent);

export default SEARCH_COMPONENT_W;