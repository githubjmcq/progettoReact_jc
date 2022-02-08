import axios from 'axios';

export const listRepos = async () => {
    try {
      const response = await axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }