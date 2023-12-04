import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/apitasklist';

export async function getTaskLists() {
    try {
        const response = await axios.get(`${API_BASE_URL}/task_lists`);
        return response.data
    } catch(error){
        console.error('Error fetching task lists', error)
        throw error;
    }
}

export async function getTaskListsWithFilteredTasks(status) {
    try {
        const response = await axios.get(`${API_BASE_URL}/task_lists/tasks/${status}`);
        return response.data
    } catch(error){
        console.error('Error fetching filtered task lists', error)
        throw error;
    }
}

export async function updateTaskStatus(task_list_id,task_id) {
    try {
        const response = await axios.put(`${API_BASE_URL}/task_lists/tasks/task_list=${task_list_id}/task=${task_id}`);
        return response.data
    } catch(error){
        console.error('Error updating task status', error)
        throw error;
    }
}

export async function deleteTaskList(task_list_id) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/task_lists/${task_list_id}`);
        return response.data
    } catch(error){
        console.error('Error delete task status', error)
        throw error;
    }
}