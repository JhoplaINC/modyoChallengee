import { Route, Routes } from 'react-router-dom';
import { Login, Cards, NotFound, IndexPage, Profile } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<IndexPage />}/>
            <Route path='/cards' element={<Cards />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    )
}
