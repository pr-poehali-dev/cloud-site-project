import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Cloud" className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">CloudSecure</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button onClick={() => onNavigate('home')} className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </button>
          <button onClick={() => onNavigate('features')} className="text-sm font-medium hover:text-primary transition-colors">
            Возможности
          </button>
          <button onClick={() => onNavigate('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
            Тарифы
          </button>
          <button onClick={() => onNavigate('docs')} className="text-sm font-medium hover:text-primary transition-colors">
            Документация
          </button>
        </nav>
        <Button>Начать</Button>
      </div>
    </header>
  );
}
