export const sortLabels = (labels: string[]) => {
  labels.sort();

  // Check if "popular" exists in the original array
  const hasPopular = labels.includes("popular");

  // Filter out "popular" items
  const filteredData = labels.filter((item) => item !== "popular");

  // Only add "popular" to the front if it existed in the original array
  if (hasPopular) {
    filteredData.unshift("popular");
  }

  return filteredData;
};
