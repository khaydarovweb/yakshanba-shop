import { Navbar } from '../../components/navbar';
import { Carusel } from '../../components/carusel';

interface HomeProps {}

const Home = (props: HomeProps) => {
	return (
		<div className="px-10 py-8">
			<section>
				<Carusel />
				{/* <div className="w-full bg-slate-600 h-[500px]">
					<button></button>
					<button></button>
				</div> */}
			</section>
		</div>
	);
};

export default Home;
