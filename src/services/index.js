import axios from 'axios';
import { fileUploadURL } from '../constants/index';

const fileuploadAPI = axios.create({
    fileUploadURL : fileUploadURL
});

export default fileuploadAPI;