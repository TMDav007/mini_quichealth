import React, {useState} from 'react';
import "./Body.scss";
import PermIdentity from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PasswordIcon from "@material-ui/icons/HttpsOutlined";
import RemoveEyeIcon from "@material-ui/icons/Visibility";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import auth from '../Auth';
import history from './../history';
import { toast } from 'react-toastify';

function Body() {
    const [message, setMessage] = useState("");
    const INITIAL_STATE = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: ""
      }

    const [values, setValues] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});
    let handleBlur;
   
    //let validate = auth(values);
    handleBlur = () => setErrors(auth(values));

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };

    const register = async (e) => {
        e.preventDefault();
        values.gender= "male";
        values.dob = "12/12/2022";
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors){
          try {
                  const requestOptions ={
                  method: 'POST',
                  mode: "cors",
                  headers: { 'Content-Type': 'application/json'},
                  body: JSON.stringify(values)
              }
            let response= await fetch("https://dashboard.quichealth.com.ng/api/v1/register", requestOptions);
            if(response.status === 201) {
                setMessage("Registration successful")
                setTimeout(() => { 
                history.push("/dashboard") }, 3000);
            }  else{ setMessage("Registration failed")}
            
          } catch (error){
            setMessage(error.message)
          }
        }
    }

    return (
        <div className="body__container">
            {message && toast.success(message)}
            <div className="body__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Patricia_technologies_logo.png" alt=""/>
                <div className="body__left__img">
                    <img src="https://storage.googleapis.com/patricia-website-assets/signup_page_image.svg" alt=""/>
                </div>
                <div className="par__container">
                    <p>We are simply <span>Built</span> for you</p> 
                </div>  
            </div>    
            <div className="body__right">
                <div>
                    <div className="body__image">
                        <img src="https://app.mypatricia.co/img/logo_at_3.d7d7df72.png" alt="" />
                    </div>
                    <div className="register__head"> 
                        <h2>Welcome!</h2>
                        <div className="">
                            <p>Let's get to know you</p>
                        </div>
                    </div>
                    <div className="register__body">
                        <form>
                        <PermIdentity className="input__icon" />
                            <input 
                                className={errors.firstname && 'error-input'}
                                placeholder="Firstname"
                                type="text"
                                name="firstname"
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur = {handleBlur}
                            />
                            <br />
                            {errors.firstname && <span className='error-text'>{errors.firstname} </span>}
                            <br />
                            <PermIdentity className="input__icon" />
                            <input 
                                className={errors.lastname && 'error-input'}
                                placeholder="Lastname"
                                type="text"
                                name="lastname"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur = {handleBlur}
                            />
                            <br />
                            {errors.lastname && <span className='error-text'>{errors.lastname} </span>}
                            <br />
                            <EmailIcon className="input__icon"/>
                            <input 
                                className={errors.email && 'error-input'}
                                placeholder="E-mail"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <br />   
                            {errors.email && <span className='error-text'>{errors.email} </span>}
                            <br />
                            <ContactPhoneIcon className="input__icon"/>
                            <input 
                                className={errors.phone && 'error-input'}
                                placeholder="Phone number"
                                type="phone"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <br />   
                            {errors.phone && <span className='error-text'>{errors.phone} </span>}
                            <br />
                            <PasswordIcon className="input__icon" />
                            <input 
                                className={errors.password && 'error-input'}
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <RemoveEyeIcon className="eye__input__icon" />
                            <br />
                            {errors.password && <span className='error-text'>{errors.password} </span>}
                            <br />

                            <PasswordIcon className="input__icon" />
                            <input 
                                className={errors.passwordConfirmation && 'error-input'}
                                placeholder="Confirm Password"
                                type="password"
                                name="passwordConfirmation"
                                value={values.passwordConfirmation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <RemoveEyeIcon className="eye__input__icon" />
                            <br />
                            {errors.passwordConfirmation && <span className='error-text'>{errors.passwordConfirmation} </span>}
                            <br />
                            <br />

                            <p className="">
                              By clicking the SignUp button below, you agree to Patricia’s <span>terms and service</span>
                            </p>

                            <button type='submit' onClick={register}>Sign up</button>
                            <p className="reg__check">Already have an account ? <span>Click here </span></p>
                        </form>
                    </div>
                    <div className="register__bottom">
                        <div>
                            <img src="https://www.thamesvalleydiscos.co.uk/photo/qrcode-tvd.png" alt=""></img>
                        </div>
                        <div>
                            <p id="reg_par_one">
                                Scan to Download the Patricia App.
                            </p>

                            <p id="reg_par_two">
                            • Fast Transactions • Easy Access • Premium Features
                            </p>
                        </div>
                        <div className="apps__icon">
                            <img src="https://app.mypatricia.co/img/app-store.d19a596d.svg" alt="" />
                            <img src="https://app.mypatricia.co/img/play-store.55cab88e.svg" alt="" />
                            <div >
                                <img className="chatbot" src="https://s.cafebazaar.ir/1/icons/ir.samerbook.payamak_512x512.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body


