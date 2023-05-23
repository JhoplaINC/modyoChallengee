import './App.css';
import { Navbar } from './components/Navbar';
import { ModyoContextProvider } from './context/ModyoContext';
import { AppRoutes } from './Router/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
	return (
		<ModyoContextProvider>
			<Navbar />
			<AppRoutes />
		</ModyoContextProvider>
	)
}

export default App;
