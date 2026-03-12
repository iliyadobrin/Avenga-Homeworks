// API Service - Handles all fetch calls for JSON data

const BASE_PATH = './data';

/**
 * Fetch profile data from JSON file
 * @returns {Promise<Object>} Profile data object
 */
export async function fetchProfile() {
  try {
    const response = await fetch(`${BASE_PATH}/profile.json`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}

/**
 * Fetch projects data from JSON file
 * @returns {Promise<Array>} Array of project objects
 */
export async function fetchProjects() {
  try {
    const response = await fetch(`${BASE_PATH}/projects.json`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
