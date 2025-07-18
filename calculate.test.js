import { calculateDiscount } from "./calculate";

// ผู้ใช้ใหม่ลด 10%
test("new user discount 10% => 900", () => {
  expect(calculateDiscount(1000, { isVIP: false, isNew: true })).toBe(900);
});

// VIP ลด 20%
test("VIP discount 20% => 800", () => {
  expect(calculateDiscount(1000, { isVIP: true, isNew: false })).toBe(800);
});

// ผู้ใช้ทั่วไปไม่ลด
test("no vip, no new user discount 0% => 1000", () => {
  expect(calculateDiscount(1000, { isVIP: false, isNew: false })).toBe(1000);
});

// กรณียอดเป็น 0 หรือติดลบ
test("total price 0 => 0", () => {
  expect(calculateDiscount(0, { isVIP: false, isNew: false })).toBe(0);
});

// ยอดเกิน 1,000 ลดเพิ่มอีก 5%
test("VIP spend 1200 discount 25%", () => {
  expect(calculateDiscount(1200, { isVIP: true, isNew: false })).toBe(900);
});

test("new user spend 1200 discount 15%", () => {
  expect(calculateDiscount(1200, { isVIP: false, isNew: true })).toBe(1020);
});

test("normal user spend 1200 discount 5%", () => {
  expect(calculateDiscount(1200, { isVIP: false, isNew: false })).toBe(1140);
});

test("VIP และผู้ใช้ใหม่ ลดรวมไม่เกิน 30%", () => {
  const user = { isVIP: true, isNew: true };
  const price = 1000;
  const expectedPrice = 1000 * (1 - 0.3); // ลดสูงสุด 30%
  expect(calculateDiscount(price, user)).toBe(expectedPrice);
});
