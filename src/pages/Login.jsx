import Form from 'components/Form';
import FormInput from 'components/FormInput'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchLogin } from 'redux/fetchUser';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userLoginInfo = {email, password};
    
    dispatch(fetchLogin(userLoginInfo)).unwrap()
    .then(() => {
      navigate('/contacts')
      toast.success('Welcome!')
    })
    .catch(() => toast.error(`Something went wrong, try again `))

    form.reset()
}

  return (
    <Form
    handleSubmit={handleSubmit}
        buttonText='Log In'>
  
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

export default Login