import './App.css';
import React from 'react';
import Film from './Film';
import Teatr from './Teatr';
import Musica from './Musica';
import Favorites from './Favorites'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

function App() {

  function returnSelectedEvent(param){            //функция для получения выбранного события из дочернего элемента
    if(!poster.favorites.includes(param)) {       //если событие в списке отсутствует(includes()), 
          if (param !== undefined) {
          poster.favorites.push(param);           //добавляем событие
          }
        }
  }

  const poster = {
    cinema: [
        {
         id: "cinema1",
         Genre: "adventures",
         Premiere: "February 10, 2022",
         Starring: "Tom Holland, Mark Wahlberg, Antonio Banderas, Sophia Taylor Ali, Tati Gabriel, Patricia Meaden, Sarah Jacqueline Petric",
         Time: "115 min",
         Country: "USA, Spain",
         Title: "Uncharted",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/23222/28145492cfa537d193b81a01c7558ef9/s190x280",
         Description: "Нейтан Дрейк и Виктор «Салли» Салливан, два искателя приключений, отправляются на поиски величайшего сокровища мира. Кроме того, они надеются найти улики, которые приведут их к давно потерянному брату Нейтана.",
        },
         {
         id: "cinema2",
         Genre: "drama",
         Premiere: "February 23, 2022",
         Starring: "Viktor Khorinyak, Sergey Bezrukov, Angelina Strechina, Inga Oboldina, Evgenia Dmitrieva, Andrei Titchenko, Oleg Chugunov, Viktor Verzhbitsky, Irina Romasheva, Valery Sklyarov, Maxim Antonnikov, Nelya Garyaeva-Vildanova, Evdokia Lavrukhina, Andrei Sergeev, Anton Bystryakov, Dmitry Nikishkin, Viktor Babyuk, Lyudmila GrigorashKonnas Denis Classenis",
         Time: "117 min",
         Country: "Russia",
         Title: "Мистер Нокаут",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/23222/72677b6197624d9122a192e4b1e30ed6/s190x280",
         Description: "История жизни и приключений легендарного советского боксёра Валерия Попенченко, чемпиона СССР, Европы и победителя Олимпийских игр 1964 года в Токио — о его детстве в суворовском училище в Ташкенте, о службе курсантом-пограничником, о его первых успехах и неудачах, и о его дружбе с тренером спортивного общества «Динамо» Григорием Кусикьянцем. История о том, что в любом, даже самом престижном поединке, для спортсмена главное — преодолеть себя, свои страхи и слабости, и только тогда можно будет одержать настоящую победу.",
         },
         {
         id: "cinema3",
         Genre: "comedy",
         Premiere: "March 5, 2022",
         Starring: "Milos Bikovich, Kristina Asmus, Marina Alexandrova, Sergey Gilev, Yuliya Aug, Oleg Komarov, Anastasia Ukolova, Agniya Kuznetsova, Nadezhda Sysoeva, Anna Tsukanova-Kott, Evgenia Akhremenko, Evgeny Kartashov, Igor Negodyaev, Rina Klimenko, Evgenia Tkacheva",
         Time: "106 min",
         Country: "Russia",
         Title: "Хочу замуж",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/23114/7882d6d8714172d808d2640ba7488a55/s190x280",
         Description: "У журналистки Любы всё идёт по плану: работа ведущей на телеканале, успешный и богатый жених Роберт. План катится к чертям, когда у Любы садится телефон, и она просит позвонить с телефона случайного прохожего. Им оказался Сергей, у которого тоже жизнь текла спокойно и размеренно до этого дня. Эта встреча запустит череду событий, которая полностью поменяет и жизнь Любы и Сергея, и их самих.",
         },
    ],
    performance: [
        {
         id: "performance1",
         Title: "Алексей Каренин",
         StageDirector: "Drama Theater of Udmurtia",
         Directed: "Konstantin Soldatov",
         Time: "170 min",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/29882/dba9498e6cf76659ba44aeeac7fbe468/s272x146",
         Description: "Лонг-лист фестиваля «Золотая маска» 2021 года. Лауреат Международного фестиваля русских театров национальных республик России и зарубежных стран «Мост дружбы» (Йошкар-Ола) 2020. «Все счастливые семьи похожи друг на друга, каждая несчастная семья несчастлива по-своему», – так начинается роман Льва Толстого «Анна Каренина». Казалось бы, про него известно все: красавица Анна полюбила блестящего офицера Вронского, а бесчувственный муж-сухарь не дает ей развода, разлучает с сыном... Но драматург Василий Сигарев и режиссер Константин Солдатов смотрят на эту ситуацию совсем с другой стороны – глазами Алексея Каренина. И тогда раскрывается еще одна драма, драма не менее сильного чувства – любви мужа, пытающегося отстоять свою семью, свое счастье.",
         },
        {
         id: "performance2",
         Title: "Ужин дураков",
         StageDirector: "Russian Drama Theater of Udmurtia",
         Directed: "Michel Poli",
         Time: "120 min",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/23114/5879ff4a816005dc11eb0dfca415e0c7/s272x146",
         Description: "Пьеса «Ужин дураков» написана в жанре «комедии положений». Раз в неделю компания влиятельных господ устраивает ужин, на который каждый участник должен привести с собой одного дурака. Тот, чей «экземпляр» окажется самым убедительным, выигрывает приз. Когда очередь пригласить гостя дошла до Пьера, он очень обрадовался. Ведь накануне Пьер как раз познакомился с умопомрачительным, фантастическим дураком Франсуа Пиньоном. Но позвав его на ужин, Пьер и представить себе не мог, чем это для него обернётся… Французский сценарист, драматург и режиссёр Франсис Вебер хорошо знаком российским зрителям. Этот известный мастер изящных комедий написал сценарии и снял такие фильмы как «Высокий блондин в чёрном ботинке», «Игрушка», «Папаши», «Невезучие», «Зануда», «Ягуар», в которых снимались звезды французского кинематографа Пьер Ришар, Жан Рено, Жерар Депардье, Жак Брель, Лино Вентура.",
         },
        {
         id: "performance3",
         Title:"Собачье сердце",
         StageDirector: "Creativity",
         Directed: "Ludmila Vergasova",
         Time: "120 min",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/36842/1c79ccc45e3f84bdce4e4c44fe0f9d34/s272x146",
         Description: "Сегодня, как никогда интересна история, созданная одним из величайших писателей 20 века Михаилом Булгаковым, 130-летие которого мы отмечаем в 2021 году. В основе спектакля одноименное произведение Михаила Булгакова, «Собачье сердце». Вас никоим образом не разочарует Игорь Ливанов и Павел Белозеров в роли Филипп Филипповича Преображенского и Михаил Химичев в роли Борменталя, Константин Богданов и Евгений Воскресенский в роли Швондера, а Вячеслав Гришечкин и Елена Медведева, Елена Кибалова исполняют по несколько ролей. Антон Богданов знакомый нам и по «Реальным пацанам» и по многим фильмам, включая абсолютное зрительские фавориты — «Т-34» и «Огонь» по-другому интерпретирует образ Шарикова — от совершенно очаровательной псины до образа уродливого разрушителя. В состав исполнителей могут быть внесены изменения без дополнительного уведомления.",
         }
    ],
    concert: [
        {
         id: "concert1",
         Title: "Jony",
         Genre: "rap hip hop ",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/21422/2b50205727442bf817f20d59163f4a70/s272x146",
         Description: "Jony (Джахид Гусейнли) — российский музыкант родом из Азербайджана. В копилке артиста — совместные проекты с популярными исполнителями El'man'ом, Andro, Emin'ом и Мотом и награды в номинациях Жара Music Awards.",
         },
        {
         id: "concert2",
         Title: "Ирина Круг",
         Genre: "chanson",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/34116/490203b698ac5fd21406c72d23444226/s272x146",
         Description: "Королева российского шансона Ирина Круг представит новую программу «Ты сердце и душа». Зрителей ждет концерт из самых популярных и искренних песен певицы, находящих отклик в сердцах тысяч людей. Чувственная, красивая, душевная Ирина Круг, обладательница большого сердца и чарующего тембра голоса, спешит выступить перед своими фанатами и новыми поклонниками! Песни Ирины Круг своей мелодичностью трогают до глубины души, и концерт превращается в искренний разговор с близким и родным человеком, который смог преодолеть все трудности и невзгоды и воплотить свои мечты в жизнь и готов поделиться всем этим со зрителями. Пронизывающая атмосфера позволит не только задуматься и помечтать, но и даст массу ярких и светлых эмоций, которые вырвутся наружу, и вам захочется танцевать. Именно этот искренний фейерверк переживаний ощущаешь на концерте певицы. Ирина Круг и ее новая программа «Ты сердце и душа» не оставят равнодушным ни одного зрителя. Приходите!",
         },
        {
         id: "concert3",
         Title: "Дора",
         Genre: "indi",
         Poster: "https://avatars.mds.yandex.net/get-afishanew/23114/57a86627db7aab70a10d8037ed83e452/s272x146",
         Description: "Дора — восходящая звезда российской эстрады. Поклонники обожают её за милый образ, сильный голос и попадающие в самое подростковое сердце тексты. Дора не вписывается в рамки стандартных музыкальных жанров и называет свою музыку кьют-роком. Певица стремительно завоёвывает сердца фанатов, покоряет ТВ и набирает десятки миллионов просмотров клипов на YouTube. Юная и смелая певица Дора — девушка, которая сочетает в своих песнях, казалось бы, несовместимые вещи: под тяжёлый аккомпанемент гитар и ударных она тоненьким голоском поёт про подростковую жизнь, влюбленности и разочарования.",
         },
    ],
    favorites: []
  }
    function pic() {
      return <Film post={poster} childToParent={returnSelectedEvent} />;
    }
    function teatr() {
      return <Teatr post={poster} childToParent={returnSelectedEvent} />;
    }
    function musica() {
      return <Musica post={poster} childToParent={returnSelectedEvent} />;
    }
    function favorites() {
      return <Favorites post={poster} childToParent={returnSelectedEvent} />;
    }
    function notFound() {
      return <h1>Not Found</h1>
    }
    
    
  return (
    <div className="App">
      <Router>
      <div className="header">
        <div>
            <h1 className="headerH1">Афиша Ижевска</h1>
        </div>        
        <div className='linkBox'>
          <Link className='link' to="/pic">Cinema</Link>    
          <Link className='link' to="/teatr">Performance</Link>
          <Link className='link' to="/musica">Concert</Link> 
          <Link className='link' to="/favorites">Favorites</Link>  
        </div>         
      </div>          
        <Switch>
          <Route path="/pic" component={pic} />
          <Route path="/teatr" component={teatr} />
          <Route path="/musica" component={musica} />
          <Route path="/favorites" component={favorites} />
          <Route component={notFound}/>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
