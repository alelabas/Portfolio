/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

export const getProducts = async (query?: string) => {
	if (query == null) {
		try {
			const data = await axios.get<Product[]>(
				"https://dummyjson.com/products"
			)
			return data
		} catch (err: any) {
			if (axios.isAxiosError(err)) {
				throw new Error(err.response?.data)
			} else throw new Error("External error")
		}
	} else {
		try {
			const data = await axios.get<Product[]>(
				`https://dummyjson.com/products/search?q=${query}`
			)
			return data
		} catch (err: any) {
			if (axios.isAxiosError(err)) {
				throw new Error(err.response?.data)
			} else throw new Error("External error")
		}
	}
}
