import React from "react";
import {Order_Type} from "../utils/utils";
import {Button, Col} from "react-bootstrap";

export interface GridItemProps {
    orderDetails: Order_Type
}

export const GridItem = ({orderDetails}: GridItemProps) => {
    const {item, orderStatus, orderDate, orderTime, orderContent, price, orderImage} = orderDetails;
    return (
        <Col xl={4} md={6} lg={6} sm={12}>
            <div className={"border border-4 p-2 order-card my-3"}>
                <div className={"d-flex"}>
                    <img className={"order-img"} src={orderImage} alt={item} height={"63"} width={"63"}/>
                    <div className={"pl-3"}>
                        <div className={"text-gray font-size-12px"}>
                            <span>{orderDate} {orderTime}</span>
                        </div>
                        <div>
                            <h4 className={"font-weight-bold mb-0 item"}>{item}</h4>
                            <span className={"font-size-12px"}>{orderStatus}</span>
                        </div>
                    </div>
                </div>
                <div className={"text-light-gray order-description pt-1"}>{orderContent}</div>
                <div className={"d-flex justify-content-between"}>
                    <div className={"text-green font-size-23px font-weight-bold"}>
                        <i className="fa fa-inr"/> {price}/-
                    </div>
                    <div>
                        <Button variant={""} className={"view-order-btn"}>View Order</Button>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default GridItem