export const CurrencyFormatter = (amount) => { return `${amount.toFixed(2)}` };
export const CartTotal = (cart) => {
    let amountTotal = 0;
    cart.map((item) => {
        const lineTotal = item.Price * item.quantity;
        return amountTotal = amountTotal + lineTotal;
    });

    return amountTotal;
};