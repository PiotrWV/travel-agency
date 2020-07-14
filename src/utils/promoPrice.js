import { parseOptionPrice } from './parseOptionPrice';
import { formatPrice } from './formatPrice';

export const promoPrice = (price, percent) => {
  if (!price || price < 0) return null;
  if (!percent || typeof percent !== 'number' || percent < 0) return null;
  const numberPrice = parseOptionPrice(price);
  const newPrice = numberPrice.value - ((numberPrice.value*percent) / 100);
  return formatPrice(newPrice);
};