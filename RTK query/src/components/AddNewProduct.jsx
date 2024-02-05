import React from 'react'

import { useAddNewProductMutation } from '../app/services/dataApi'

const AddNewProduct = () => {

    const [addNewProduct, { data, isLoading, isError }] = useAddNewProductMutation()

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

    const handleAddProduct = async () => {
        try {
            const newProduct = {
                id: 101,
                title: "One Piece",
                description: "This is the best anime by Oda!"
            }

            await addNewProduct(newProduct)
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <button
                onClick={handleAddProduct}
                disabled={isLoading}
            >Add product</button>

            <h1>{data?.title}</h1>
            <h3>{data?.description}</h3>
        </div>
    )
}

export default AddNewProduct
