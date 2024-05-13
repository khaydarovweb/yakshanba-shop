interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
	return (
		<header className="w-full bg-red-500 h-[100px]">
			<span className="flex gap-5">
				<a href="/">Yakshanba Shop</a>
				<a href="/">Home</a>
				<a href="/">Home</a>
			</span>
			<span>
				<a href="/">Home</a>
				<a href="/">Home</a>
				<a href="/">Home</a>
			</span>
		</header>
	);
};

export default Navbar;
