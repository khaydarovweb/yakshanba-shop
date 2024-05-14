import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
	height: '550px',
	color: '#333',
	// lineHeight: '160px',
	// textAlign: 'center',
	fontSize: 42,
	fontWeight: 'semibold',
	padding: 80,
	background: '#c3e703',
	borderRadius: 20,
	paddingBottom: 20,
};

const App: React.FC = () => (
	<Carousel>
		<div>
			<div style={contentStyle}>
				<h1 className="pb-[40px]">
					Haftaning har YAKSHANBA <br /> kunlari 50% chegirma ! <br /> Ulgurib qoling.
				</h1>

				<a
					href="/products"
					className="bg-white px-8 py-3 transition text-[18px] font-medium rounded-xl hover:text-[#fff] hover:bg-transparent border-[3px] border-white"
				>
					Harid qilish
				</a>
			</div>
		</div>
		<div>
			<h1 style={contentStyle}>
				3 ta mahsulot <br /> harid qiling va +1 mahsulot <br />
				sovg'a sifatida oling.
			</h1>
		</div>
		<div>
			<h1 style={contentStyle}>
				1 + 1 = 3 <br /> Aksiyasidan foydalanib qoling, <br /> 2ta mahsulot harid qiling va 3
				chisini <br /> sovg'a sifatida harid qiling.
			</h1>
		</div>
	</Carousel>
);

export default App;
