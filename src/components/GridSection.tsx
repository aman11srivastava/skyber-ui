import React from "react";
import {Order_Type, OrderDetails} from "../utils/utils";
import GridItem from "./GridItem";
import {Container, Row} from "react-bootstrap";

export const GridSection = () => {
    return (
        <Container>
            <Row>
                {
                    OrderDetails.map((order: Order_Type) => (
                        <GridItem orderDetails={order}/>
                    ))
                }
            </Row>
        </Container>
    )
}

export default GridSection