const CART_KEY = 'cart';

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (item) => {
  const cart = getCart();
  const index = cart.findIndex(i => i.id === item.id);
  if (index > -1) {
    cart[index].quantity += item.quantity || 1;
  } else {
    cart.push({ ...item, quantity: item.quantity, price: item.price || 1 });
  }
  saveCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
