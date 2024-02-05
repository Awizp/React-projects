import { useGetProductByIdQuery } from "../app/services/dataApi"
import "../App.css"

const GetProductById = ({ productId }) => {

    const { data, isLoading, isError } = useGetProductByIdQuery(productId)

    if (isError) {
        return (
            <h1>We are getting error!</h1>
        )
    }

    if (isLoading) {
        return (
            <h1> Loading ...</h1>
        )
    }

    return (
        <div className="products-container">
            <div key={productId} className="card-container">
                <h3>{data.title}</h3>
                <div className="img-container">
                    <img src={data.images[0]} alt="product-img" />
                </div>
                <div>
                    {data.brand}
                </div>
                {data.description}
            </div>
        </div>
    )
}

export default GetProductById
