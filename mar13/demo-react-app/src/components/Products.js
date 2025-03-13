import { useParams, useSearchParams } from "react-router-dom";

const Products = () => {
    const { productId } = useParams();

    return <div>Products Page with ID {productId}</div>;
};

export default Products;
