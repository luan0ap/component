import "../assets/common/common.less";
import Modal from "./component/modal";
import Message from "./component/message";
import ModalInfo from "./component/modalInfo";
import Spin from "./component/spin";
import Table from "./component/table";
import TreeTable from "./component/treeTable";
import Tree from "./component/tree";
import Button from "./container/button";
import Icon from "./container/icon";
import scrollBind from "./utils/scrollBind.js";

const Component = {
    Message,
    Spin,
    Modal,
    Table,
    Tree,
    TreeTable,
    ModalInfo,
    Button,
    Icon,
    scrollBind,
    pc: {
        message: Message,
        spin: Spin,
        modal: Modal,
        table: Table,
        tree: Tree,
        treeTable: treeTable,
        modalInfo: ModalInfo,
        container: {
            button: Button,
            icon: Icon
        }
    },
    mobile: {
        message: Message,
        spin: Spin,
        modal: Modal,
        modalInfo: ModalInfo,
        container: {
            button: Button,
            icon: Icon
        }
    }
}

export default Component;
