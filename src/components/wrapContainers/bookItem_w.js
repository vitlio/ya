import { connect } from "react-redux";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import mapStateToProps from "../../store/mapStateToProps";
import BookItem from "../bookItem";

const BOOK_ITEM_W = connect(mapStateToProps("BookItem"), mapDispatchToProps("BookItem"))(BookItem);

export default BOOK_ITEM_W