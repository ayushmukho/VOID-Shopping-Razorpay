import React, { useState, useRef } from 'react';
import Layout from '../shared/layout.component';
import { Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/user-context';
import './sign-up.styles.scss';


const SignUp = () => {



    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handelSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/shop");
        } catch (error) {
            setError('Failed to creat a account');
        }

        setLoading(false);

    }

    return (
        <Layout>
            <div className="sign-up">
                <h1>Sign Up</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="form-container">
                    <form onSubmit={handelSubmit}>
                        <div>
                            <input 
                                type="text"
                                name="firstname"
                                placeholder='First Name'
                                className='void-input'
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="email"
                                name="email"
                                placeholder='Email'
                                ref={emailRef}
                                className='void-input'
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="password"
                                name="password"
                                ref={passwordRef}
                                placeholder='Password'
                                className='void-input'
                                required
                            />
                        </div>
                        <div className='submit-btn'>
                            <button type="submit" disabled={loading}  className='button is-black void-btn submit'>
                                Sign Up
                            </button>
                            
                        </div>
                        
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/sign-in">Log In</Link>
                        </div>
                        
                    </form>
                </div>
                
            </div>

            
        </Layout>
    )
}

export default SignUp;
