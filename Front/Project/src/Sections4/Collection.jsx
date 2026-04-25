import './collection.css'
import { useState, useMemo } from 'react'

export default function Collection() {
   const [allWorks] = useState([
    { id: 1, title: "Портрет", year: 2000, description: "Выразительный портрет", size: "50 x 70 см", genre: "портрет", theme: "человек", technique: "масло" },
    { id: 2, title: "Пейзаж", year: 1998, description: "Летний пейзаж с рекой", size: "60 x 80 см", genre: "пейзаж", theme: "природа", technique: "масло" },
    { id: 3, title: "Натюрморт", year: 2005, description: "Натюрморт с фруктами", size: "40 x 50 см", genre: "натюрморт", theme: "фрукты", technique: "акрил" },
    { id: 4, title: "Марина", year: 2010, description: "Морской пейзаж", size: "70 x 90 см", genre: "марина", theme: "море", technique: "акварель" },
    { id: 5, title: "Городской пейзаж", year: 2015, description: "Вечерний город", size: "80 x 100 см", genre: "городской", theme: "архитектура", technique: "масло" },
    { id: 6, title: "Автопортрет", year: 2003, description: "Автопортрет в мастерской", size: "45 x 60 см", genre: "портрет", theme: "человек", technique: "масло" },
    { id: 7, title: "Зимний лес", year: 2012, description: "Заснеженный лес", size: "55 x 75 см", genre: "пейзаж", theme: "зима", technique: "акрил" },
    { id: 8, title: "Цветы в вазе", year: 2008, description: "Букет полевых цветов", size: "35 x 45 см", genre: "натюрморт", theme: "цветы", technique: "акварель" },
    { id: 9, title: "Старая мельница", year: 1995, description: "Мельница у реки", size: "65 x 85 см", genre: "пейзаж", theme: "деревня", technique: "масло" }
])

    const [searchQuery, setSearchQuery] = useState("")
    const [sortType, setSortType] = useState("year")

    const handleSearchChange = (e) => setSearchQuery(e.target.value)
    const handleSortChange = (e) => setSortType(e.target.value)

    const filteredAndSortedWorks = useMemo(() => {
        let result = [...allWorks]

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            result = result.filter(work =>
                work.title.toLowerCase().includes(query) ||
                work.description.toLowerCase().includes(query) ||
                work.genre.toLowerCase().includes(query) ||
                work.theme.toLowerCase().includes(query) ||
                work.technique.toLowerCase().includes(query) ||
                work.year.toString().includes(query)
            )
        }

        switch (sortType) {
            case "year":
                result.sort((a, b) => a.year - b.year)
                break
            case "year-desc":
                result.sort((a, b) => b.year - a.year)
                break
            case "title":
                result.sort((a, b) => a.title.localeCompare(b.title))
                break
            default:
                break
        }

        return result
    }, [allWorks, searchQuery, sortType])

    return (
        <>
            <div className="Collectionh2">
                <h2>Коллекция</h2>
                <p>Полный каталог оцифрованных работ О.А. Мелехова</p>
            </div>

            <div className="collSort1">
                <div className="ColSortMain">
                    <label>
                        <p>Поиск</p>
                        <input
                            type="text"
                            placeholder="Поиск по названию или описанию..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </label>

                    <label> 
                        <select value={sortType} onChange={handleSortChange}>
                            <option value="year">Сортировка: по году ↑</option>
                            <option value="year-desc">Сортировка: по году ↓</option>
                            <option value="title">Сортировка: по названию</option>
                        </select>
                    </label>
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
                            <div className="work-year-large"><p>{work.year}</p></div>
                            <div className="work-image-placeholder">
                                {work.image ? (
                                    <img src={work.image} alt={work.title} />
                                ) : (
                                    <div className="no-image"></div>
                                )}
                            </div>
                            <div className="work-info">
                                <h1>{work.title}</h1>
                                <h3>{work.year} год</h3>
                                <h6 className="work-description">{work.description}</h6>
                                <h6>Размеры: {work.size}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}