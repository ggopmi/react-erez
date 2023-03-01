import axios from "axios";

export default class PostService {
    
    config = {
        headers: {
            // "Referer": "https://www.scrapingbee.com/",
            // "Referrer-Policy": "strict-origin-when-cross-origin"
            // 'access-control-request-method': 'GET',
            'Access-Control-Allow-Methods':'*',
            'Access-Control-Allow-Origin' : '*',
            // 'Origin': 'http://localhost:3000',
            // 'Referer': 'http://localhost:3000/',
            // 'sec-fetch-mode': 'cors',
            // 'sec-fetch-site': 'cross-site'    
        }
    }

    static async logError(error) {
        const res = error.response
        if(res) {
            console.log("Data ", res.data);
            console.log("Status ", res.status);
            console.log("Headers ", res.headers);
        } else if (error.request) {
            console.log("called", error.request);
        } else {
            console.log("Error", error.message);
        }
        // return res.status(401).send(error.message);
        return error.message;
    }

    static async getAll(limit = 10, page = 1) {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        // const response = await axios.get('localhost:8080/api/person/findAllLimit/30' 
        // const response = await fetch('127.0.0.1:8080/api/person/findAllLimit/30'

        // const response = await axios.get('/api/person/findAllLimit', {
        //     // ,this.config
        //     // {
        //     // headers: {
        //     //     'Origin': 'http://localhost:3000'
        //     // }
        //         params: {
        //             _limit: limit,
        //             _page: page
        //         }
        //     }
        // )

        let response = null
        try {
            // response = await axios.get('/api/person/findAllLimit/' +
            // limit + '/page/' + page)
            // response = await axios.get('/api/person/findAllLimit/limit?' +
            response = await axios.get('/api/person/limit?' +
            'limit='+limit + '&page='+page)
            // const response = await axios.get('/api/person/limit/' +
            //     limit + '/page/' + page)

            // console.log('gggggggggggggggggggggggggggggggg');
            // console.log(response);
            // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        } 
        catch(error) {
            // this.logError(error);
            console.log("Error", error.message);
        };
        return response;
    }

    static async getById(id) {
        let response = null
        try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        //   response = await axios.get('http://localhost:8080/api/person/' + id)
          response = await axios.get('http://localhost:8080/api/person/code?code=' + id)
        } catch(error){
            // this.logError(error)
            console.log("Error", error.message);
        }
        return response;
    }

    static async getCommentsByPostId(id) {
        let response = null
        try {
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          response = await axios.get(`http://localhost:8080/api/person/${id}/comments`)
        } catch(error){
            // this.logError(error)
            console.log("Error", error.message);
        }
        return response;
    }

}
