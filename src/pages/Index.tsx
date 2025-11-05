import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreview, setPhotoPreview] = useState<string[]>([]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + photos.length > 5) {
      alert('Максимум 5 фотографий');
      return;
    }
    
    setPhotos([...photos, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
    setPhotoPreview(photoPreview.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Photos:', photos);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={32} />
            <h1 className="text-2xl font-serif font-bold text-primary">Clean Leaf</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">Прайс</a>
            <a href="#faq" className="text-foreground hover:text-accent transition-colors">Вопросы</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Деликатная<br />уборка в<br />сложных ситуациях
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы понимаем, насколько тяжело переживать утрату. Clean Leaf предоставляет специализированные услуги 
                по уборке помещений после смерти близких. Работаем тактично, конфиденциально и профессионально.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Консультация
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/571fd87a-c57e-4eb1-b268-9f13242a2d11/files/b5cbe530-0048-44ff-8cb2-81230c3cccb3.jpg" 
                alt="Чистое помещение" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-4xl font-serif font-bold text-primary mb-6">Мы здесь, чтобы помочь</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Потеря близкого человека — одно из самых тяжелых испытаний в жизни. Мы берем на себя всю сложную работу 
                по приведению помещения в порядок, чтобы вы могли сосредоточиться на важном.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <Card className="border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-primary/5 p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary rounded-lg">
                          <Icon name="Users" className="text-primary-foreground" size={32} />
                        </div>
                        <div>
                          <h4 className="text-2xl font-serif font-bold text-primary">Clean Leaf</h4>
                          <p className="text-muted-foreground">С 2018 года</p>
                        </div>
                      </div>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          <strong className="text-primary">Clean Leaf</strong> — специализированная клининговая компания, 
                          которая работает в самой деликатной сфере: уборка помещений после смерти людей.
                        </p>
                        <p>
                          Мы не просто клинеры. Мы — команда профессионалов, которые понимают, через что вы проходите. 
                          За 6 лет работы мы помогли более чем <strong className="text-primary">500 семьям</strong> справиться 
                          с этой сложной ситуацией.
                        </p>
                        <p>
                          Наша миссия — взять на себя всю тяжелую работу, чтобы вы могли сохранить светлую память 
                          о близком человеке, не сталкиваясь с тяжелыми последствиями.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 divide-x divide-border">
                      <div className="p-6 text-center">
                        <div className="text-3xl font-serif font-bold text-primary mb-1">500+</div>
                        <div className="text-sm text-muted-foreground">Выполненных<br/>заказов</div>
                      </div>
                      <div className="p-6 text-center">
                        <div className="text-3xl font-serif font-bold text-primary mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Работаем<br/>круглосуточно</div>
                      </div>
                      <div className="p-6 text-center">
                        <div className="text-3xl font-serif font-bold text-primary mb-1">6 лет</div>
                        <div className="text-sm text-muted-foreground">На рынке<br/>услуг</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name="Briefcase" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h5 className="text-lg font-serif font-semibold text-primary mb-2">Профессиональная команда</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        12 сертифицированных специалистов с медицинским образованием и допусками к работе 
                        с биологическими материалами. Регулярное обучение и повышение квалификации.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name="Wrench" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h5 className="text-lg font-serif font-semibold text-primary mb-2">Профессиональное оборудование</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Используем озонаторы, генераторы холодного тумана, HEPA-фильтры и специализированную 
                        химию класса Professional. Собственный автопарк для вывоза отходов.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name="HeartHandshake" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h5 className="text-lg font-serif font-semibold text-primary mb-2">Человечный подход</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Мы знаем, как тяжело в такие моменты. Работаем тактично, без лишних вопросов. 
                        Помогаем с документами и при необходимости рекомендуем психологов.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Heart" className="text-primary" size={36} />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-primary mb-3">Деликатность</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Работаем с уважением к вашим чувствам и памяти близких. Приезжаем без опознавательных знаков.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Shield" className="text-primary" size={36} />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-primary mb-3">Конфиденциальность</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    NDA с каждым клиентом. Никто не узнает о нашем визите. Полная защита ваших данных.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Clock" className="text-primary" size={36} />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-primary mb-3">Срочный выезд</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Готовы приехать в любое время суток. Выезд в течение 2 часов. Работаем без выходных.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Что входит в услугу</h3>
            <p className="text-lg text-muted-foreground">Полный комплекс работ по приведению помещения в порядок</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                icon: 'Trash2',
                title: 'Вывоз и утилизация',
                description: 'Профессиональный вывоз вещей, мебели и биологических отходов с соблюдением всех норм'
              },
              {
                icon: 'Droplets',
                title: 'Санитарная обработка',
                description: 'Глубокая дезинфекция помещения с использованием профессиональных антисептиков'
              },
              {
                icon: 'Wind',
                title: 'Устранение запахов',
                description: 'Применение озонирования и специализированных средств для полного удаления запахов'
              },
              {
                icon: 'Home',
                title: 'Генеральная уборка',
                description: 'Комплексная уборка всех поверхностей, стен, полов, окон и труднодоступных мест'
              },
              {
                icon: 'FileText',
                title: 'Помощь с документами',
                description: 'Консультации по оформлению необходимых документов и взаимодействию с организациями'
              },
              {
                icon: 'Users',
                title: 'Психологическая поддержка',
                description: 'Работаем с пониманием и сочувствием, при необходимости помогаем с контактами специалистов'
              }
            ].map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-primary mb-2">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Стоимость услуг</h3>
            <p className="text-lg text-muted-foreground">Индивидуальный расчет в зависимости от сложности работы</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { service: 'Выезд и осмотр', area: 'бесплатно', price: '0', unit: '₽' },
              { service: 'Санитарная обработка', area: 'до 50 м²', price: 'от 15 000', unit: '₽' },
              { service: 'Санитарная обработка', area: '50-80 м²', price: 'от 25 000', unit: '₽' },
              { service: 'Санитарная обработка', area: '80-120 м²', price: 'от 35 000', unit: '₽' },
              { service: 'Вывоз и утилизация', area: 'за м³', price: 'от 2 500', unit: '₽' },
              { service: 'Озонирование', area: 'за помещение', price: 'от 5 000', unit: '₽' },
              { service: 'Дезинфекция транспорта', area: 'легковой', price: 'от 8 000', unit: '₽' },
              { service: 'Генеральная уборка', area: 'после обработки', price: 'от 10 000', unit: '₽' },
            ].map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:border-accent animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <CardContent className="p-6 flex justify-between items-center">
                  <div className="flex-1">
                    <h5 className="text-lg font-semibold text-primary mb-1">{item.service}</h5>
                    <p className="text-sm text-muted-foreground">{item.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-serif font-bold text-accent">{item.price}</span>
                      <span className="text-lg text-muted-foreground">{item.unit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              Окончательная стоимость определяется после бесплатного выезда специалиста и оценки объема работ. 
              Возможна оплата в рассрочку.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <Icon name="Info" className="text-primary flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-primary mb-3">Важная информация</h4>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Все работы выполняются сертифицированными специалистами в защитной экипировке</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Используем профессиональное оборудование и сертифицированные средства</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Предоставляем полный пакет документов об утилизации</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Работаем 24/7, выезжаем в течение 2 часов после звонка</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Гарантируем абсолютную конфиденциальность</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Частые вопросы</h3>
            <p className="text-lg text-muted-foreground">Ответы на самые распространенные вопросы</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Как быстро вы можете приехать?',
                answer: 'Мы работаем круглосуточно и готовы выехать в течение 2 часов после вашего звонка. В экстренных случаях возможен более быстрый выезд.'
              },
              {
                question: 'Нужно ли мне присутствовать при уборке?',
                answer: 'Ваше присутствие не обязательно. Мы можем выполнить все работы самостоятельно при наличии доступа к помещению. Многие наши клиенты предпочитают не присутствовать.'
              },
              {
                question: 'Что делать с вещами умершего?',
                answer: 'Мы можем помочь с сортировкой, упаковкой и вывозом вещей. Ценные предметы передаются вам или указанным лицам. Остальное утилизируется с соблюдением всех норм.'
              },
              {
                question: 'Гарантируете ли вы полное устранение запахов?',
                answer: 'Да, мы используем профессиональное озонирование и специализированные средства, которые полностью устраняют любые запахи на молекулярном уровне.'
              },
              {
                question: 'Какие документы вы предоставляете?',
                answer: 'После работ мы предоставляем акт выполненных работ, документы об утилизации отходов и санитарно-эпидемиологическое заключение о безопасности помещения.'
              },
              {
                question: 'Можно ли оплатить услуги в рассрочку?',
                answer: 'Да, мы понимаем сложность ситуации и предоставляем возможность рассрочки платежа. Условия обсуждаются индивидуально.'
              },
              {
                question: 'Работаете ли вы за пределами Москвы?',
                answer: 'Да, мы выезжаем по всей Московской области. Для других регионов возможность выезда обсуждается индивидуально.'
              },
              {
                question: 'Как обеспечивается конфиденциальность?',
                answer: 'Все наши сотрудники подписывают соглашение о неразглашении. Мы не используем униформу с логотипами при работе, работаем в удобное для вас время.'
              }
            ].map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-serif font-semibold text-primary mb-3 flex items-start gap-3">
                    <Icon name="HelpCircle" className="text-accent flex-shrink-0 mt-1" size={20} />
                    {item.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-8">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Наши гарантии</h3>
            <p className="text-lg text-muted-foreground">Мы работаем официально и несем полную ответственность</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'FileCheck',
                  title: 'Официальная регистрация',
                  description: 'ООО "Clean Leaf" работает с 2018 года. ИНН, ОГРН, лицензии — все документы в порядке и предоставляются по запросу.'
                },
                {
                  icon: 'Award',
                  title: 'Сертификация специалистов',
                  description: 'Все наши сотрудники прошли специальное обучение и имеют сертификаты по работе с биологическими отходами и дезинфекции.'
                },
                {
                  icon: 'ShieldCheck',
                  title: 'Страхование ответственности',
                  description: 'Наша деятельность застрахована на сумму до 5 млн рублей. Любые повреждения имущества компенсируются страховой компанией.'
                },
                {
                  icon: 'ScrollText',
                  title: 'Договор и гарантии',
                  description: 'Мы заключаем официальный договор с подробным описанием работ. Гарантия на санитарную обработку — 12 месяцев.'
                },
                {
                  icon: 'Recycle',
                  title: 'Лицензия на утилизацию',
                  description: 'Имеем все необходимые разрешения на сбор, транспортировку и утилизацию отходов различных классов опасности.'
                },
                {
                  icon: 'UserCheck',
                  title: 'Проверенный персонал',
                  description: 'Все сотрудники проходят проверку службы безопасности, имеют медицинские книжки и допуски к работе.'
                }
              ].map((item, index) => (
                <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon name={item.icon as any} className="text-primary" size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-semibold text-primary mb-2">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-12 border-accent/30 bg-accent/5 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <CardContent className="p-8 text-center">
                <Icon name="BadgeCheck" className="text-accent mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-serif font-bold text-primary mb-3">Работаем по закону</h4>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Наша деятельность полностью соответствует СанПиН 2.1.3684-21, требованиям Роспотребнадзора 
                  и законодательству РФ об обращении с отходами. Все процедуры выполняются согласно установленным стандартам.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-4xl font-serif font-bold text-primary mb-4">Свяжитесь с нами</h3>
              <p className="text-lg text-muted-foreground">Мы готовы ответить на все ваши вопросы и помочь в трудную минуту</p>
            </div>
            
            <Card className="border-border shadow-xl animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон *</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-border focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Адрес объекта</label>
                    <Input 
                      placeholder="Москва, ул. Примерная, д. 1" 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Описание ситуации</label>
                    <Textarea 
                      placeholder="Опишите ситуацию, чтобы мы могли подготовиться..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Фотографии помещения (необязательно)
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <label className="flex-1 cursor-pointer">
                          <div className="border-2 border-dashed border-border hover:border-primary rounded-lg p-6 text-center transition-colors">
                            <Icon name="Upload" className="text-muted-foreground mx-auto mb-2" size={32} />
                            <p className="text-sm text-muted-foreground mb-1">
                              Загрузите фото помещения
                            </p>
                            <p className="text-xs text-muted-foreground">
                              До 5 фото, максимум 10 МБ каждое
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                      
                      {photoPreview.length > 0 && (
                        <div className="grid grid-cols-3 gap-3">
                          {photoPreview.map((preview, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={preview}
                                alt={`Фото ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border border-border"
                              />
                              <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Icon name="X" size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Или позвоните нам прямо сейчас:</p>
              <a href="tel:+79991234567" className="text-3xl font-serif font-bold text-primary hover:text-accent transition-colors">
                +7 (999) 123-45-67
              </a>
              <p className="text-sm text-muted-foreground mt-2">Круглосуточно, без выходных</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={28} />
                <h4 className="text-xl font-serif font-bold">Clean Leaf</h4>
              </div>
              <p className="text-primary-foreground/80">Деликатные клининговые услуги в сложных жизненных ситуациях</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@cleanleaf.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва и область</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Режим работы</h5>
              <p className="text-primary-foreground/80 mb-4">Круглосуточно, 24/7</p>
              <p className="text-sm text-primary-foreground/60">Выезд в течение 2 часов</p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
            <p>© 2024 Clean Leaf. Конфиденциальность гарантирована.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;