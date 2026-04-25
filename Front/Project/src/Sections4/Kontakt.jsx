
import './kontakt.css'
import card from './img/CardImg.png'
import call from './img/Call.png'
import mess from './img/mess.png'
import { useState } from 'react'
export default function Kontakt(){
     const [message, setMessage] = useState('')
    const maxLength = 500 

    const handleMessageChange = (e) => {
        const value = e.target.value
        if (value.length <= maxLength) {
            setMessage(value)
        }
    }
    return(
        <>
        <div className="Collectionh2">
                <h2>Контакты</h2>
                <p> Свяжитесь с нами по любым вопросам</p>
        </div>
        <section className='contactMain'>
            <div className="contTop">
                <div className="contThemes">
                    <p>Темы: </p>
                </div>
                <div className="contSend">
                    <p>Отправить сообщение</p>
                </div>
            </div>
            <div className="contBottom">
                <div className="contBotLeft">
                    
            <div className="contBlocks">
                <div className="contBlockTop">
                    <h5>Галереи и музеи</h5>
                    <h6>Заинтересованы в организации выставки работ О.А. Мелехова?</h6>
                </div> 
                <div className="contBlockBot">
                    <h5>Коллекционеры</h5>
                    <h6>По вопросам приобретения работ художника
                         обращайтесь по *отдельной почте (предположительно первая) </h6>

                </div>
            </div>
            <div className="contBlocks">
                <div className="contBlockTop">
                    <h5>СМИ и издательства</h5>
                    <h6>Для получения пресс материалов и организации интервью 
                        пишите на *отдельную почту (предположительно вторая)</h6>
                </div>
                <hr />
                <div className="contBlockBot">
                    <h5>Образовательные учреждения</h5>
                    <h6>Организация мастер классов 
                        лекций и образовательных программ для студентов и учащихся </h6>

                </div>
            </div>
                </div>
                <div className='contBotRight'>
                    <div className="contLabels">
                        <label htmlFor="" className='label1Contact'>
                        <p>Имя</p>
                        <input type="text"  />
                    </label>
                     <label htmlFor="" className='label1Contact'>
                        <p>Email</p>
                        <input type="email"  />
                    </label>
                     <label htmlFor="" className='label1Contact'>
                        <p>Тема</p>
                        <input type="text"  />
                    </label>
                     <label htmlFor="" className='label1Contact label2Contact'>
                        <p>Сообщение</p>
                        <textarea 
                value={message}
                onChange={handleMessageChange}
                maxLength={maxLength}
                rows={5}/> 
                <h6>{maxLength - message.length }/500</h6>
                    </label>
                    </div>
                    <div className="checkboxcontact">
                        <input type="checkbox" />
                        <p>Я соглашаюсь на обработку персональных данных. </p>
                    </div>
                 <div className="butForContact">
                       <button>Отправить сообщение </button>
                 </div>
                </div>
            </div>
        </section>
        <section className='AddresContact'>
            <h1>Адрес музея</h1>
            <div className="addresBloc">
                <div className="adressPic"><img src={card} alt="" /></div>
                <div className="adressCards">
                    <div className="adresCard1 adresCard2">
                       <div className="imgsForCards">
                         <img src={call} alt="" />
                         <img src={mess} alt="" />
                         <img src={call} alt="" />
                       </div>
                        <div className="AdresCardText">
                            <h5>Адресс <br />г. Светлогорск,</h5>
                            <h6>10:00-20:00</h6>
                        </div>
                    </div>
                    <div className="adresCard1 ">
                       <div className="imgsForCards">
                         <img src={mess} alt="" /> 
                       </div>
                        <div className="AdresCardText">
                            <h5>Email </h5>
                            <h6>example@gmail.com</h6>
                        </div>
                    </div>
                    <div className="adresCard1">
                       <div className="imgsForCards">
                         <img src={call} alt="" /> 
                       </div>
                        <div className="AdresCardText">
                            <h5>Телефон</h5>
                            <h6> +7 (000) XX XX</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}