import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import {Navbar} from '../components/navbar';
import { Home, Man, Woman, Design, Cart, Order, Like } from '../pages';

function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/man" element={<Man />} />
                <Route path="/woman" element={<Woman />} />
                <Route path="/design" element={<Design />} />
                <Route path="/like" element={<Like />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />

                {/* Uncomment and adjust these routes as needed */}
                {/* <Route path="/auth" element={<Protected allowed={isAllowed} to="/" />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route> */}

                {/* <Route path="*" element={<Navigate to="/auth/login" />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
