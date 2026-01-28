import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";
import data_coaches from './data/about_coaches.json';
import data_price from './data/price.json';
import logo_small from './accept/logo(small).png'
import img_menu from './accept/menu.svg'
import logo from './accept/logo.png'
import vk from './accept/cib-vk.svg'
import inst from './accept/cib-instagram.svg'
import punchingBag from './accept/punchingBag.jpg'



export default function Main() {
    

    const isBigScreen = useMediaQuery({ query: "(min-width: 500px)" });

    const [Menu, SetMenu] = useState(false);

    const [Zapisat, SetZapisat] = useState(false);
    const [Open, SetOpen] = useState<Boolean | string>(false);

    const RefBtn = useRef<any>(null);
    const RefSchedule = useRef<HTMLElement>(null);
    const RefPrice = useRef<HTMLElement>(null);
    const RefCoaches = useRef<HTMLElement>(null);
    const RefAdress = useRef<HTMLElement>(null);

    const orient = (e: any) => {
        const x = e.clientX - RefBtn.current?.offsetLeft;
        const y = e.clientY - RefBtn.current?.offsetTop;
        if (!Open) {
            if (x > 66 && x < 134) {
                if (y < 40) {
                    SetOpen("top");
                } else {
                    SetOpen("bottom");
                }
            } else {
                if (x < 66) {
                    SetOpen("left");
                } else {
                    SetOpen("right");
                }
            }
        }
    };

    // ------------Внимание----------------
    // элементы с className='media-none' не отображаются при экране меньшем 500px

    return (
        <div className="home">
            {isBigScreen ? (
                <header>
                    <div className="header">
                        <div className="logo">
                            <img src={logo_small} width={75} alt="" />
                            <div>
                                <span>Южная Академия Бокса</span> |{" "}
                                <span>South Box Academic</span>
                            </div>
                        </div>

                        <div className="navbar">
                            {/* <p>Зал</p> */}
                            <p
                                onClick={() =>
                                    RefAdress.current?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Адрес
                            </p>
                            <p
                                onClick={() =>
                                    RefSchedule.current?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Расписание
                            </p>
                            <p
                                onClick={() =>
                                    RefCoaches.current?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Тренерский состав
                            </p>
                            <p
                                onClick={() =>
                                    RefPrice.current?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Прайс
                            </p>
                            <a href={"/game"} style={{ color: "#dd0e0e" }}>
                                <p>Игра</p>
                            </a>
                        </div>
                    </div>
                </header>
            ) : (
                <header>
                    <div className="header">
                        <div className="logo">
                            <img src={logo_small} alt="" />
                            <span>SBA | Южная Академия Бокса</span>
                        </div>
                        <div>
                            <img
                                src={img_menu}
                                width={40}
                                onClick={() => SetMenu(true)}
                            />
                        </div>
                    </div>
                </header>
            )}

            {Menu ? (
                <div className="menu" onClick={() => SetMenu(false)}>
                    <div
                        className="conteiner"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={logo_small} width={110} alt="" />

                        <div className="navbar">
                            {/* <p>Зал</p> */}
                            <hr />
                            <p
                                onClick={() => {
                                    SetMenu(false);
                                    RefAdress.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Адрес
                            </p>
                            <p
                                onClick={() => {
                                    SetMenu(false);
                                    RefSchedule.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Расписание
                            </p>
                            <p
                                onClick={() => {
                                    SetMenu(false);
                                    RefCoaches.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Тренерский состав
                            </p>
                            <p
                                onClick={() => {
                                    SetMenu(false);
                                    RefPrice.current?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Прайс
                            </p>
                            <p>
                                <a
                                    href={"/game"}
                                    style={{ color: "#dd0e0e" }}
                                >
                                    <p>Игра</p>
                                </a>
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            ) : null}

            {Zapisat ? (
                <div className="zap" onClick={() => SetZapisat(false)}>
                    <div
                        className="window"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={logo} width={200} alt="" />
                        <h1>Cвяжитесь с нами!</h1>
                        <div
                            onClick={() => {
                                SetZapisat(false);
                                RefSchedule.current?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="schedule"
                        >
                            СМОТРЕТЬ РАСПИСАНИЕ
                        </div>
                        <div className="svyaz">
                            <a href="tel:+79889504000" className="button">
                                Позвонить
                            </a>
                            <p>
                                <a
                                    href="https://vk.com/southern_boxing_academy"
                                    target="_blank"
                                >
                                    <img src={vk} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/southern.boxing.academy?igsh=ZHZ1cGFwMjk5N2lo"
                                    target="_blank"
                                >
                                    <img src={inst} alt="" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}

            <main>
                {isBigScreen ? (
                    <section className="first">
                        <div className="view">
                            <span>
                                Академия здорового тела, острого ума, точного
                                удара и воли к победе — академия сегодняшних
                                чемпионов и на ринге, и в жизни.
                            </span>
                        </div>

                        <div className="zapisat">
                            <div className="wrapper">
                                <a
                                    onClick={() => SetZapisat(true)}
                                    className="cta"
                                    href="#"
                                >
                                    <span>ЗАПИСАТЬСЯ</span>
                                    <span>
                                        <svg
                                            width="66px"
                                            height="43px"
                                            viewBox="0 0 66 43"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                id="arrow"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                            >
                                                <path
                                                    className="one"
                                                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                                    fill="#FFFFFF"
                                                ></path>
                                                <path
                                                    className="two"
                                                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                                    fill="#FFFFFF"
                                                ></path>
                                                <path
                                                    className="three"
                                                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                                    fill="#FFFFFF"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="first-m">
                        <div className="text">
                            <p>
                                Академия здорового тела, острого ума, точного
                                удара и воли к победе — академия сегодняшних
                                чемпионов и на ринге, и в жизни.
                            </p>
                        </div>
                        <div className="zapisat-m"></div>

                        <div className="App">
                            <div
                                ref={RefBtn}
                                className={
                                    Open ? "btn " + Open + " is-open" : "btn"
                                }
                                onClick={(e) => orient(e)}
                            >
                                <div className="btn-back">
                                    {Open ? (
                                        <div className="window-m">
                                            <p>СВЯЖИТЕСЬ С НАМИ!</p>
                                            <div className="svyaz-m">
                                                <p>
                                                    <a
                                                        href="https://vk.com/southern_boxing_academy"
                                                        target="_blank"
                                                    >
                                                        <div>
                                                            VK:
                                                            southern_boxing_academy
                                                        </div>
                                                    </a>
                                                    <a
                                                        style={{
                                                            color: "green",
                                                        }}
                                                        href="https://www.instagram.com/southern.boxing.academy?igsh=ZHZ1cGFwMjk5N2lo"
                                                        target="_blank"
                                                    >
                                                        <div
                                                            style={{
                                                                color: "green",
                                                            }}
                                                        >
                                                            INST:
                                                            southern.boxing.academy
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="tel:+79889504000"
                                                        target="_blank"
                                                    >
                                                        <div>+79889504000</div>
                                                    </a>
                                                </p>
                                                <p>
                                                    <a
                                                        href="https://vk.com/southern_boxing_academy"
                                                        target="_blank"
                                                    >
                                                        <img
                                                            src={vk}
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a
                                                        href="https://www.instagram.com/southern.boxing.academy?igsh=ZHZ1cGFwMjk5N2lo"
                                                        target="_blank"
                                                    >
                                                        <img
                                                            src={inst}
                                                            alt=""
                                                        />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="btn-front">ЗАПИСАТЬСЯ</div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="second">
                    <div className="media-none">
                        <video controls>
                            <source src="/video.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="willBetter">
                        <img src={logo_small} alt="" />
                        <div className="conteiner">
                            <h1>Становись лучше с SBA</h1>
                            <div className="sports">
                                <p>🥊Детский бокс для самых маленьких 4+</p>
                                <p>🤼Бокс и единоборства для подростков</p>
                                <p>🥊Любительский бокс для мужчин</p>
                                <p>🥊Фитнес-бокс для девушек</p>
                                <p>🧘🏻‍♀️Стретчинг для тех, кто любит растяжку</p>
                                <p>
                                    🤸🏿‍♀️Функциональные тренировки (кросс фит) 16+
                                </p>
                                <p>🏆Индивидуальная программа</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={RefSchedule} className="schedule">
                    <img className="media-none" src={punchingBag} alt="" />
                    <div className="info">
                        <h1 className="title">Групповые тренировки</h1>
                        <div className="list">
                            <div className="item">
                                <div className="head">Олимпийский бокс 10+</div>
                                <div>
                                    Ср, пт
                                    <br />
                                    9:00-10:30
                                    <br />
                                    Тренер: Иваненко В.С.
                                </div>
                            </div>
                            <hr />
                            <div className="item">
                                <div className="head">Олимпийский бокс 12+</div>
                                Пн, ср, пт
                                <br />
                                15:30-17:00
                                <br />
                                Тренер: Иваненко В.С.
                            </div>
                            <hr />
                            <div className="item">
                                <div className="head">Олимпийский бокс 7+</div>
                                Пн, ср, пт
                                <br />
                                18:00-19:30
                                <br />
                                Тренер: Иваненко В.С.
                            </div>

                            <hr />

                            <div className="item">
                                <div className="head">Олимпийский бокс 12+</div>
                                Вт, чт
                                <br />
                                18:00-19:30
                                <br />
                                Сб
                                <br />
                                16:00-18:00
                                <br />
                                Тренер: Сальный Р.В.
                            </div>

                            <hr />

                            <div className="item">
                                <div className="head">
                                    ОФП с элементами бокса 5-6лет
                                </div>
                                Вт, чт
                                <br />
                                16:30-17:30
                                <br />
                                Сб
                                <br />
                                11:30-12:30
                                <br />
                                Тренер: Иваненко В.С.
                            </div>

                            <hr />

                            <div className="item">
                                <div className="head">
                                    Художественная гимнастика 3+
                                </div>
                                Ср 17:00-18:00
                                <br />
                                Сб 10:30-11:30
                                <br />
                                Тренер: Арсентьева М.В.
                            </div>

                            <hr />

                            <div className="item">
                                <div className="head">Фитнес растяжка 16+</div>
                                Вт, чт
                                <br />
                                9:30-11:00
                                <br />
                                Тренер: Арсентьева М.В.
                            </div>

                            <hr />

                            <div className="item">
                                <div className="head">Фитнес бокс 16+</div>
                                Пн, ср
                                <br />
                                19:30-21:00
                                <br />
                                Тренер: Иваненко В.С.
                            </div>

                            <hr />

                            <div className="item">
                                <div className="head">
                                    Любительский бокс 16+
                                </div>
                                Вт, чт
                                <br />
                                20:00-21:30
                                <br />
                                Сб
                                <br />
                                13:00-15:00
                                <br />
                                Тренер: Иваненко В.С.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="coaches" ref={RefCoaches}>
                    <h1 className="title">
                        Тренерский состав<span className="flare"></span>
                    </h1>
                    <div className="conteiner">
                        {data_coaches.map((item, index) => 
                        <div className="item">
                          <img src={"./coaches/"+item.img} alt="" />
                          <div className="info">
                            <h1>{item.name}</h1>
                            <p className="red">{item.description1}</p>
                            <p className="green">{item.description2}</p>
                            <p className="white">{item.description3}</p>
                          </div>
                        </div>)}
                    </div>
                </section>
                <section className="price" ref={RefPrice}>
                    <h1>Прайс Лист</h1>
                    <div className="conteiner">
                        <div className="item grownUp">
                            <p>
                                <span>Разовое посещение</span>
                                <span>{data_price.big.razovoe} ₽</span>
                            </p>
                            <p>
                                <span>Абоенемент 8 занятий</span>
                                <span>{data_price.big.abonement8} ₽</span>
                            </p>
                            <p>
                                <span>Абоенемент 12 занятий</span>
                                <span>{data_price.big.abonement12} ₽</span>
                            </p>{" "}
                        </div>
                        <div className="item kids">
                            <p>
                                <span>Разовое посещение</span>
                                <span>{data_price.small.razovoe} ₽</span>
                            </p>
                            <p>
                                <span>Абоенемент 8 занятий</span>
                                <span>{data_price.small.abonement8} ₽</span>
                            </p>
                            <p>
                                <span>Абоенемент 12 занятий</span>
                                <span>{data_price.small.abonement12} ₽</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section ref={RefAdress}>
                    <div className="adress">
                        <div className="contact">
                            <img src={logo} width={200} alt="" />
                            <h1>КОНТАКТЫ</h1>
                            <p>+7 (988) 950-40-00</p>
                            <p>Таганрог, Москатова 6а</p>
                            <p>
                                <a
                                    href="https://vk.com/southern_boxing_academy"
                                    target="_blank"
                                >
                                    <img src={vk} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/southern.boxing.academy?igsh=ZHZ1cGFwMjk5N2lo"
                                    target="_blank"
                                >
                                    <img src={vk} alt="" />
                                </a>
                            </p>
                        </div>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2669090564d35ba8c8ebbc5bc9c4176358bcaeaacaad1e96e0ed35505437363a&amp;source=constructor"
                            width={isBigScreen ? "700" : "350"}
                            height={isBigScreen ? "560" : "280"}
                        ></iframe>
                    </div>

                    <div className="area">
                        <ul className="circles">
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                            <li>🥊</li>
                        </ul>
                    </div>
                </section>
            </main>
            <div
                style={{
                    textAlign: "center",
                    margin: "50px",
                }}
            >
                написал сайт{" "}
                <a style={{ color: "blue" }} href="https://t.me/not_LP">
                    tg: not_LP
                </a>
            </div>
        </div>
    );
}
