import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Futbolka from '../../assets/imgs/png/futbolka.png';
import { useNavigate } from 'react-router-dom';

interface ProductsProps {}

const Products = (props: ProductsProps) => {
	const navigate = useNavigate();

	return (
		<section className="px-16 py-8 flex flex-col gap-8">
			<span className="flex items-center justify-between">
				<h3 className="text-[38px] font-medium text-[#333]">Kiyimlar</h3>
				<span>
					<p>
						Filtr:{' '}
						<select name="" id="" className="border rounded p-1">
							<option value="">A-Z</option>
							<option value="">Z-A</option>
							<option value="">Avval qimmat</option>
							<option value="">Avval arzon</option>
						</select>
					</p>
					<p></p>
					<p></p>
				</span>
			</span>
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
	);
};

export default Products;
