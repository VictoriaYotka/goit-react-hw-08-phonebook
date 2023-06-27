import FormInput from 'components/FormInput/FormInput';
import { useDispatch } from 'react-redux';
import { fetchSignup } from 'redux/fetchUser';

const Register = () => {
    const dispatch = useDispatch();

const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.user_name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userRegisterInfo = {name, email, password};
    
    dispatch(fetchSignup(userRegisterInfo));

    form.reset()
}

  return (
    <form onSubmit={handleSubmit}>
        <FormInput 
            type='text'
            name='user_name'
        />
        <FormInput 
            type='email'
            name='email'
        />
        <FormInput 
            type='password'
            name='password'
        />
        <button type="submit">Register</button>
    </form>
  )
}

export default Register