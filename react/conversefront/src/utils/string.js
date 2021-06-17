export const convertToPricingComma = (str) => {
  if (str == null) return false;
  if (typeof str !== "string") {
    const toStr = str.toString();
    return (toStr && toStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",")) || "";
  }
  return (str && str.replace(/\B(?=(\d{3})+(?!\d))/g, ",")) || "";
};
