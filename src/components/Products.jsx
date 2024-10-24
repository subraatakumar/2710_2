import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import fetchProducts from '../redux/thunk/fetchProducts';
import { fetchProducts } from '../redux/slices/productsSlice';

function Products() {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector(state => state.productsReducer)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <div> <h1>Products</h1>
            <ul>
                {
                    products.map(product => <li key={product.id}>{product.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Products