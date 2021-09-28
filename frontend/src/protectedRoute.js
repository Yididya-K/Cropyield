import {Redirect,Route } from 'react-router-dom';
import {useAuth} from './auth'


const ProtectedRoute = props => {
    const [user]=useAuth();
     
    if (!user){
        return <Redirect to ='/signin'/>;
    }
    return <Route {...props} />;

  
};

export default ProtectedRoute;

