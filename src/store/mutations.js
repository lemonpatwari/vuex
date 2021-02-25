export const SET_DATA = (state, products) => {
    state.products = products
}

export const ADD_TO_CARD = (state, {product, quantity}) => {
    let productInCart = state.cart.find(item => {

        console.log(item.product.course_id,product.course_id);
       return item.product.course_id === product.course_id;
    });

    if (productInCart){
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        product,
        quantity,
    })
}