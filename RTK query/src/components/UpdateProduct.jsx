import React from 'react'
import { useUpdateProductDataMutation } from '../app/services/dataApi'

const UpdateProduct = ({ productId }) => {

    const [updateProductData, { data, isError, isLoading }] = useUpdateProductDataMutation()

    console.log(data)

    if (isError) {
        return (
            <h1>It showing Error</h1>
        )
    }

    if (isLoading) {
        return (
            <h1>It's Loading...</h1>
        )
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProduct = {
                title: "Mango",
                description: "one of the world best mobile Mango"
            }

            await updateProductData({
                id: productId,
                updateProduct: updatedProduct
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <button onClick={handleUpdateProduct} disabled={isLoading} >Update Product</button>

            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>
        </div>
    )
}

export default UpdateProduct
