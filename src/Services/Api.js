import axios from 'axios';
const Api = (url1, data, method) => {
    switch (method) {
        case 'post':
            return axios
                .post(url1, data)
                .then(response => {
                    return Promise.resolve(response);
                })
                .catch(error => {
                    // console.log('Error Occured While Login', error);
                });

        case 'get':
            return axios
                .get(url1)
                .then(response => {
                    return Promise.resolve(response);
                })
                .catch(err => {
                    // console.log(('Error Occured while getting data', err));
                    return Promise.reject(err);
                });

        case 'patch':
            return axios
                .patch(url1 + data._id, data)
                .then(response => {
                    return Promise.resolve(response);
                })
                .catch(err => {
                    return Promise.reject(err);
                });
    }
};
export default Api;
