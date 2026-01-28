// import { get, setCookie } from 'react-cookie';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';


const Game = () => {
    const [isClient, setIsClient] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const [chastota, setChastota] = useState(1000);
    const [start, setStart] = useState(false);
    const [print, setPrint] = useState('Старт');
    const [colorNow, setColorNow] = useState('#006400');
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [Sekundomer , SetSekundomer] = useState(0);
    

    // Определяем размер экрана только на клиенте
    const isBigScreen = useMediaQuery({ query: '(min-width: 500px)' }, undefined, 
        (matches) => setIsClient(true) // Устанавливаем флаг, что клиент загружен
    );

    useEffect(() => {
        // const cookieData = getCookie('moves');
        // if (cookieData) {
        //     try {
        //         const parsed = JSON.parse(cookieData.toString());
        //         if (Array.isArray(parsed)) {
        //             setSelected(parsed);
        //         }
        //     } catch (e) {
        //         console.error('Ошибка парсинга куки:', e);
        //     }
        // }
        setIsClient(true); // Устанавливаем флаг клиента
    }, []);

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    const AllMoves = [
        'Уклон влево', 'Уклон вправо', 'Уклон назад', 'Блок',
        'Нырок влево', 'Нырок вправо', 'Правый прямой', 'Левый прямой',
        'Правый боковой', 'Левый боковой', 'Правый апперкот', 'Левый апперкот'
    ];

    const Colors = [
        '#FF0000', '#3CB371', '#FFD700', '#FFA07A', '#FF1493', '#006400',
        '#9932CC', '#4B0082', '#FF00FF', '#008080', '#000080', '#000'
    ];

    const startGame = () => {
        
        if (selected.length < 2 || chastota<=0) return;
        let sekundomer = 0
        const id = setInterval(() => {
            sekundomer+=chastota/1000
            SetSekundomer(sekundomer)
            setPrint(selected[Math.floor(Math.random() * selected.length)]);
            setColorNow(Colors[Math.floor(Math.random() * Colors.length)]);
        }, chastota);
        
        setIntervalId(id);
        setStart(true);
    };

    const endGame = () => {
        if (intervalId) clearInterval(intervalId);
        // setCookie('moves', JSON.stringify(selected));
        setStart(false);
        setPrint('Старт');
    };

    return (
        <div className='Game'>
            <header>
                <a href={'/'}><p>На главную</p></a>
            </header>
            <div>
                {/* Рендерим только на клиенте после гидратации */}
                {start ? (
                    <main>
                        <div>{Sekundomer} сек.</div>
                        <div className="print" style={{ background: colorNow }}>
                            <span>{print}</span>
                        </div>
                        <div onClick={endGame}>
                            Закончить
                        </div>
                    </main>
                ) : (
                    <section>
                        {isClient && isBigScreen && !start && (
                    <div>
                        <img className='animation_box' src="animation.gif" alt="" />
                    </div>
                )}
                        <div>
                            <div>
                                <div>Выбрать частоту (миллисекунды)</div>
                                <input 
                                    type="number" 
                                    onChange={e => {
                                        let line = e.target.value
                                        
                                        
                                        setChastota(Number(line))
                                    }} 
                                    value={String(chastota).replace(/^0+/, '')}
                                    min="100"
                                />
                                <div style={{ fontSize: '11px' }}>*чем меньше, тем быстрее смена</div>
                                <hr />
                                <div>Выберите действия:</div>
                                <div className="select">
                                    {AllMoves.map((e, id) => (
                                        <div 
                                            key={id}
                                            className="item" 
                                            style={{ 
                                                color: selected.includes(e) ? 'white' : 'black', 
                                                background: selected.includes(e) ? 'green' : 'white' 
                                            }}
                                            onClick={() => {
                                                if (selected.includes(e)) {
                                                    setSelected(selected.filter(i => i !== e));
                                                } else {
                                                    setSelected([...selected, e]);
                                                }
                                            }}
                                        >
                                            {e}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='btns'>
                                <div className='clear' onClick={() => {
                                    setSelected([]);
                                    setChastota(1000);
                                }}>
                                    <span>сбросить</span>
                                </div>
                                <div 
                                    className="Start" 
                                    onClick={startGame}
                                    style={{ opacity: selected.length >= 2 && chastota>0 ? 1 : 0.2 }}
                                >
                                    Старт
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Game;