
// import React, { useState } from 'react';
// import './AuthForms.css'; 
// import bgVideo from '../images/video11.mp4';

// const AuthForms = () => {
//     const [signUpData, setSignUpData] = useState({
//         username: '',
//         password: '',
//         repeatPassword: '',
//         email: ''
//     });
//     const [signInData, setSignInData] = useState({
//         username: '',
//         password: ''
//     });
//     const [messages, setMessages] = useState({
//         register: '',
//         login: ''
//     });

//     const handleSignUpChange = (e) => {
//         const { name, value } = e.target;
//         setSignUpData(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSignInChange = (e) => {
//         const { name, value } = e.target;
//         setSignInData(prevState => ({ ...prevState, [name]: value }));
//     };

//     const displayMessage = (type, message, isSuccess) => {
//         setMessages(prevState => ({ ...prevState, [type]: message }));
//     };

//     const handleSignUpSubmit = async (e) => {
//         e.preventDefault();
//         const { username, password, repeatPassword, email } = signUpData;

//         if (!username || !password || !repeatPassword || !email) {
//             displayMessage('register', 'All fields are required.', false);
//             return;
//         }

//         if (password !== repeatPassword) {
//             displayMessage('register', 'Passwords do not match!', false);
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:3000/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password, email })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 displayMessage('register', 'Registration successful!', true);
//                 document.getElementById('tab-1').checked = true;
//             } else {
//                 const data = await response.json();
//                 displayMessage('register', `Registration failed: ${data.error}`, false);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             displayMessage('register', 'An error occurred. Please try again.', false);
//         }
//     };

//     const handleSignInSubmit = async (e) => {
//         e.preventDefault();
//         const { username, password } = signInData;

//         if (!username || !password) {
//             displayMessage('login', 'Please provide username and password.', false);
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:3000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 displayMessage('login', 'Login successful!', true);
//                 localStorage.setItem('token', data.token);
             
//             } else {
//                 const data = await response.json();
//                 displayMessage('login', `Login failed: ${data.error}`, false);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             displayMessage('login', 'An error occurred. Please try again.', false);
//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="video-background">
//                 <video autoPlay muted loop>
//                     <source src={bgVideo} type="video/mp4" />
//                 </video>
//             </div>
//             <div className="login-wrap">
//                 <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
//                 <label htmlFor="tab-1" className="tab">Sign In</label>
//                 <input id="tab-2" type="radio" name="tab" className="sign-up" />
//                 <label htmlFor="tab-2" className="tab">Sign Up</label>
//                 <div className="login-form-container">
//                     <form id="sign-in-form" className="sign-in-htm" onSubmit={handleSignInSubmit}>
//                         <div id="login-message" className={`message ${messages.login.includes('success') ? 'success' : 'error'}`}>{messages.login}</div>
//                         <div className="group">
//                             <label htmlFor="login-username" className="label">Username</label>
//                             <input
//                                 id="login-username"
//                                 type="text"
//                                 name="username"
//                                 value={signInData.username}
//                                 onChange={handleSignInChange}
//                                 className="input"
//                                 required
//                             />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="login-password" className="label">Password</label>
//                             <input
//                                 id="login-password"
//                                 type="password"
//                                 name="password"
//                                 value={signInData.password}
//                                 onChange={handleSignInChange}
//                                 className="input"
//                                 required
//                             />
//                         </div>
//                         <div className="group">
//                             <input id="check" type="checkbox" className="check" defaultChecked />
//                             <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
//                         </div>
//                         <div className="group">
//                             <button type="submit" className="button">Sign In</button>
//                         </div>
//                         <div className="hr"></div>
//                         <div className="foot-lnk">
//                             <a href="#forgot">Forgot Password?</a>
//                         </div>
//                     </form>
//                     <form id="sign-up-form" className="sign-up-htm" onSubmit={handleSignUpSubmit}>
//                         <div id="register-message" className={`message ${messages.register.includes('success') ? 'success' : 'error'}`}>{messages.register}</div>
//                         <div className="group">
//                             <label htmlFor="register-username" className="label">Username</label>
//                             <input
//                                 id="register-username"
//                                 type="text"
//                                 name="username"
//                                 value={signUpData.username}
//                                 onChange={handleSignUpChange}
//                                 className="input"
//                                 required
//                             />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="register-password" className="label">Password</label>
//                             <input
//                                 id="register-password"
//                                 type="password"
//                                 name="password"
//                                 value={signUpData.password}
//                                 onChange={handleSignUpChange}
//                                 className="input"
//                                 required
//                             />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="register-repeat-password" className="label">Repeat Password</label>
//                             <input
//                                 id="register-repeat-password"
//                                 type="password"
//                                 name="repeatPassword"
//                                 value={signUpData.repeatPassword}
//                                 onChange={handleSignUpChange}
//                                 className="input"
//                                 required
//                             />
//                         </div>
//                         <div className="group">
//                             <label htmlFor="register-email" className="label">Email</label>
//                             <input
//                                 id="register-email"
//                                 type="email"
//                                 name="email"
//                                 value={signUpData.email}
//                                 onChange={handleSignUpChange}
//                                 className="input"
//                                 required
//                             />
//                         </div>
//                         <div className="group">
//                             <button type="submit" className="button">Sign Up</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthForms;


