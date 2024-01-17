import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';

const httpService: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: 30000,
});

export default httpService;
