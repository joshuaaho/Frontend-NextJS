export const formatPrice = (price: number, currency: string): string => {
  return `${Math.abs(price)} ${currency}`;
};
