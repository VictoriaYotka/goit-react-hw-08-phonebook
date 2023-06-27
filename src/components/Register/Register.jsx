import { useDispatch } from 'react-redux'
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
    dispatch(fetchSignup(userRegisterInfo))
    // form.reset()
}

return (
    <form onSubmit={handleSubmit}>
         <label htmlFor="user_name" >Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
        />

        <label htmlFor="email" >Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
        />

        <label htmlFor="password" >Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
        />

        <button type="submit">Register</button>
    </form>
  )
}

export default Register