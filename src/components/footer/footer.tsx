import { FaTelegram } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { PiPhoneCallFill } from 'react-icons/pi';

interface FooterProps {}

const Footer = (props: FooterProps) => {
	return (
		<footer className="bg-[#1c1c1c] flex justify-between p-10 text-white text-[18px]">
			<span className="flex flex-col">
				<strong className="pb-2">
					<a href="/">Yakshanba Shop</a>
				</strong>
				<a href="mailto:yakshanbashop@gmail.com">yakshanbashop@gmail.com</a>
				<p>
					Tel: <a href="tel:+998941351838">+998 (94) 135 18 38</a>
				</p>
			</span>
			<span className="flex flex-col">
				<strong className="pb-2">Shop</strong>
				<a href="/man">Erkak</a>
				<a href="/woman">Ayol</a>
				<a href="/design">Shaxsiy dizayn</a>
			</span>
			<span className="flex flex-col">
				<strong className="pb-2">Biz bilan bog'lanish</strong>
				<a href="mailto:yakshanbashop@gmail.com">yakshanbashop@gmail.com</a>
				<p>
					Tel: <a href="tel:+998941351838">+998 (94) 135 18 38</a>
				</p>
			</span>
			<span className="flex gap-5">
				<FaTelegram size={24} />
				<AiFillInstagram size={24} />
				<PiPhoneCallFill size={24} />
			</span>
		</footer>
	);
};

export default Footer;
