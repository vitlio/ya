import { connect } from "react-redux";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import mapStateToProps from "../../store/mapStateToProps";
import BookListPage from "../bookList";

const BOOK_LIST_W = connect(mapStateToProps("BookListPage"), mapDispatchToProps("BookListPage"))(BookListPage);

export default BOOK_LIST_W;