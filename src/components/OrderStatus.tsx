import React, {useState} from "react";
import {TABS, Tabs_Type} from "../utils/utils";
import {ButtonItem} from "./ButtonItem";
import {Container} from "react-bootstrap";

export const OrderStatus = () => {
    const [orderStatusValue, setOrderStatusValue] = useState<string | null>('All orders')
    return (
        <Container>
            <div className={"mx-3 my-5"}  style={{display:'flex',flexDirection:'row', flexWrap: 'wrap'}}>
                {
                    TABS.map((tab: Tabs_Type) => (
                        <ButtonItem className={"mx-4 tabs-custom-btn"} key={tab.id} onClick={() => setOrderStatusValue(tab.name)}
                                    active={tab.id === tab.activeId}
                        >
                            {tab.displayName}
                        </ButtonItem>
                            ))
                }
            </div>
        </Container>
    )
}

export default OrderStatus