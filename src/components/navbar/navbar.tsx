import { useNavigate } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import Veshilka from '../../assets/imgs/png/veshilka.png';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
	const navigate = useNavigate();

	// const toggleClass = (el: any, className: any) => el.classList.toggle(className);
	// toggleClass(document.querySelector('p.special'), 'special');
	// // The paragraph will not have the 'special' class anymore

	// const str = 'Asosiy';

	// const locationPath = () => {
	// 	if ((window.location.pathname = '/')) {
	// 		// str.classlist.toggleclass;
	// 	} else {
	// 		return false;
	// 	}
	// };
	// // locationPath();

	return (
		<div className="text-[#333333]">
			<div className="w-full text-center p-2 text-[14px]">
				<p>Bizning do'konimizga xush kelibsiz</p>
			</div>
			<header className="w-full border flex justify-between py-7 px-10 text-[18px] items-center">
				<span className="flex items-center gap-10">
					<span className="flex gap-3 items-center bg-[#c7e702] px-3 py-2 rounded-md">
						<img className="w-[34px]" src={Veshilka} alt="" />
						<a href="/" className="rubik-mono-one-regular">
							Yakshanba
						</a>
					</span>
					<span className="flex gap-10">
						<a href="/" className="underline">
							Asosiy
						</a>
						<a href="/products">Kiyimlar</a>
						<a href="/design">Shaxsiy dizayn</a>
					</span>
				</span>
				<span className="flex gap-8 items-center">
					<IoSearchOutline
						size={28}
						onClick={() => navigate('/search')}
						style={{ cursor: 'pointer' }}
					/>
					<GrFavorite size={26} onClick={() => navigate('/like')} style={{ cursor: 'pointer' }} />
					<HiOutlineShoppingBag
						size={28}
						onClick={() => navigate('/cart')}
						style={{ cursor: 'pointer' }}
					/>
				</span>
			</header>
		</div>
	);
};

export default Navbar;
