import { useNavigate } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
	const navigate = useNavigate();

	return (
		<header className="w-full bg-[#FFA857] text-white flex justify-between p-8">
			<a href="/">Yakshanba Shop</a>
			<span className="flex gap-10">
				<a href="/">Erkaklar</a>
				<a href="/">Ayollar</a>
				<a href="/">Mening dizaynim</a>
			</span>
			<span className="flex gap-8">
				<MdFavorite color="white" size={32} onClick={() => navigate('/like')} />
				<FaShoppingBag color="white" size={28} onClick={() => navigate('/cart')} />
			</span>
		</header>
	);
};

export default Navbar;
