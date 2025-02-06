import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllProduct = () => {
    const {data :allProduct = [], isLoading } = useQuery({
        queryKey: 'allProducts',
        queryFn: async () => {
            const response = await axios.get('http://localhost:5000/products');
            return response.data
        }
    })
    return [allProduct, isLoading]
};

export default useAllProduct;