import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../shared/layout.component';
import  { useAuth } from '../../context/user-context'
import '../Sign-up/sign-up.styles.scss';
import { Alert } from 'react-bootstrap';

const SignIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handelSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/shop");
        } catch (error) {
            setError('Failed to sign in');
        }

        setLoading(false);

    }

    return (
        <Layout>
            <h1>Sign In</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-container">
                <form onSubmit={handelSubmit}>
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email'
                            ref={emailRef}
                            className='void-input'  
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            ref={passwordRef}
                            placeholder='Password'
                            className='void-input' 
                        />
                    </div>
                    <div className='submit-btn'>
                        <button disabled={loading} type="submit" className='button is-black void-btn submit'>
                            Sign In
                        </button>
                    </div>
                    <div className="w-100 text-center mt-2">
                            Dont have an account? <Link to="/sign-up">Sign Up</Link>
                    </div>
                </form>
                
                            
            </div>
        </Layout>
    )
}

export default SignIn
