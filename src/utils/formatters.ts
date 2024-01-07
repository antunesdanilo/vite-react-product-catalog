export interface FormatCurrencyInput {
  value: number | string | undefined;
  locale?: string;
  currency?: string;
  showFraction?: boolean;
}

export function formatCurrency({
  value,
  locale = 'pt-br',
  currency = 'BRL',
  showFraction = true,
}: FormatCurrencyInput) {
  if (!value) value = 0;

  if (typeof value === 'string') {
    value = parseFloat(value);
  }

  const formatted = value.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });

  if (showFraction) {
    return formatted;
  }

  return formatted.split(',')[0];
}
