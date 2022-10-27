import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';


function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home />} />
            </Routes>
        </>
    );
}

export default AppRouter;