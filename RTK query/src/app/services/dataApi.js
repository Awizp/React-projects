import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        // get all food items
        getAllProducts: builder.query({
            query: () => "/products"
        }),

        // get specfic product
        getProductById: builder.query({
            query: (id) => `/product/${id}`
        }),

        // Add a new product
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newProduct
            })
        }),

        // Update a product
        updateProductData: builder.mutation({
            query: ({ id, updateProduct }) => ({
                url: `products/${id}`,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: updateProduct,
            })
        }),

        //delete a existing product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            })
        })
    }),
})

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useAddNewProductMutation,
    useUpdateProductDataMutation,
    useDeleteProductMutation
} = productsApi