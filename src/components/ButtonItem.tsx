import {Button} from "react-bootstrap";
import React from "react";
import classNames from "classnames";
import '../App.css';

interface ButtonItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

export function ButtonItem(props: ButtonItemProps) {
    return (
        <div className={"custo-btn"}>
            <div>
        <Button {...props} variant={"tabs-btn"} onClick={props.onClick} style={{borderRadius:"24px"}}
                className={classNames(props.className, 'm-1 tabs-btn' +  props.active ? 'primary-color' : 'secondary-color')}>
            {props.children}</Button>
            </div>
            </div>
            );
}
