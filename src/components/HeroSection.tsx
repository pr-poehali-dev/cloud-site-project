import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <Badge variant="secondary" className="text-sm">Надёжное облачное хранилище</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Безопасность данных<br />на первом месте
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Защитите свой бизнес с помощью шифрования корпоративного уровня, 
            двухфакторной аутентификации и полного соответствия международным стандартам
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Попробовать бесплатно
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Смотреть демо
              <Icon name="Play" className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">256-bit</div>
              <div className="text-sm text-muted-foreground mt-1">Шифрование</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
