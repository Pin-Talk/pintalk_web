import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <main>
        <div className="bg-slide-whitespace">
          <div className="absolute w-full h-full text-pintalk-dark-brown flex pl-10 pt-40 items-front flex-col">
            <h1 className="uppercase font-bold text-5xl mb-4">PIN BANK</h1>
            <h3 className="text-4xl text-pintalk-dark-brown mb-10">가치에 금융을 더 합니다.</h3>
            <div className="text-gray-400 flex items-end flex-col lg:flex-row px-2">
              <h2 className="text-teal-500 font-bold text-3xl uppercase">PIN BANK &nbsp;</h2>
              <h2 className="text-xl">
                직접 투자하고, 대출이자는 적절한 현금과 가게의 상품(현물)으로 받음으로써 금리를
                낮추고, 단골고객은 늘립니다.
              </h2>
            </div>
            <br />
            <h3 className="text-xl text-pintalk-dark-brown mb-10">
              고객과 함께 꿈과 희망을 이야기하는
              <br />
              국민의 은행이 되겠습니다
            </h3>
          </div>

          <div className="flex justify-end">
            <img
              className="w-1/2 bg-right"
              src="https://raw.githubusercontent.com/jytrack64/kookmin-bank/main/img/slideshow.jpg"
            ></img>
          </div>
        </div>

        <div className="flex items-center justify-center text-xl shadow-lg w-[100%] h-60">
          <button className="bg-pintalk-light-yellow text-white w-1/6 h-1/2">전체계좌조회</button>
          <button className="bg-pintalk-light-yellow text-white w-1/6 h-1/2">계좌이체</button>
          <button className="bg-pintalk-light-yellow text-white w-1/6 h-1/2">빠른조회</button>
          <button className="bg-pintalk-dark-brown text-white w-1/6 h-1/2">보안센터</button>
          <button className="bg-pintalk-dark-brown text-white w-1/6 h-1/2">상담/예약</button>
          <button className="bg-pintalk-dark-brown text-white w-1/6 h-1/2">소비자보호</button>
        </div>
      </main>
    </Layout>
  );
};
export default Home;
