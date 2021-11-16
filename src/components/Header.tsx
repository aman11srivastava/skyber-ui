import React from "react";
import fruits from '../assets/fruits.jpg';
import {Button, Container} from "react-bootstrap";

export const Header = () => {
    return (
        <Container>
            <div className={"d-flex align-items-center justify-content-between cust-class"}>
                <div className={"d-flex "}>
                    <img src={fruits} className={"order-card"} alt={"Fruits"} width={"73"} height={"63"}/>
                    <div className={"pl-3"}>
                        <h3 className={"mb-0"}>Yadav Fruits</h3>
                        <div className={"text-green-light"}>Gurgaon (E)</div>
                    </div>
                </div>
                <div className={"d-flex btn-cust ml-4"}>
                    <div className={'ico-start d-flex align-items-center justify-content-center'}>
                        <div className={"mx-4"}><Button variant={""} className={"accept-order-btn"}>Accepting orders</Button></div>
                        <div><i className="fa fa-phone" aria-hidden="true"/></div>
                    </div>
                </div>
                <div className={'ico-end d-flex align-items-center'}>
                    <div className={"mx-4"}><i className="fa fa-search" aria-hidden="true"/></div>
                    <div className={"mx-4"}><i className="fa fa-home" aria-hidden="true"/></div>
                    <div className={"mx-4"}><i className="fa fa-bars" aria-hidden="true"/></div>
                    <div className={"mx-4"}><i className="fa fa-user" aria-hidden="true"/></div>
                </div>

            </div>
        </Container>

    )
}

export default Header