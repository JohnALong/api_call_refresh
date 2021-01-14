import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Tnf1jTJIlsZLGRQDokK_39sBlJy-QNLxrtVT_gkIyao'
    }
})