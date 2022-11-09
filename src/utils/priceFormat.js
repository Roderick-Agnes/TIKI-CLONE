export const formatPrice = (price) => {
  const numberFormat = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "vnd",
  });
  const parts = numberFormat.formatToParts(price);

  const partValues = parts.map((p, idx) => {
    return p.value;
  });
  return (
    partValues.reduce((pre, cur, idx) => {
      if (idx !== 0) return pre + cur;
      return "";
    }, "") + " ₫"
  );
};
