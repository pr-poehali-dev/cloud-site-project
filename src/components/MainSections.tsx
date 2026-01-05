import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Возможности</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Комплексная защита данных
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для безопасного хранения и управления корпоративными данными
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Lock" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Шифрование данных</CardTitle>
              <CardDescription>
                AES-256 шифрование в покое и в движении. Ваши данные защищены на всех этапах
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>End-to-end шифрование</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Автоматическое шифрование файлов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Управление ключами шифрования</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Двухфакторная аутентификация</CardTitle>
              <CardDescription>
                Дополнительный уровень защиты с поддержкой всех популярных методов 2FA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SMS и email верификация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Authenticator приложения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Биометрическая аутентификация</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="FileCheck" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Соответствие стандартам</CardTitle>
              <CardDescription>
                Полное соответствие международным стандартам безопасности и регуляторным требованиям
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>ISO 27001 сертификация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>GDPR совместимость</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SOC 2 Type II</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-muted/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="Server" className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Резервное копирование</CardTitle>
                  <CardDescription>Автоматическое создание резервных копий</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ежедневные автоматические резервные копии с возможностью восстановления данных 
                за последние 30 дней. Географически распределённое хранение.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="Activity" className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Мониторинг активности</CardTitle>
                  <CardDescription>Полный контроль доступа к данным</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Детальные логи всех операций, уведомления о подозрительной активности 
                и инструменты для аудита безопасности.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Тарифы</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Выберите подходящий план
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачное ценообразование для команд любого размера
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>Для небольших команд</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">100 GB хранилище</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">До 5 пользователей</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Базовое шифрование</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Email поддержка</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Выбрать план</Button>
            </CardFooter>
          </Card>

          <Card className="border-primary border-2 shadow-lg relative">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-primary">Популярный</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>Для растущих компаний</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">1 TB хранилище</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">До 20 пользователей</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Продвинутое шифрование</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">2FA аутентификация</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Приоритетная поддержка</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Выбрать план</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>Для крупного бизнеса</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Неограниченное хранилище</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Неограниченные пользователи</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Корпоративное шифрование</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Все виды 2FA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">Выделенная поддержка 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" />
                  <span className="text-sm">SLA гарантии</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Связаться с нами</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function DocsSection() {
  return (
    <section id="docs" className="py-20 md:py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Документация</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о безопасности и использовании платформы
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              Как работает шифрование данных?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Мы используем AES-256 шифрование — золотой стандарт в индустрии. Все ваши файлы 
              автоматически шифруются перед загрузкой на сервер и расшифровываются только при 
              скачивании. Ключи шифрования хранятся отдельно от данных в защищённом хранилище.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              Какие методы двухфакторной аутентификации поддерживаются?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Мы поддерживаем SMS-коды, email-коды, TOTP-приложения (Google Authenticator, Authy), 
              аппаратные ключи безопасности (YubiKey) и биометрическую аутентификацию на 
              поддерживаемых устройствах.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              Соответствует ли платформа требованиям GDPR?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Да, наша платформа полностью соответствует требованиям GDPR. Мы предоставляем 
              инструменты для управления правами доступа, удаления данных по запросу, экспорта 
              информации и ведём детальную документацию обработки персональных данных.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              Как часто создаются резервные копии?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Резервные копии создаются автоматически каждые 24 часа. Для Enterprise-тарифа 
              доступны резервные копии каждые 6 часов. Все копии хранятся в нескольких 
              географически распределённых дата-центрах для максимальной надёжности.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              Можно ли интегрировать платформу с существующими системами?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Да, мы предоставляем REST API и SDK для популярных языков программирования. 
              Также доступны готовые интеграции с Active Directory, Okta, Slack, Microsoft 365 
              и другими корпоративными решениями.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              Какой уровень поддержки предоставляется?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Starter план включает email-поддержку с ответом в течение 24 часов. Professional 
              получает приоритетную поддержку с ответом в течение 4 часов. Enterprise-клиенты 
              имеют выделенного менеджера и поддержку 24/7 с временем реакции до 1 часа.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BookOpen" className="h-6 w-6 text-primary" />
              Техническая документация
            </CardTitle>
            <CardDescription>
              Полная документация для разработчиков и администраторов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="Code" className="mr-2 h-4 w-4" />
                API документация
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="Terminal" className="mr-2 h-4 w-4" />
                CLI инструменты
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="Shield" className="mr-2 h-4 w-4" />
                Политики безопасности
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="Users" className="mr-2 h-4 w-4" />
                Управление доступом
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готовы начать?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам компаний, которые доверяют нам свои данные
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Начать бесплатно
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            Связаться с отделом продаж
          </Button>
        </div>
      </div>
    </section>
  );
}
