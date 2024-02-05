import { useDeleteProductMutation } from "../app/services/dataApi"

const DeleteProduct = ({ productId }) => {

    const [deleteProduct, { data, isError, isLoading }] = useDeleteProductMutation()

    if (isError) {
        return (
            <h1>It's showing Error!</h1>
        )
    }

    if (isLoading) {
        return (
            <h1>It's Loading...</h1>
        )
    }

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(productId)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={handleDeleteProduct}>Delete product</button>

            {data && <h1>Product {data?.title} successfully deleted</h1>}
        </div>
    )
}

export default DeleteProduct
