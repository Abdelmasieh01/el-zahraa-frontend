import  axios  from "axios";


const API = process.env.NEXT_PUBLIC_BACKEND_API;

async function fetchItem() {
  try {
    const response = await axios.get(`${API}products/`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function fetchCategory() {
  try {
    const response = await axios.get(`${API}categories/`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

async function fetchProfile() {
    try {
      const response = await axios.get(`${API}`);
      console.log('Profile data:', response?.data?.profile);
      return response?.data?.profile;
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }
  
export { fetchItem, fetchCategory,fetchProfile };