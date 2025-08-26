export const formatLabel = (label: string): string => {
  if (!label) return "";

  return label
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
