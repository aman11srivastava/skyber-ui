import dosa from '../assets/dosa.jpg'

export enum OrderStatus {
    ALL = "ALL",
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DELIVERED = "DELIVERED",
    REJECTED = "REJECTED",
}

export const TABS: Tabs_Type[] = [
    {
        id: 1,
        name: OrderStatus.ALL,
        displayName: 'All orders',
        activeId: 1
    },
    {
        id: 2,
        name: OrderStatus.PENDING,
        displayName: 'Pending',
        activeId: 2
    },
    {
        id: 3,
        name: OrderStatus.ACCEPTED,
        displayName: 'Accepted',
        activeId: 3
    },
    {
        id: 4,
        name: OrderStatus.DELIVERED,
        displayName: 'Delivered',
        activeId: 4
    },
    {
        id: 5,
        name: OrderStatus.REJECTED,
        displayName: 'Rejected',
        activeId: 5
    },
]

export type Tabs_Type = {
    name: string,
    displayName: string
    id: number,
    activeId: number
}

export const OrderDetails: Order_Type[] = [
    {
        id: 1,
        item: 'Shiva Dosa',
        orderContent: "Masala Dosa x 2, Sada Dosa x 1, Masala Dosa x 2, Cheese Butter Sada x 1, Maisur Masala Dosa x 1",
        orderTime: '08:00 PM',
        orderDate: '11/04/21',
        orderStatus: OrderStatus.DELIVERED,
        price: 210,
        orderImage: dosa
    },
    {
        id: 2,
        item: 'Shiva Dosa',
        orderContent: "Masala Dosa x 2, Sada Dosa x 1, Masala Dosa x 2, Cheese Butter Sada x 1, Maisur Masala Dosa x 1",
        orderTime: '08:00 PM',
        orderDate: '11/04/21',
        orderStatus: OrderStatus.DELIVERED,
        price: 210,
        orderImage: dosa
    },
    {
        id: 3,
        item: 'Shiva Dosa',
        orderContent: "Masala Dosa x 2, Sada Dosa x 1, Masala Dosa x 2, Cheese Butter Sada x 1, Maisur Masala Dosa x 1",
        orderTime: '08:00 PM',
        orderDate: '11/04/21',
        orderStatus: OrderStatus.DELIVERED,
        price: 210,
        orderImage: dosa
    },
    {
        id: 4,
        item: 'Shiva Dosa',
        orderContent: "Masala Dosa x 2, Sada Dosa x 1, Masala Dosa x 2, Cheese Butter Sada x 1, Maisur Masala Dosa x 1",
        orderTime: '08:00 PM',
        orderDate: '11/04/21',
        orderStatus: OrderStatus.DELIVERED,
        price: 210,
        orderImage: dosa
    },
    {
        id: 5,
        item: 'Shiva Dosa',
        orderContent: "Masala Dosa x 2, Sada Dosa x 1, Masala Dosa x 2, Cheese Butter Sada x 1, Maisur Masala Dosa x 1",
        orderTime: '08:00 PM',
        orderDate: '11/04/21',
        orderStatus: OrderStatus.DELIVERED,
        price: 210,
        orderImage: dosa
    },
    {
        id: 6,
        item: 'Shiva Dosa',
        orderContent: "Masala Dosa x 2, Sada Dosa x 1, Masala Dosa x 2, Cheese Butter Sada x 1, Maisur Masala Dosa x 1",
        orderTime: '08:00 PM',
        orderDate: '11/04/21',
        orderStatus: OrderStatus.DELIVERED,
        price: 210,
        orderImage: dosa
    }]

export type Order_Type = {
    id: number,
    item: string,
    price: number,
    orderContent: string,
    orderStatus: string,
    orderTime: string
    orderDate: string
    orderImage: string
}
