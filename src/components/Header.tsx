import React from "react";
import fruits from '../assets/fruits.jpg';
import {Button, Container} from "react-bootstrap";

export const Header = () => {
    return (
        <Container>
            <div className={"d-flex"}>
                <div className={"d-flex"}>
                    <img src={fruits} className={"order-card"} alt={"Fruits"} width={"73"} height={"63"}/>
                    <div className={"pl-3"}>
                        <h3 className={"mb-0"}>Yadav Fruits</h3>
                        <div className={"text-green-light"}>Gurgaon (E)</div>
                    </div>
                </div>
                <div className={"d-flex"}>
                    <Button className={"view-order-btn"}>Accepting orders</Button>
                    <i className="fas fa-phone-alt"/>
                </div>
            </div>
        </Container>

    )
}

export default Header