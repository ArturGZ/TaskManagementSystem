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

export async function updateTaskStatus(taskListId,taskId) {
    try {
        const response = await axios.put(`${API_BASE_URL}/task_lists/tasks/task_list=${taskListId}/task=${taskId}`);
        return response.data
    } catch(error){
        console.error('Error updating task status', error)
        throw error;
    }
}

export async function deleteTaskList(taskListId) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/task_lists/${taskListId}`);
        return response.data
    } catch(error){
        console.error('Error delete task status', error)
        throw error;
    }
}