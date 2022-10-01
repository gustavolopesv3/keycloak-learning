import { useKeycloak } from '@react-keycloak/web'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { Books } from '../Books'


const AppRoutes = () =>{
    const {keycloak} = useKeycloak()
    console.log(keycloak)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='books' element={<Books/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes