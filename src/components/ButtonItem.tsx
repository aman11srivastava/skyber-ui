import {Button} from "react-bootstrap";
import React from "react";
import classNames from "classnames";


interface ButtonItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

export function ButtonItem(props: ButtonItemProps) {
    return (
        <Button {...props} variant={""} onClick={props.onClick}
                className={classNames(props.className, 'm-1 tabs-btn' +  props.active ? 'primary-color' : 'secondary-color')}>
            {props.children}</Button>
    );
}
