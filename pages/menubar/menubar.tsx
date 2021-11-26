import Link from "next/link";
import { ReactChildren } from "react";
import HomeIcon from '@mui/icons-material/Home';

const MenuButton = (props:any) => {
    return (
        <div className={`menu-button menu-${props.text}`}>
            <div className="icon">{props.icon}</div>
            <div className="link-text">{props.text}</div>
        </div>
    )
}

const MenuBar = (props:any) => {
    return (
        <div className="menu-bar">
            <ul>
                <li>
                    <Link href="/" passHref={true}>
                        <MenuButton icon={HomeIcon} text="Home"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuBar;