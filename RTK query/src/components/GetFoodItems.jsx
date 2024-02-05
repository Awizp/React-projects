import { useGetAllProductsQuery } from "../app/services/dataApi"
import "../App.css"

const getFoodItems = () => {

    const { data, isLoading, isError } = useGetAllProductsQuery()
    console.log(data)

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
            {data?.products.map((product) => (
                <div key={product.id} className="card-container">
                    <h3>{product.title}</h3>
                    <div className="img-container">
                        <img src={product.images[0]} alt="product-img" />
                    </div>
                    <div>
                        {product.brand}
                    </div>
                    {product.description}
                </div>
            ))}
        </div>
    )
}

export default getFoodItems
