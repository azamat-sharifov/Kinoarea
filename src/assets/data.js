import NavLogo from '../assets/icons/nav-logo.svg'
import AppsIcons from '../assets/icons/apps-icons.svg'
import LikeBtn1 from '../assets/icons/like-btn1.svg'
import LikeBtn2 from '../assets/icons/like-btn2.svg'
import SearchIcons from '../assets/icons/search-icons.svg'
import ArrowIcons from '../assets/icons/arrow-right.svg'
import LeftIcons from '../assets/icons/left-icons.svg'
import RightIcons from '../assets/icons/right-icons.svg'
import FooterIcons from '../assets/icons/footer-icons.svg'
import FooterAppIcon from '../assets/icons/footerapp-icons.svg'
// Images 
import HeroImg from '../assets/images/hero-img.png'
import HeroCard1 from '../assets/images/card-img1.png'
import HeroCard2 from '../assets/images/card-img2.png'
import HeroCard3 from '../assets/images/card-img3.png'
import HeroCard4 from '../assets/images/card-img4.png'
import HeroCard5 from '../assets/images/card-img5.png'
import HeroCard6 from '../assets/images/card-img6.png'
import HeroCard7 from '../assets/images/card-img7.png'
import HeroCard8 from '../assets/images/card-img8.png'
import NewImg from '../assets/images/new-img.png'
import NewImg1 from '../assets/images/new-img1.png'
import NewImg3 from '../assets/images/new-img3.png'
import NewImg4 from '../assets/images/new-img4.png'
import NewCard1 from '../assets/images/new-card1.png'
import NewCard2 from '../assets/images/new-card2.png'
import NewCard3 from '../assets/images/new-card3.png'
import NewCard4 from '../assets/images/new-card4.png'
import BestCard1 from '../assets/images/best-card1.png'
import BestCard2 from '../assets/images/best-card2.png'
import BestCard3 from '../assets/images/best-card3.png'
import BestCard4 from '../assets/images/best-card4.png'
import PeopleImg1 from '../assets/images/people-img.png'
import PeopleImg2 from '../assets/images/people-img2.png'
import LaImg from '../assets/images/La-img.png'
import LaImg1 from '../assets/images/la-img1.png'
import LaImg2 from '../assets/images/la-img2.png'
import LaImg3 from '../assets/images/la-img3.png'
import LaImg4 from '../assets/images/la-img4.png'
import NewItems1 from '../assets/images/ex-img1.png'
import NewItems2 from '../assets/images/ex-img2.png'
import NewItems3 from '../assets/images/ex-img3.png'
import NewItems4 from '../assets/images/ex-img4.png'
import BoxImg1 from '../assets/images/box-img1.png'
import BoxImg2 from '../assets/images/box-img2.png'
import BoxImg3 from '../assets/images/box-img3.png'
import BoxImg4 from '../assets/images/box-img4.png'
import BoxImg5 from '../assets/images/box-img5.png'
import FooterImg from '../assets/images/footer-img.png'

const HeroCards = [
    {
        id: 1,
        img: HeroCard1,
        tittle: 'Побег из Претории',
        addilition: 'Триллер'
    },
    {
        id: 2,
        img: HeroCard2,
        tittle: 'Джокер',
        addilition: 'Триллер, драма, криминал'
    },
    {
        id: 3,
        img: HeroCard3,
        tittle: 'Звёздные войны: Скайуокер. Восход',
        addilition: 'Фантастика, фэнтези, боевик, приключения'
    },
    {
        id: 4,
        img: HeroCard4,
        tittle: 'Джентльмены',
        addilition: 'Боевик, комедия, криминал'
    },
    {
        id: 5,
        img: HeroCard5,
        tittle: 'Ford против Ferrari',
        addilition: 'Биография, спорт, драма, боевик'
    },
    {
        id: 6,
        img: HeroCard6,
        tittle: '3022',
        addilition: 'Фантастика, триллер'
    },
    {
        id: 7,
        img: HeroCard7,
        tittle: 'Хищные птицы: Потрясающая история Харли Квинн',
        addilition: 'Боевик, криминал, комедия'
    },
    {
        id: 8,
        img: HeroCard8,
        tittle: 'Плохие парни навсегда',
        addilition: 'Боевик, комедия, криминал'
    },
]

