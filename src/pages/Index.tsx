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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">Прайс</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Заказать уборку
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Премиальная<br />чистота для<br />вашего дома
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Clean Leaf предоставляет профессиональные клининговые услуги премиум-класса. 
                Мы заботимся о каждой детали, создавая идеальное пространство для вашей жизни.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/571fd87a-c57e-4eb1-b268-9f13242a2d11/files/0c1c53d2-c51c-4bee-b85e-ebe610f32ce0.jpg" 
                alt="Премиальный интерьер" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground">Комплексный подход к чистоте вашего пространства</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Home',
                title: 'Уборка квартир',
                description: 'Поддерживающая и генеральная уборка жилых помещений с использованием премиальных средств',
                image: 'https://cdn.poehali.dev/projects/571fd87a-c57e-4eb1-b268-9f13242a2d11/files/49e6c107-895e-457e-94e5-ab88951b009c.jpg'
              },
              {
                icon: 'Building2',
                title: 'Клининг офисов',
                description: 'Профессиональная уборка бизнес-пространств для создания комфортной рабочей атмосферы',
                image: 'https://cdn.poehali.dev/projects/571fd87a-c57e-4eb1-b268-9f13242a2d11/files/020afeb6-0843-488d-a250-b68a7eafcb11.jpg'
              },
              {
                icon: 'Sparkles',
                title: 'Химчистка мебели',
                description: 'Деликатная чистка мягкой мебели и ковровых покрытий с сохранением качества материалов',
                image: 'https://cdn.poehali.dev/projects/571fd87a-c57e-4eb1-b268-9f13242a2d11/files/0c1c53d2-c51c-4bee-b85e-ebe610f32ce0.jpg'
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <h4 className="text-xl font-serif font-semibold text-primary">{service.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-serif font-bold text-primary mb-4">Прозрачные цены</h3>
            <p className="text-lg text-muted-foreground">Честная стоимость без скрытых платежей</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { service: 'Поддерживающая уборка', area: 'до 50 м²', price: '3 500', unit: '₽' },
              { service: 'Поддерживающая уборка', area: '50-80 м²', price: '5 000', unit: '₽' },
              { service: 'Поддерживающая уборка', area: '80-120 м²', price: '7 500', unit: '₽' },
              { service: 'Генеральная уборка', area: 'до 50 м²', price: '6 000', unit: '₽' },
              { service: 'Генеральная уборка', area: '50-80 м²', price: '9 000', unit: '₽' },
              { service: 'Генеральная уборка', area: '80-120 м²', price: '13 500', unit: '₽' },
              { service: 'Химчистка дивана', area: '2-3 места', price: '4 500', unit: '₽' },
              { service: 'Химчистка ковра', area: 'за м²', price: '350', unit: '₽' },
              { service: 'Мытьё окон', area: 'за окно', price: '500', unit: '₽' },
            ].map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:border-accent animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <CardContent className="p-6 flex justify-between items-center">
                  <div className="flex-1">
                    <h5 className="text-lg font-semibold text-primary mb-1">{item.service}</h5>
                    <p className="text-sm text-muted-foreground">{item.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-serif font-bold text-accent">{item.price}</span>
                      <span className="text-lg text-muted-foreground">{item.unit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground italic">* Точная стоимость рассчитывается индивидуально после осмотра объекта</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-4xl font-serif font-bold text-primary mb-4">Заказать уборку</h3>
              <p className="text-lg text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
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
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Услуга</label>
                    <Input 
                      placeholder="Генеральная уборка, 70 м²" 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Комментарий</label>
                    <Textarea 
                      placeholder="Расскажите подробнее о ваших пожеланиях..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
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
              <p className="text-primary-foreground/80">Премиальные клининговые услуги для вашего комфорта</p>
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
                  <span>Москва</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Режим работы</h5>
              <p className="text-primary-foreground/80">Ежедневно с 8:00 до 22:00</p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
            <p>© 2024 Clean Leaf. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
