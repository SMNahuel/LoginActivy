import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from 'axios'
import Logo from './assets/LOGOHORIZONTALNEGATIVO1.png'
import Google from './assets/Google.png'
import Face from './assets/Vector.png'
import Img from './assets/Img.png'
import By from './assets/logoSA.png'
import style from './Login.module.css';

import { Container, Col, Row, Modal, Button } from "react-bootstrap";

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    /* Schmea a validar por YUP */
    const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(6).max(15).required(),
    });


    const {
        register,/* Validador de inputs */
        handleSubmit,/* Funciones para capturar el submit del form */
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const getLogin = (data) => {
        //Axios es el encargado de hacer petición, especificamos la ruta y mandamos los valores del estado
        axios.post("https://api-flordeemprendedora.start-7.com/api/auth/login/", data)
            .then((data) => {
                if (data.status === 200) {
                    localStorage.setItem("token", data.data.token)
                    setShow(true)
                }
            })
            .catch((error) => {
                alert("Verifique sus credenciales")
            })
    };

    const submitForm = (data) => {
        getLogin(data);
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} s={12} md={{ span: 7, offset: 0 }}>
                        <div className={style.Left}>
                            <h2 className={style.Title}>Bem-vindo de volta!</h2>
                            <p className={style.Subtitle}>Estamos felizes que esteja de volta para retomar seus projetos no Projetolist.</p>
                            <form onSubmit={handleSubmit(submitForm)}>
                                <input {...register("username", { required: true })} type="text" className={style.InputEmail} placeholder="E-mail" />
                                <ErrorMessage
                                    errors={errors}
                                    name="username"
                                    render={({ message }) => (
                                        <p style={{ color: "#FF2626" }}>Verificar este campo</p>
                                    )}
                                />
                                <input {...register("password", { required: true })} type="password" className={style.InputPassword} placeholder="Senha" />
                                <ErrorMessage
                                    errors={errors}
                                    name="password"
                                    render={({ message }) => (
                                        <p style={{ color: "#FF2626" }}>Verificar este campo</p>
                                    )}
                                />
                                <p className={style.Forget}>Esqueceu sua senha?</p>
                                <button className={style.Button}>Entrar</button>
                            </form>
                            <p className={style.Other}>OU ENTRE COM</p>
                            <div className={style.ContainerBtn}>
                                <button className={style.BtnFace}><img src={Face} alt="Logopng" /></button>
                                <button className={style.BtnGoogle}><img src={Google} alt="Logopng" /></button>
                            </div>
                            <p className={style.Link}>Não tem uma conta? <a href="/">Cadastre-se</a></p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 0 }} s={0} lg={false}>
                        <div className={style.Rigth} >
                            <Col>
                                <div className={style.Row}>
                                    <img src={Logo} alt="Logo" />
                                    <p className={style.Help}>Ajuda</p>
                                </div>
                                <img className={style.Img} src={Img} alt="ImageIlustrator" />
                                <div className={style.RowDown}>
                                    <p className={style.About}>© 2021, Projetolist</p>
                                    <p className={style.About}>UI/UX Design and Front-end by:<img src={By} className={style.ImgBy} alt="Author"/></p>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>You're loading  </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClose()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Login;