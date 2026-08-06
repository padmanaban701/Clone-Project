export const formatCurrency = (amount, currency = 'INR', locale = 'en-IN') => {
  let val = amount;
  if (val && typeof val === 'object') {
    val = val.current ?? val.amount ?? val.price ?? val.value ?? 0;
  }
  const numericVal = Number(val);
  const safeVal = Number.isNaN(numericVal) ? 0 : numericVal;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(safeVal);
};
