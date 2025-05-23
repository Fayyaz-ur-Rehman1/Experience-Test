import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h2>Login</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    {...register('name', {
                        required: 'Name is required',
                        minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters',
                        },
                    })}
                    placeholder="Enter your name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address',
                        },
                    })}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;