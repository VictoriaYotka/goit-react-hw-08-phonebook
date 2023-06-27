const LoginForm = () => {
  return (
    <form>

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

export default LoginForm