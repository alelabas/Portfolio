/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

export const getProducts = async () => {
	try {
		const data = await axios.get<ProductsResponse>(
			"https://dummyjson.com/products"
		)
		return data.data.products
	} catch (err: any) {
		if (axios.isAxiosError(err)) {
			throw new Error(err.response?.data)
		} else throw new Error("External error")
	}
}

export const getProductsByName = async (query: string) => {
	throw new Error("Not implemented")
}
