import Link from "next/link";
import { Component, ReactNode, ReactPropTypes } from "react";
import HomeIcon from '@mui/icons-material/Home';
import styles from "./Menubar.module.css";

interface MenuButtonProps{
    text?: string;
}

interface MenuButtonState{

}

class MenuButton extends Component<MenuButtonProps>{
    constructor(props: any){
        super(props);
    }

    render(): ReactNode {
        return (
            <div className={styles.menubutton}>
                <Link href="/" as={process.env.BACKEND_URL + ""} passHref={true}>
                <HomeIcon />{this.props.text}
                </Link>
            </div>
        )
    }
}

class MenuBar extends Component {
    constructor(props: any){
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="menubar">
                
            </div>
        )
    }
}

export default MenuBar;