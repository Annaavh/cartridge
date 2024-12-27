import "./index.css";
import React from "react";

const Welcome = () => {
    return (
        <section id="about-us" className="welcome">
            <div className="container">
                <h2>Բարի գալուստ
                    <span> Cartridge.am</span>
                </h2>

                <div className="welcome-container">
                    <img className="welcome-image" src={process.env.PUBLIC_URL + "/cartridge.jpg"} alt="Cartridge Image" />
                    <p className="welcome-text">
                        Cartridge.am-ը Հայաստանում առաջատար ընկերություն է, որը հիմնադրվել է 2022 թվականին և մասնագիտացած է տպիչների և տպագրական սարքավորումների վաճառքի, վերանորոգման և տեխնիկական սպասարկման ոլորտում։ Այն առաջարկում է քարթրիջների լիցքավորման և վերականգնման բարձրակարգ ծառայություններ, որոնք իրականացվում են որակյալ նյութերով և փորձառու մասնագետների կողմից։ Ընկերությունը հայտնի է իր հաճախորդամետ մոտեցմամբ և բիզնեսների համար անհատականացված լուծումներ տրամադրելու կարողությամբ։ Շուկայում իր վստահելի դիրքը ընկերությունը ձեռք է բերել տարիների փորձով, պրոֆեսիոնալ թիմով և մատչելի գներով։ Cartridge.am-ը կատարյալ ընտրություն է նրանց համար, ովքեր գնահատում են որակը, հուսալիությունը և մատչելիությունը տպագրական սարքավորումների և ծառայությունների ոլորտում։
                        Cartridge.am-ում մենք առաջարկում ենք բարձրորակ լազերային քարթրիջների լիցքավորման ծառայություններ՝ բավարարելու ձեր տպագրության բոլոր կարիքները։ Անկախ նրանից՝ ձեզ անհրաժեշտ է նոր քարթրիջ, թե ցանկանում եք լիցքավորել ձեր առկա քարթրիջը, մենք միշտ պատրաստ ենք օգնելու։
                        Մենք առաջարկում ենք լազերային քարթրիջներ լայն տեսականի, որոնք համատեղելի են բոլոր հայտնի տպիչների ապրանքանիշերի հետ։ Մեր լիցքավորման ծառայությունները էկոլոգիապես մաքուր են, ծախսարդյունավետ և նախատեսված են նվազեցնելու ձեր տպագրության ծախսերը՝ միաժամանակ ապահովելով բարձր որակ։
                        Ընտրեք Cartridge.am՝ հուսալի, մատչելի և կայուն տպագրական լուծումների համար։ Մեր թիմը պատրաստ է ապահովել լավագույն ապրանքներն ու ծառայությունները թե՛ տնային, թե՛ գրասենյակային օգտագործման համար։
                    </p>
                </div>

            </div>
        </section>
    )
};
export default Welcome;