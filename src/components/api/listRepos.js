import axios from 'axios';

export const listRepos = async () => {
    try {
      const response = await axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos');
      console.log('response: ',response);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }