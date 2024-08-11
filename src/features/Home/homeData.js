// images
import Logo from '../../assets/images/home/header/logo.svg';
import Architecture from '../../assets/images/home/services/architecture.jpg';
import Software from '../../assets/images/home/services/software.jpg';
import Marketing from '../../assets/images/home/services/marketing.jpg';
import Business from '../../assets/images/home/services/business.jpg';
import Translate from '../../assets/images/home/services/translate.jpg';
import CommunityImg1 from '../../assets/images/home/community/img1.jpg';
import CommunityImg2 from '../../assets/images/home/community/img2.jpg';
import CommunityImg3 from '../../assets/images/home/community/img3.jpg';
import CommunityImg4 from '../../assets/images/home/community/img4.jpg';
import JoinUs from '../../assets/images/home/join/joinus.jpg'
// icons
import UsersIcn from '../../assets/images/home/about/icons/users-icn.svg';
import CalendarIcn from '../../assets/images/home/services/icons/calendar.svg';
import CommunityIcn from '../../assets/images/home/community/icons/community-icn.svg';
import QuestionMarkIcn from '../../assets/images/home/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: '',
  btnSignupText: 'ورود / ثبت‌نام',
};

export const nav = [
  { name: 'خانه', href: '/' },
  { name: 'اهداف‌ما', href: '/' },
  { name: 'دسته‌بندی‌ها', href: '/' },
  { name: 'نظرات مشتریان', href: '/' },
  { name: 'سوالات شما', href: '/' },
];

export const banner = {
  titlePart1: 'انجام باکیفیت ',
  titlePart2: ' - پروژه‌ی شما',
  subtitle:
    'skillShare  به شما کمک می‌کند تا به راحتی با بهترین‌ها پروژه‌های خود را به نتیجه برسانید ',
  textBtn: 'ایجاد سریع پروژه',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'اهداف ما',
  subtitle1:
    'برونسپاری پروژه ها به فریلنسرهای حرفه ای مزایای زیادی برای کسب و کار شما داره. فریلنسرها به دلیل نداشتن هزینه های سربار اداری، دفتر کار و تبلیغات می تونن پروژه شما را با هزینه بسیار کمتری از شرکت ها انجام بدن.',
  subtitle2:
    ' همچنین به جای مراجعه به چندین شرکت و مجموعه می تونید به راحتی از میان بیش از دهها پیشنهاد انجام پروژه, پروژه‌ی موردنظر خود را انتخاب کنید و با استفاده از سیستم پرداخت امن با خیال راحت کار رو انجام بدید  .',
  link: 'شروع کنید',
};

export const services = {
  icon: CalendarIcn,
  title: 'دسته‌بندی‌ها',
  programs: [
    {
      image: Software,
      name: 'توسعه‌ نرم‌افزار و آی‌تی',
    },
    {
      image: Translate,
      name: 'تولید محتوا و ترجمه',
    },
    {
      image: Architecture,
      name: 'مهندسی و معماری',
    },
    {
      image: Marketing,
      name: 'بازاریابی و فروش',
    },
    {
      image: Business,
      name: 'کسب‌وکار',
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'نظرات مشتریان',
  testimonials: [
    {
      image: CommunityImg3,
      name: 'آرش زاد',
      message: '“ خدمات کارلنسر خیلی برای کسب و کار من مفید بود  . ”',
    },
    {
      image: CommunityImg1,
      name: 'مهندس فخری قربانی',
      message:
        '“به عنوان یک معمار دسترسی به متخصصین زمان وانرژی زیادی رواز من می‌گرفت. ”',
    },
    {
      image: CommunityImg2,
      name: 'بابک ایمانی فاضل',
      message:
        '“ من از بین اونها بهترین فریلنسرها رو برای پروژه‌ام انتخاب کردم. ”',
    },

    {
      image: CommunityImg4,
      name: 'شیوا علیزاده',
      message:
        '“  در این شرایط با وجود دورکاری حتی رشد خیلی زیادی هم داشتیم. ”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'پرسش‌های شما',
  accordions: [
    {
      question: ' skillShare چطور فریلنسرهای خود را ارزیابی می‌کند؟',
      answer:
        ' skillShare  مدارک همه فریلنسرها را بررسی کرده و در مورد توانایی‌هایشان با آن‌ها مصاحبه کرده است. درواقع سعی شده است برای هر موردی که در رزومه آمده است، مدرک مورد نظر نیز از ایشان دریافت شود.  .',
    },
    {
      question: ' skillShare چطور کارفرمایان خود را ارزیابی می‌کند؟',
      answer:
        ' skillShare مدارک همه کارفرمایان را بررسی کرده است. درواقع سعی شده است برای هر موردی که در رزومه آمده است، مدرک مورد نظر نیز از ایشان دریافت شود.  .',
    },
    {
      question: 'چطور می توانم فریلنسر موردنظر خود را پیدا کنم؟',
      answer:
        'تمام موارد لازم برای شناخت در پروفایل قرار دارد تا کارفرمایان به راحتی بتوانند به بررسی بپردازند و درخواست خود را ثبت کنند..',
    },
    {
      question: 'چطور می توانم پروژه‌ی موردنظر خود را پیدا کنم؟',
      answer:
        'تمام موارد لازم برای شناخت در پروژه قرار دارد تا فریلنسرها به راحتی بتوانند به بررسی بپردازند و درخواست خود را ثبت کنند..',
    },
    {
      question:
        'شفافیت قیمتی و تضمین پایین ترین قیمت در skillShare به چه معناست؟',
      answer:
        'بدلیل وجود بازار رقباتی , هم کارفرمایان هم فریلنسرها برای انتخاب پروژه یا فریلنسر آزادی عمل دارند.',
    },
  ],
};

export const join = {
  image: JoinUs,
  title: 'به ما بپیوندید',
  subtitle:
    ' با وجود اینکه این روش به شما امکان می‌دهد تا به راحتی به مشاغل جدید دست پیدا کنید، نیازمند مدیریت خوبی از زمان و منابع خود هستید. اگر می‌خواهید به عنوان یک فریلنسر موفق به موفقیت برسید، این مهم است که ابزارهای لازم را برای موفقیت خود فراهم کنید.',
  btnText: 'شروع کنید',
};

export const footer = {
  logo: Logo,
  copyrightText: 'تمام حقوق برای skillShare محفوظ است',
};