const BestCards = [
    {
        id: 1,
        img: BestCard1,
        tittle: 'Джокер',
        addilition: 'Триллер, драма, криминал'
    },
    {
        id: 2,
        img: BestCard2,
        tittle: 'История игрушек 4',
        addilition: 'Мультфильм, фэнтези, комедия, приключения ...'
    },
    {
        id: 3,
        img: BestCard3,
        tittle: 'Однажды в… Голливуде',
        addilition: 'Драма, комедия'
    },
    {
        id: 4,
        img: BestCard4,
        tittle: 'Солнцестояние',
        addilition: 'Ужасы, триллер, драма'
    },
    {
        id: 1,
        img: BestCard1,
        tittle: 'Джокер',
        addilition: 'Триллер, драма, криминал'
    },
    {
        id: 2,
        img: BestCard2,
        tittle: 'История игрушек 4',
        addilition: 'Мультфильм, фэнтези, комедия, приключения ...'
    },
    {
        id: 3,
        img: BestCard3,
        tittle: 'Однажды в… Голливуде',
        addilition: 'Драма, комедия'
    },
    {
        id: 4,
        img: BestCard4,
        tittle: 'Солнцестояние',
        addilition: 'Ужасы, триллер, драма'
    },
]

const ExpectedCards = [
    {
        id: 1,
        img: NewItems1,
        tittle: 'Побег из Претории',
        addilition: '14 мая 2020 в России'
    },
    {
        id: 2,
        img: NewItems2,
        tittle: 'Прощай',
        addilition: '14 мая 2020 в России'
    },
    {
        id: 3,
        img: NewItems3,
        tittle: 'Дружить по-русски!',
        addilition: '21 мая 2020 в России'
    },
    {
        id: 4,
        img: NewItems4,
        tittle: 'Приди ко мне',
        addilition: '21 мая 2020 в России'
    },
    {
        id: 1,
        img: NewItems1,
        tittle: 'Побег из Претории',
        addilition: '14 мая 2020 в России'
    },
    {
        id: 2,
        img: NewItems2,
        tittle: 'Прощай',
        addilition: '14 мая 2020 в России'
    },
    {
        id: 3,
        img: NewItems3,
        tittle: 'Дружить по-русски!',
        addilition: '21 мая 2020 в России'
    },
    {
        id: 4,
        img: NewItems4,
        tittle: 'Приди ко мне',
        addilition: '21 мая 2020 в России'
    },
]

const BoxOfficeCards = [
    {
        id: 1,
        img: BoxImg1,
        tittle: '1. Бладшот',
        price: '$13 млн',
        addilition: '$15.1 млн за 4 недели'
    },
    {
        id: 2,
        img: BoxImg2,
        tittle: '2. Вперёд',
        price: '$6.8 млн',
        addilition: '$41.4 млн за 4 недели'
    },
    {
        id: 3,
        img: BoxImg3,
        tittle: '3. Человек',
        price: '$6.2 млн',
        addilition: '$58.3 млн за 3 недели'
    },
    {
        id: 4,
        img: BoxImg4,
        tittle: '4. Соник в кино',
        price: '$2.9 млн',
        addilition: '$15.1 млн за 4 недели'
    },
    {
        id: 5,
        img: BoxImg5,
        tittle: '5. Джентльмены',
        price: '$1.8 млн',
        addilition: '$78.7 млн за 11'
    },
]

export {
    LikeBtn1,
    LikeBtn2,
    NavLogo,
    AppsIcons,
    SearchIcons,
    HeroImg,
    HeroCards,
    ArrowIcons,
    NewImg,
    NewImg1,
    NewImg3,
    NewImg4,
    NewCard1,
    NewCard2,
    NewCard3,
    NewCard4,
    BestCards,
    PeopleImg1,
    PeopleImg2,
    LaImg,
    LaImg1,
    LaImg2,
    LaImg3,
    LaImg4, 
    LeftIcons,
    RightIcons,
    ExpectedCards,
    BoxOfficeCards,
    FooterIcons,
    FooterImg,
    FooterAppIcon,
}