import { connect } from "react-redux";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import mapStateToProps from "../../store/mapStateToProps";
import Modal from "../modal";

const MODAL_W = connect(mapStateToProps("Modal"), mapDispatchToProps("Modal"))(Modal)

export default MODAL_W;