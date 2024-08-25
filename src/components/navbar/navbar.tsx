import { useNavigate } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import Veshilka from '../../assets/imgs/png/veshilka.png';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
	const navigate = useNavigate();

	const onClick: MenuProps['onClick'] = ({ key }) => {
		// message.info(`Click on item ${key}`);
		navigate(`/${key}`);
	};
	const items: MenuProps['items'] = [
		{
			label: 'UniSex / Erkaklar Futbolkasi',
			key: 'futbolka',
		},
		{
			label: 'Hudi / Sviterlar',
			key: 'hudi-sviter',
		},
		{
			label: 'Boshkiyimlar',
			key: 'boshkiyim',
		},
	];

	return (
		<div className="text-[#333333]">
			<div className="w-full text-center p-2 text-[14px]">
				<p>
					Bizning online do'konimizga xush kelibsiz{' '}
					<a className="underline" href="">
						Yakshanba Shop
					</a>{' '}
				</p>
			</div>
			<header className="w-full border flex justify-between py-7 px-16 text-[18px] items-center">
				<span className="flex items-center gap-10">
					<span className="flex gap-3 items-center bg-[#c7e702] px-3 py-2 rounded-md">
						<img className="w-[34px]" src={Veshilka} alt="" />
						<a href="/" className="rubik-mono-one-regular">
							Yakshanba
						</a>
					</span>
					<span className="flex gap-10">
						<a href="/" className="">
							Asosiy
						</a>
						<Dropdown menu={{ items, onClick }}>
							<a onClick={(e) => e.preventDefault()}>
								<Space>Kiyimlar</Space>
							</a>
						</Dropdown>

						<a href="/design">Shaxsiy dizayn</a>
					</span>
				</span>
				<span className="flex gap-8 items-center">
					<IoSearchOutline
						className="hover:text-[#c7e702] transition-all"
						size={28}
						onClick={() => navigate('/search')}
						style={{ cursor: 'pointer' }}
					/>
					<GrFavorite
						className="hover:text-[#c7e702] transition-all"
						size={26}
						onClick={() => navigate('/like')}
						style={{ cursor: 'pointer' }}
					/>
					<HiOutlineShoppingBag
						className="hover:text-[#c7e702] transition-all"
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
