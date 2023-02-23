import React from 'react';
import { Formik, Field, Form } from 'formik'
import Menu from '../../Components/Header/Menu'
import { toast } from 'react-toastify';
import Users from '../../Services/Users';
import jwt_decode from 'jwt-decode'
import './login.css'

const SignIn = (props) => {

    const onSubmit = ({email, senha}) => {
        Users.LoginAutenticar(email, senha)
            .then(tokenJWT => {
                //decode
                const usuarioLogado = jwt_decode(tokenJWT)
                if(usuarioLogado.tipo === 'admin'){
                    toast.success('Login Efetuado com Sucesso!')
                    localStorage.setItem('JWT', tokenJWT)
                    props.history.push('/dashboard')
                }else{
                    toast.error('Você não é administrador.')                    
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Login incorreto!')
            })
    }

    return (
        <div>
            <Menu />
            <h1>Login</h1>

            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                    senha: '',
                }}
                render={({ values, handleSubmit }) => (
                    <Form>
                        <div>
                            
                            <Field name="email" type="email" placeholder="E-mail" required />
                        </div>
                        <div>
                            
                            <Field name="senha" type="password" placeholder="Senha" required/>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>

                    </Form>
                )}
            />

        </div>
    );
};

export default SignIn;