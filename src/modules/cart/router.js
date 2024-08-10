import Cart from "./page";

export const CartRouter = {
    path:'/cart',
    children: {
        index : true,
        element:<Cart></Cart>
    },
}
