import "./Home.css"
const Home = () => {
    return (
        <>
            <div className="home-page">
                <center>
                    <video className='video' loop autoPlay muted>
                        <source src={`video.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </center>
                <h1 style={{ textAlign: 'center', marginTop: '20px',fontSize:'40px' }} className='text-yellow-800'>Muammolar</h1>
                <nav className='Problems'>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608507127191-Z7FKG7YB4CECM8JFK6DR/steps_1.png?format=500w" alt="" />
                        <p>Haydash konikmalari va yolda xavfsiz xatti-harakatlarni bilishning etishmasligi xatolar va baxtsiz hodisalarga olib kelishi mumkin.</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608507144288-XWCYJKCSYGCIZKIR1ETA/steps_2.png?format=500w" alt="" />
                        <p>Yolning yomon sharoitlari, masalan, chuqurchalar, yoqolgan belgilar yoki yoruglikning etarli emasligi baxtsiz hodisalarga olib kelishi mumkin.</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608507186413-SKEDJYZ3PHIMJRVFK3CW/steps_3.png?format=500w" alt="" />
                        <p>Avtomobilga notogri texnik xizmat korsatish tormoz yoki rul boshqaruvidagi muammolar kabi muammolarni keltirib chiqarishi mumkin.</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608553343758-933VQIRIAC5YQIMRKK6F/steps_4.2.png?format=500w" alt="" />
                        <p>Yomgir, qor, tuman yoki kuchli shamol korinish va tortishish darajasini pasaytirib, baxtsiz hodisalar ehtimolini oshiradi.</p>
                    </div>
                </nav>
                <center>
                    <a href="/page" >
                        <button style={{marginTop:'70px'}}>Muammolarni korish</button>
                    </a>
                </center>

                <center>
                <div className="statistika " style={{marginTop:'20px',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:'80px'}}>
                    <div style={{alignItems:'center',fontSize:'20px',marginTop:'90px',marginLeft:'200px'}}>
                    <h1>Statistika</h1><br />
                    <p style={{width:'300px'}}>Bir yilda 2 000ta odam  avto halokatga uchrashadi  Umumiy malumotlarga kora, Ozbekistonda 2022 yilda 7,000 ga yaqin yol-transport hodisalari sodir bolgan, bu hodisalarda 1,500 dan ortiq odam olgan va minglab odamlar jarohatlangan. 2023 yil uchun statistik malumotlar hali toliq taqdim etilmagan bolishi mumkin.</p>
                    </div>
                    <img src="statistics.png" style={{width:'800px',borderRadius:'    '}} alt="statistika" />
                </div>
                </center>
            </div>
        </>
    );
}

export default Home;
