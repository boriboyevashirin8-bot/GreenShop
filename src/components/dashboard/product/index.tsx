import type { DataType, ProductType } from "../../../@types";
import { useQueryHendler } from "../../../hooks/useQuery";
import Card from "./card";
import ProductHeader from "./product-header";
import useSearchParam from "../../../generic/searchParams";

const Product = () => {
  const { paramValue } = useSearchParam();
  const category = paramValue("category") || "house-plants";

  const { data, isLoading, isError }: DataType<ProductType[]> = useQueryHendler(
    {
      url: `flower/category/${category}`,
      pathname: `flower-product-${category}`,
    }
  );
  console.log(category);
  return (
    <section className="w-full">
      <ProductHeader />

      <div className="grid grid-cols-3 gap-4 mt-5">
        {isLoading
          ? "loading"
          : data?.map((value) => <Card {...value} key={value._id} />)}
      </div>
    </section>
  );
};

export default Product;