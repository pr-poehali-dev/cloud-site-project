import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Cloud" className="h-6 w-6 text-primary" />
              <span className="font-bold">CloudSecure</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Надёжное облачное хранилище с корпоративным уровнем безопасности
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2026 CloudSecure. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
