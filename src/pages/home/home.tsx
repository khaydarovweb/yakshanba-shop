import { Navbar } from '../../components/navbar';
import { Carusel } from '../../components/carusel';
import Futbolka from '../../assets/imgs/png/futbolka.png';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home = (props: HomeProps) => {
	const navigate = useNavigate();
	return (
		<div className="px-16 py-8 flex flex-col gap-8">
			<Carusel />
			{/* <div className="w-full bg-slate-600 h-[500px]">
					<button></button>
					<button></button>
				</div> */}
			<section className="">
				<h3 className="py-[30px] text-[38px] font-medium text-[#333]">Kiyimlar</h3>
				<div className="flex flex-col items-center gap-10">
					<div className="flex flex-wrap gap-[63px] pb-10">
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
						<div className="h-[400px]">
							<div className="h-[350px] w-[300px] rounded-xl border-[2px] hover:shadow-md hover:cursor-pointer transition-all">
								<img src={Futbolka} alt="" />
							</div>
							<div className="flex justify-between items-center py-2">
								<span>
									<p className="py-1 font-medium text-[18px]">Oq Futbolka</p>
									<p className="text-[#c3e703]">90 000 UZS</p>
								</span>
								<span>
									<button
										onClick={() => navigate('/cart')}
										className="rounded-[50%] bg-[#c3e703] transition-all border-[2px] border-[#c3e703] p-4 hover:bg-transparent"
									>
										<HiOutlineShoppingBag size={28} />
									</button>
								</span>
							</div>
						</div>
					</div>
					<button className="bg-[#c7e702] border-[2px] transition-all border-[#c7e702] px-7 py-4 rounded-xl font-medium text-[18px] hover:cursor-pointer hover:border-[2px] hover:bg-transparent">
						Ko'proq ko'rish
					</button>
				</div>
			</section>
			<section className="flex flex-col">
				<h3 className=" py-[30px] text-[38px] font-medium text-[#333]">Savol yo'llash</h3>
				<div className="flex flex-col items-center gap-7">
					<span className="flex gap-5 w-full justify-center">
						<input className="border-[2px] rounded-lg p-5 w-[55%]" type="text" placeholder="Ism" />
						<input
							className="border-[2px] rounded-lg p-5 w-[55%]"
							type="email"
							placeholder="Elektron pochta"
						/>
					</span>
					<textarea
						className="border-[2px] rounded-lg px-5 py-3 resize-none w-full"
						name=""
						id=""
						placeholder="Savol ..."
					></textarea>
				</div>
				<button className="bg-[#c7e702] border-[2px] transition-all border-[#c7e702] px-7 py-4 rounded-xl font-medium text-[18px] hover:cursor-pointer hover:border-[2px] hover:bg-transparent mt-7 w-[200px] self-center">
					Yuborish
				</button>
			</section>
		</div>
	);
};

export default Home;
