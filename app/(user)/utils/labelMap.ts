export const createLabelMap = (products: any[]) => {
  const labels: any = {};
  for (const product of products) {
    for (const label of product.labels) {
      labels[label] = [...(labels[label] || []), product.id];
    }
  }
  return labels;
};
