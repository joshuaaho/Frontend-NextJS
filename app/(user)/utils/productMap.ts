export const createProductMap = (products: any[]) => {
  const productMap: any = {};
  for (const product of products) {
    productMap[product.id] = product;
    console.log(product);
  }
  return productMap;
};
