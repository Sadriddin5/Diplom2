import './collection.css'
import { useState, useMemo, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Collection() {

    const [allWorks, setAllWorks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [searchQuery, setSearchQuery] = useState("")
    const [sortType, setSortType] = useState("year")

    const API_URL = 'http://82.97.252.48/api/artworks/artworks/'

    const didLoad = useRef(false)

    // 🔥 загрузка с сервера
    useEffect(() => {
        if (didLoad.current) return
        didLoad.current = true

        const loadData = async () => {
            try {
                setLoading(true)

                const res = await axios.get(API_URL)

                setAllWorks(res.data)

            } catch (e) {
                console.error(e)
                setError("Ошибка загрузки")
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    const handleSearchChange = (e) => setSearchQuery(e.target.value)
    const handleSortChange = (e) => setSortType(e.target.value)

    // 🔥 поиск + сортировка (НЕ ТРОГАЕМ ЛОГИКУ)
    const filteredAndSortedWorks = useMemo(() => {
        let result = [...allWorks]

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()

            result = result.filter(work =>
                (work.title || "").toLowerCase().includes(query) ||
                (work.description || "").toLowerCase().includes(query) ||
                (work.genre || "").toLowerCase().includes(query) ||
                (work.theme || "").toLowerCase().includes(query) ||
                (work.technique || "").toLowerCase().includes(query) ||
                (work.year || "").toString().includes(query)
            )
        }

        switch (sortType) {
            case "year":
                result.sort((a, b) => (a.year || 0) - (b.year || 0))
                break
            case "year-desc":
                result.sort((a, b) => (b.year || 0) - (a.year || 0))
                break
            case "title":
                result.sort((a, b) => (a.title || "").localeCompare(b.title || ""))
                break
            default:
                break
        }

        return result
    }, [allWorks, searchQuery, sortType])

    // 🔄 состояния загрузки
    if (loading) return <div>Загрузка...</div>
    if (error) return <div>{error}</div>

    return (
        <>
            <div className="Collectionh2">
                <h2>Коллекция</h2>
                <p>Полный каталог работ</p>
            </div>

            <div className="collSort1">
                <div className="ColSortMain">
                    <label>
                        <p>Поиск</p>
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </label>

                    <label> 
                        <select value={sortType} onChange={handleSortChange}>
                            <option value="year">По году ↑</option>
                            <option value="year-desc">По году ↓</option>
                            <option value="title">По названию</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="worksFounded">
                <div className='worksFoundedP'>
                    <p>Найдено: {filteredAndSortedWorks.length}</p>
                </div>

                <div className="works">
                    {filteredAndSortedWorks.map(work => (
                        <div key={work.id} className="work">

                           
                            <div className="work-image-placeholder">
                                {work.image_url ? (
                                    <img src={work.image_url} alt={work.title} />
                                ) : (
                                    <div className="no-image"></div>
                                )}
                            </div>
                             <div className="work-year-large">
                                <p>{work.year}</p>
                            </div>


                            <div className="work-info">
                                <h1>{work.title}</h1>
                               

                                <h6 className="work-description">
                                    {work.description || "Описание отсутствует"}
                                </h6>

                                <h6>
                                    {work.size && `Размеры: ${work.size}`}
                                </h6>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}