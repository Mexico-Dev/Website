import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar';
import ROOT from './routes';

export default function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {ROOT.map((rule, i) => (
                    <Route
                        key={i}
                        path={rule.path}
                        element={<rule.element />}>
                    </Route>
                ))}
            </Routes>
        </Router>
    );
};

