export function calculateDiscount(cartTotal, user) {
  if (cartTotal <= 0) return 0;

  let discount = 0;

  // VIP users get 20% discount
  if (user?.isVIP) {
    discount += 0.2;
  }

  // New users get 10% discount
  if (user?.isNew) {
    discount += 0.1;
  }

  // If cartTotal > 1000, add another 5% discount
  if (cartTotal > 1000) {
    discount += 0.05;
  }

  // Max discount is capped at 30%
  if (discount > 0.3) {
    discount = 0.3;
  }

  return cartTotal * (1 - discount);
}
