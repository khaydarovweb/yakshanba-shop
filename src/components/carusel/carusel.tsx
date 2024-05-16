import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
	height: '500px',
	color: '#333',
	// lineHeight: '160px',
	// textAlign: 'center',
	fontSize: 42,
	fontWeight: 'semibold',
	padding: 50,
	background: '#c7e702',
	borderRadius: 20,
	paddingBottom: 20,
};

const App: React.FC = () => (
	<Carousel autoplay autoplaySpeed={5000}>
		<div>
			<div style={contentStyle}>
				<h1 className="pb-[40px] font-medium">
					Haftaning har YAKSHANBA <br /> kunlari 50% chegirma ! <br /> Ulgurib qoling.
				</h1>
				<a
					href="/products"
					className="bg-white px-8 py-3 transition text-[18px] font-medium rounded-xl hover:text-[#333] hover:bg-transparent border-[3px] border-[#333]"
				>
					Harid qilish
				</a>
			</div>
		</div>
		<div>
			<div style={contentStyle}>
				<h1 className="pb-[40px] font-medium">
					1 + 1 = 3 <br /> Aksiyasidan foydalanib qoling, <br /> 2ta mahsulot harid qiling va 3
					chisini <br /> sovg'a sifatida harid qiling.
				</h1>
				<a
					href="/products"
					className="bg-white px-8 py-3 transition text-[18px] font-medium rounded-xl hover:text-[#333] hover:bg-transparent border-[3px] border-[#333]"
				>
					Harid qilish
				</a>
			</div>
		</div>
	</Carousel>
);

export default App;
