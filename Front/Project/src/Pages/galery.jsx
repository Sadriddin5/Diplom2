import { useState, useMemo } from 'react';
import './galery.css'

export default function Galery() {
    const [allWorks] = useState([
        { id: 1, title: "Утро в сосновом лесу", year: 1889, technique: "масло", genre: "пейзаж", theme: "лес", size: "28x40", tags: "#живопись #пейзаж #лес", image: "" },
        { id: 2, title: "Березовая роща", year: 1885, technique: "масло", genre: "пейзаж", theme: "деревья", size: "30x45", tags: "#живопись #пейзаж #березы", image: "" },
        { id: 3, title: "Морской бриз", year: 1892, technique: "акварель", genre: "марина", theme: "море", size: "25x35", tags: "#акварель #море #волны", image: "" },
        { id: 4, title: "Закат над морем", year: 1895, technique: "масло", genre: "марина", theme: "закат", size: "40x50", tags: "#масло #море #закат", image: "" },
        { id: 5, title: "Полевые цветы", year: 1887, technique: "акрил", genre: "натюрморт", theme: "цветы", size: "20x25", tags: "#акрил #цветы #поле", image: "" },
        { id: 6, title: "Зимний вечер", year: 1898, technique: "масло", genre: "пейзаж", theme: "зима", size: "35x45", tags: "#масло #зима #снег", image: "" },
        { id: 7, title: "Городской пейзаж", year: 1901, technique: "акварель", genre: "городской", theme: "архитектура", size: "25x30", tags: "#акварель #город #архитектура", image: "" },
        { id: 8, title: "Натюрморт с фруктами", year: 1890, technique: "масло", genre: "натюрморт", theme: "фрукты", size: "22x28", tags: "#масло #натюрморт #фрукты", image: "" },
        { id: 9, title: "Весенний сад", year: 1893, technique: "акрил", genre: "пейзаж", theme: "сад", size: "30x40", tags: "#акрил #сад #весна", image: "" },
        { id: 10, title: "Старая мельница", year: 1888, technique: "масло", genre: "пейзаж", theme: "деревня", size: "35x45", tags: "#масло #деревня #мельница", image: "" },
        { id: 11, title: "Морской пейзаж", year: 1896, technique: "акварель", genre: "марина", theme: "море", size: "20x30", tags: "#акварель #море #пляж", image: "" },
        { id: 12, title: "Осенний парк", year: 1894, technique: "масло", genre: "пейзаж", theme: "осень", size: "28x38", tags: "#масло #осень #парк", image: "" },
        { id: 13, title: "Горный пейзаж", year: 1897, technique: "акрил", genre: "пейзаж", theme: "горы", size: "30x42", tags: "#акрил #горы #пейзаж", image: "" },
        { id: 14, title: "Вечерний город", year: 1900, technique: "масло", genre: "городской", theme: "город", size: "35x45", tags: "#масло #город #вечер", image: "" },
        { id: 15, title: "Цветущий луг", year: 1891, technique: "акварель", genre: "пейзаж", theme: "луг", size: "22x28", tags: "#акварель #луг #цветы", image: "" },
        { id: 16, title: "Зимнее утро", year: 1899, technique: "масло", genre: "пейзаж", theme: "зима", size: "32x42", tags: "#масло #зима #утро", image: "" },
        { id: 17, title: "Портрет девушки", year: 1886, technique: "масло", genre: "портрет", theme: "портрет", size: "25x30", tags: "#масло #портрет #девушка", image: "" },
        { id: 18, title: "Старый замок", year: 1895, technique: "акрил", genre: "городской", theme: "архитектура", size: "28x35", tags: "#акрил #замок #архитектура", image: "" },
        { id: 19, title: "Морской берег", year: 1893, technique: "масло", genre: "марина", theme: "море", size: "30x40", tags: "#масло #море #берег", image: "" },
        { id: 20, title: "Виноград", year: 1889, technique: "акварель", genre: "натюрморт", theme: "фрукты", size: "18x24", tags: "#акварель #виноград #натюрморт", image: "" },
        { id: 21, title: "Лунная ночь", year: 1898, technique: "масло", genre: "пейзаж", theme: "ночь", size: "35x45", tags: "#масло #ночь #луна", image: "" },
        { id: 22, title: "Утренний туман", year: 1892, technique: "акрил", genre: "пейзаж", theme: "туман", size: "28x38", tags: "#акрил #туман #утро", image: "" },
        { id: 23, title: "Сбор урожая", year: 1894, technique: "масло", genre: "жанровая", theme: "сельская жизнь", size: "32x42", tags: "#масло #урожай #деревня", image: "" },
        { id: 24, title: "Речной пейзаж", year: 1890, technique: "акварель", genre: "пейзаж", theme: "река", size: "20x28", tags: "#акварель #река #пейзаж", image: "" },
        { id: 25, title: "Тихая гавань", year: 1897, technique: "масло", genre: "марина", theme: "гавань", size: "35x45", tags: "#масло #гавань #лодки", image: "" },
        { id: 26, title: "Цветы в вазе", year: 1888, technique: "акрил", genre: "натюрморт", theme: "цветы", size: "22x28", tags: "#акрил #цветы #ваза", image: "" },
        { id: 27, title: "Гроза", year: 1896, technique: "масло", genre: "пейзаж", theme: "гроза", size: "30x40", tags: "#масло #гроза #небо", image: "" },
        { id: 28, title: "Старый дуб", year: 1887, technique: "акварель", genre: "пейзаж", theme: "деревья", size: "25x32", tags: "#акварель #дуб #дерево", image: "" },
        { id: 29, title: "Первый снег", year: 1900, technique: "масло", genre: "пейзаж", theme: "зима", size: "28x38", tags: "#масло #снег #зима", image: "" },
        { id: 30, title: "Вечерний бриз", year: 1895, technique: "акрил", genre: "марина", theme: "море", size: "30x42", tags: "#акрил #море #бриз", image: "" }
    ]);

    // Состояния для фильтров
    const [period, setPeriod] = useState("");
    const [technique, setTechnique] = useState("");
    const [genre, setGenre] = useState("");
    const [theme, setTheme] = useState("");
    const [sortType, setSortType] = useState("period");

    // Уникальные значения для фильтров (из данных)
    const periods = [...new Set(allWorks.map(w => w.year))].sort();
    const techniques = [...new Set(allWorks.map(w => w.technique))];
    const genres = [...new Set(allWorks.map(w => w.genre))];
    const themes = [...new Set(allWorks.map(w => w.theme))];

    // Обработчики
    const handlePeriodChange = (e) => setPeriod(e.target.value);
    const handleTechniqueChange = (e) => setTechnique(e.target.value);
    const handleGenreChange = (e) => setGenre(e.target.value);
    const handleThemeChange = (e) => setTheme(e.target.value);
    const handleSortChange = (e) => setSortType(e.target.value);

    // 🔥 ФИЛЬТРАЦИЯ + СОРТИРОВКА
    const filteredAndSortedWorks = useMemo(() => {
        let result = [...allWorks];

        // Фильтр по периоду
        if (period) {
            result = result.filter(work => work.year.toString() === period);
        }

        // Фильтр по технике
        if (technique) {
            result = result.filter(work => work.technique === technique);
        }

        // Фильтр по жанру
        if (genre) {
            result = result.filter(work => work.genre === genre);
        }

        // Фильтр по теме
        if (theme) {
            result = result.filter(work => work.theme === theme);
        }

        // Сортировка
        switch(sortType) {
            case "period":
                result.sort((a, b) => a.year - b.year);
                break;
            case "technique":
                result.sort((a, b) => a.technique.localeCompare(b.technique));
                break;
            case "genre":
                result.sort((a, b) => a.genre.localeCompare(b.genre));
                break;
            case "theme":
                result.sort((a, b) => a.theme.localeCompare(b.theme));
                break;
            default:
                break;
        }

        return result;
    }, [allWorks, period, technique, genre, theme, sortType]);

    // Сброс всех фильтров
    const resetFilters = () => {
        setPeriod("");
        setTechnique("");
        setGenre("");
        setTheme("");
        setSortType("period");
    };

    return (
        <section className='secGalery'>
            <div className="Collectionh2">
                <h2>Виртуальная галерея</h2>
                <p>Интерактивная экспозиция работ О.А. Мелехова</p>
            </div>
            
            <div className="filtresMain">
                <div className="filtres">
                    {/* Фильтр по периодам */}
                    <label className='filtr1'>
                        <p>Период</p>
                        <select value={period} onChange={handlePeriodChange}>
                            <option value="">Все периоды</option>
                            {periods.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </label>

                    {/* Фильтр по технике */}
                    <label className='filtr1'>
                        <p>Техника</p>
                        <select value={technique} onChange={handleTechniqueChange}>
                            <option value="">Все техники</option>
                            {techniques.map(tech => (
                                <option key={tech} value={tech}>{tech}</option>
                            ))}
                        </select>
                    </label>

                    {/* Фильтр по жанру */}
                    <label className='filtr1 filtr2'>
                        <p>Жанр</p>
                        <select value={genre} onChange={handleGenreChange}>
                            <option value="">Все жанры</option>
                            {genres.map(g => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </label>

                    {/* Фильтр по теме */}
                    <label className='filtr1'>
                        <p>Тема</p>
                        <select value={theme} onChange={handleThemeChange}>
                            <option value="">Все темы</option>
                            {themes.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </label>
                </div>
                
                <div className="sorts">
                    <button onClick={resetFilters}>Сбросить фильтры</button>
                    <select value={sortType} onChange={handleSortChange}>
                        <option value="period">Сортировка: по годам ↑</option>
                        <option value="technique">Сортировка: по технике</option>
                        <option value="genre">Сортировка: по жанру</option>
                        <option value="theme">Сортировка: по теме</option>
                    </select>
                </div>
            </div>

            <div className="worksFounded">
                <div className='worksFoundedP'>
                    <p>Найдено работ: {filteredAndSortedWorks.length} из {allWorks.length}</p>
                </div>
                <div className="works">
                    {filteredAndSortedWorks.map(work => (
                        
                        <div key={work.id} className="work">
                            <img src="" alt="" />
                            <div className="work-image-placeholder">
                                {work.image ? (
                                    <img src={work.image} alt={work.title} />
                                ) : (
                                    <div className="no-image"></div>
                                )}
                            </div>  
                            <h1>{work.title}</h1>
                            <h3>{work.year}, {work.size}</h3>
                            <h6>{work.tags}, {work.technique}, {work.genre}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}