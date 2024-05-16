interface SearchProps {}

const Search = (props: SearchProps) => {
	return (
		<section className="px-16 py-8 flex flex-col gap-8">
			<h3 className=" text-[38px] font-medium text-[#333]">Qidiruv</h3>
			<div className="">
				<input
					className="w-full p-5 outline-none border-b-2 border-[#333] text-[#333] text-[18px]"
					type="search"
					placeholder="Izlayotgan mahsulotingizni yozing..."
				/>
			</div>
		</section>
	);
};

export default Search;
