import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 font-roboto">
              Сантехнические услуги в Екатеринбурге
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Экстренный вызов 24/7. Гарантия на все работы. Работаем с частными домами и квартирами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Экстренный вызов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-roboto">Наши услуги</h2>
            <p className="text-lg text-gray-600">Полный спектр сантехнических работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Установка сантехники</h3>
                <p className="text-gray-600">Установка смесителей, унитазов, раковин, ванн и душевых кабин</p>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ремонт сантехники</h3>
                <p className="text-gray-600">Устранение протечек, замена деталей, восстановление работоспособности</p>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Droplets" size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Прочистка канализации</h3>
                <p className="text-gray-600">Устранение засоров труб, профессиональная чистка канализации</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-roboto">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7</h3>
              <p className="text-gray-600">Экстренный вызов в любое время суток</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Гарантия на все виды выполненных работ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Дома и квартиры</h3>
              <p className="text-gray-600">Работаем с частными домами и квартирами</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Опыт</h3>
              <p className="text-gray-600">Более 10 лет успешной работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-roboto">Наши работы</h2>
            <p className="text-lg text-gray-600">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/img/24673adc-26ad-417a-a593-cad7ca933acd.jpg" 
                alt="Установка смесителя в ванной комнате"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Установка ванной комнаты</h3>
                <p className="text-gray-600 text-sm">Полный ремонт ванной комнаты в квартире</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/img/74a87db3-d0e9-4124-8a3f-11b624fb0cc1.jpg" 
                alt="Замена старых труб на новые"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Замена труб</h3>
                <p className="text-gray-600 text-sm">Замена старых труб на современные</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/img/6313a830-86ea-486a-a5f9-8050d21b5f40.jpg" 
                alt="Установка кухонного смесителя"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Установка смесителей</h3>
                <p className="text-gray-600 text-sm">Установка современных смесителей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-roboto">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-lg">+7 (343) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg">info@santehnik-ekb.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-lg">г. Екатеринбург</p>
            </div>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
            <Icon name="Phone" className="mr-2" size={20} />
            Вызвать мастера
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;