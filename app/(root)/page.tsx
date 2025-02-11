import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

const HomePage = async () => {
  const products = await getLatestProducts();
  return <ProductList data={products} title="Newest Arrivals" />;
};

export default HomePage;
