import { useParams } from "react-router-dom";

const Reviews = () => {
    const { productId, reviewId } = useParams();

    return (
        <div>
            Reviews Page with ID {productId} with Review ID {reviewId}
        </div>
    );
};

export default Reviews;
