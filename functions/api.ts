// api.js
import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/web';

const getAllProducts = async () => {
    console.log('Inside getAllProducts');
    try {
        const response = await axios.get(`${API_URL}/product/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export default getAllProducts;
