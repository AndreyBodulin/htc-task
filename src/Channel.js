import react from "react";
import './App.css';

function Channel_item(props){
    return(
        <div className='channel_item'>
            <img className='channel_logo' src={ 'assets/' + props.logo + '.png'} atl='no logo'/>
            <span className='channel_name'>{props.channel_name}</span>
            <div className='timetable'>
                <span className='timetable_item_active'>{props.timetable1}</span>
                <span className='timetable_item'>{props.timetable2}</span>
                <span className='timetable_item'>{props.timetable3}</span>
            </div>
        </div>
    )
};
function Channels(props){
    return(
        <div className='channels container'>
            <Channel_item logo='first' channel_name='Первый канал' timetable1 = '13:00  Новости (с субтитрами)' timetable2='14:00  Давай поженимся' timetable3='15:00  Другие новости'/>
            <Channel_item logo='2x2' channel_name='2x2' timetable1 = '13:00  МУЛЬТ ТВ. Сезон 4, 7 серия' timetable2='14:00  ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия' timetable3='15:00  БУРДАШЕВ. Сезон 1, 20 серия'/>
            <Channel_item logo='rbc' channel_name='РБК' timetable1 = '13:00  ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС' timetable2='14:00  ДЕНЬ. Главные темы' timetable3='15:00  Главные новости'/>
            <Channel_item logo='amedia' channel_name='AMEDIA PREMIUM' timetable1 = '13:00  Клиент всегда мёртв' timetable2='14:00  Голодные игры: Сойка-пересмешница. Часть I' timetable3='15:00  Секс в большом городе'/>
        </div>

    )
};
export default Channels;