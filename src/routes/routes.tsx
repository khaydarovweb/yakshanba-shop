import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { Home, Design, Cart, Order, Like, Products, Search } from '../pages';
import { Boshkiyim, Futbolka, Hudi } from '../pages/products';

function Router() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/search" element={<Search />} />
				<Route path="/futbolka" element={<Futbolka />} />
				<Route path="/hudi-sviter" element={<Hudi />} />
				<Route path="/boshkiyim" element={<Boshkiyim />} />
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
			<Footer />
		</>
	);
}

export default Router;
