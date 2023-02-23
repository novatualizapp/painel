import axios from '../index'
import { maskBr }  from 'js-brasil'


const carregarUsuarios = () => new Promise(async (resolve, reject) => {
    try{
        const response = await axios.get('/usuarios')
        resolve(response.data.map(usuario => ({
            ...usuario,
            id: usuario._id,
            documento: maskBr.cpf(usuario.documento),
        })))
    }catch(err){
        reject(err)
    }
})

const deletarUsuarios = (listaDeUsuarios) => new Promise(async (resolve, reject) => {
    try{
        const response = await axios.delete('/usuarios', {
            
        })
        alert(response.data)
        resolve([])
    }catch(err){
        console.log(err)
    }
})


const LoginAutenticar = (email, senha) => new Promise(async (resolve, reject) => {
    try{
        const response = await axios.post('/usuarios/login', {email, senha})
        resolve(response.data.token)
            
    }catch(err){
        reject(err)
    }
})



export default {
    carregarUsuarios, 
    LoginAutenticar,
    deletarUsuarios
}