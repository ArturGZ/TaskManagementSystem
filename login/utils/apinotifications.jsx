import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/apinotif';

export async function get_task_list() {
    try {
        const response = await axios.get(`${API_BASE_URL}/notif`);
        return response.data
    } catch(error){
        console.error('Error fetching notifications list', error)
        throw error;
    }
}

/*export async function addBook(new_book) {
    try {
        const response = await axios.post(`${API_BASE_URL}/books`, new_book);
        return response.data;
    } catch(error) {
        console.error('Error adding book:', error);
        throw error;
    }
}*/