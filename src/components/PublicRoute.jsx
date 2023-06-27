import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectToken } from 'redux/selectors'

const PublicRoute = ({ children }) => {
	const isAuth = useSelector(selectToken)
	const location = useLocation()
	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}

export default PublicRoute