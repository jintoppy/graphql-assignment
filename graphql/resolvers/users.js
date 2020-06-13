const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

exports.registerUser = async (user) => {
    try {
        console.log(user);
        const {data} = await instance.post('/users',{
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address
        })
        return data;
    } catch (e) {
        console.error('---error registering users--',e);
      throw e;
    }
}

exports.login = async (user) => {
    try {
     const {data} = await instance.post('/login', {
         email: user.email,
         password: user.password
     })

     return data;
    } catch (e) {
    console.error('---error login users--',e);
      throw e;
    }
}

exports.fetchUsers = async () => {
try {
    const {data} = await instance.get('/users');
    return data;
} catch (e) {
console.error('---error fetching users--',e);
      throw e;
}
}