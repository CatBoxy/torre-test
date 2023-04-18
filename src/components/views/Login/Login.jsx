import React from 'react';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.styles.css';
import * as Yup from 'yup';
import { swal } from '../../../utils/swal/Swal';


export default function Login() {

    const navigate = useNavigate();

    const initialValues = {
        userName: ''
    }

    const required = "* Required field"

    const validationSchema = () =>
        Yup.object().shape({
            userName: Yup.string()
                .min(4, "Minimum required characters: 4")
                .required(required),
        })

    const onSubmit = () => {

        const { userName } = values;

        async function fetchData() {
            try {
                const response = await axios.get(`https://torre-back-ke73uobv6q-uc.a.run.app/api/user/${userName}`);
                if (response.status === 200) {
                    console.log(response)
                    navigate(`/user/${userName}`, { replace: true });
                    return
                }
            } catch (error) {
                swal('login');
            }
        }
        fetchData();
    }

    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = formik;

    return (
        <>
            <div className='auth'>
                <form onSubmit={handleSubmit}>
                    <h1>Please enter a Torre username</h1>
                    <div id='inputField'>
                        <input
                            name='userName'
                            type="text"
                            placeholder='Username'
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.userName && touched.userName ? "error" : ''}
                        />
                        {errors.userName && touched.userName && <div className='error-message'>{errors.userName}</div>}
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
}