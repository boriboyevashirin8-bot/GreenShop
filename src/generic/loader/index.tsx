import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <Skeleton.Input active className="!w-full mb-2" key={idx} />
    ));
  };
  return { category_loader };
};

export default useLoader;