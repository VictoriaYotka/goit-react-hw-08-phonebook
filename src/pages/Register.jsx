import Form from 'components/Form/Form';
import FormInput from 'components/FormInput/FormInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchSignup } from 'redux/fetchUser';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.user_name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userRegisterInfo = {name, email, password};
    
    dispatch(fetchSignup(userRegisterInfo)).unwrap()
    .then(() => {
        navigate('/')
        toast.success('Successfully registered. Please, log in')
    })
    .catch(() => toast.error(`Something went wrong, try again `))

    form.reset()
}

  return (
    <Form
    handleSubmit={handleSubmit}
        buttonText='Register'>

        <FormInput 
            type='text'
            name='user_name'
            label='Name'
        />
        <FormInput 
            type='email'
            name='email'
            label='Email'
        />
        <FormInput 
            type='password'
            name='password'
            label='Password'
        />
    </Form>
  )
}

export default Register