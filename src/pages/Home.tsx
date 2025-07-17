import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Users, BookOpen, Trophy, ArrowRight, MessageCircle, Play } from "lucide-react";
import logo from '../assets/logo.png';
import video0 from '../assets/video-0.mp4';
import video1 from '../assets/video-1.mp4';
import video2 from '../assets/video-2.mp4';
import flavio from '../assets/flavio.jpg';
import ariane from '../assets/ariane.jpg';
import samara from '../assets/prof2.png';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const plans = [
    {
      name: "Mentorial Virutal",
      price: "R$ 900,00",
      description: "Crie uma estratégia personalizada a curto, médio e longo prazo.",
      duracao: "6 meses",
      features: [
        "Planejamento personalizado",
        "Sessões de acompanhamento quinzenais",
        "Suporte via WhatsApp"
      ],
      highlighted: false
    },
    {
      name: "Preparatório TJCE",
      price: "R$ 499,50",
      description: "Preparação completa que você precisa para conquistar sua vaga!",
      duracao: "100 dias",
      features: [
        "Acesso às aulas gravadas",
        "Material de apoio em PDF",
        "Suporte via WhatsApp",
      ],
      highlighted: true
    },
    {
      name: "Combo Preparatório TJCE + Mentoria",
      price: "R$ 1199,90",
      description: "Experiência completa para aprovação",
      duracao: "100 dias + 6 meses",
      features: [
        "Tudo do plano Preparatório TJCE",
        "Tudo do plano Mentorial Virutal"
      ],
      highlighted: false
    }
  ];

  const whatsappUrl = "https://wa.me/5585989944388?text=Olá! Gostaria de saber mais sobre os planos da Descomplique Concursos.";

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <img src={logo} style={{ width: '20vw' }}/>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/sobre" className="text-foreground hover:text-primary transition-colors">Sobre Nós</a>
            <a href="/professores" className="text-foreground hover:text-primary transition-colors">Professores</a>
            <a href="/contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="/login" className="text-foreground hover:text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Sua aprovação em 
            <span className="text-primary"> concursos públicos </span> 
            começa aqui
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Mentorias especializadas, aulas gravadas de alta qualidade e suporte completo 
            para você conquistar a estabilidade que sempre sonhou.
          </p>
          <a href="#planos">
            <Button size="lg" className="text-lg px-8 py-4">
              Inscreva-se agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5.000+</div>
              <div className="text-foreground">Alunos aprovados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-foreground">Horas de conteúdo</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-foreground">Taxa de aprovação</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Video Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Depoimentos dos nossos professores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                id: 1, 
                name: "Prof. Ariane Lavínia", 
                specialty: "Direito Administrativo e do Trabalho",
                video: video1,
                thumbnail: ariane
              },
              { 
                id: 2, 
                name: "Prof. Flávio Rodrigues", 
                specialty: "Direito Constitucional, Penal e Proc. Penal.",
                video: video2,
                thumbnail: flavio
              },
              { 
                id: 3, 
                name: "Prof. Samara Lopes", 
                specialty: "Processo Civil",
                video: video0,
                thumbnail: samara
              }
            ].map((professor) => (
              <div key={professor.id} className="bg-card rounded-lg p-6 text-center hover-scale">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full h-48 bg-muted rounded-lg mx-auto mb-4 cursor-pointer group overflow-hidden">
                      <img 
                        src={professor.thumbnail} 
                        alt={`Depoimento do ${professor.name}`}
                        className="w-full h-full object-cover object-top rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <Play className="w-12 h-12 text-primary" fill="currentColor" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="aspect-video">
                      <video 
                        controls 
                        className="w-full h-full rounded-lg"
                        poster={professor.thumbnail}
                      >
                        <source src={professor.video} type="video/mp4" />
                        Seu navegador não suporta vídeos HTML5.
                      </video>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-semibold text-foreground">{professor.name}</h3>
                      <p className="text-muted-foreground">{professor.specialty}</p>
                    </div>
                  </DialogContent>
                </Dialog>
                <h3 className="text-xl font-semibold text-foreground mb-2">{professor.name}</h3>
                <p className="text-muted-foreground">{professor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 id="planos" className="text-4xl font-bold text-center text-foreground mb-4">
            Escolha seu plano de estudos
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Metodologia comprovada para acelerar sua aprovação
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.highlighted ? 'border-primary border-2' : ''}`}>
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.duracao}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? "default" : "outline"}
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Por que escolher a Descomplique?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professores Especializados</h3>
              <p className="text-muted-foreground">
                Equipe com anos de experiência em concursos públicos e aprovações comprovadas.
              </p>
            </div>
            
            <div className="text-center">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">Metodologia Única</h3>
              <p className="text-muted-foreground">
                Inspirado no que realmente funciona e pensado para acelerar seu aprendizado desde o primeiro dia.
              </p>
            </div>
            
            <div className="text-center">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Comprometimento, transparência e excelência acadêmica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Chegou a hora de começar sua trajetória rumo à estabilidade profissional. Venha crescer com a gente!
          </p>
          <a href="#planos">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Comece agora mesmo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={logo} style={{ width: '16vw' }}/>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links</h4>
              <div className="space-y-2">
                <div><a href="/sobre" className="text-muted-foreground hover:text-primary">Sobre Nós</a></div>
                <div><a href="/professores" className="text-muted-foreground hover:text-primary">Professores</a></div>
                <div><a href="/contato" className="text-muted-foreground hover:text-primary">Contato</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <div className="space-y-2">
                <div><a href="/login" className="text-muted-foreground hover:text-primary">Área do Aluno</a></div>
                {/*<div><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary">Termos de Uso</a></div>*/}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>concursosdescomplique@gmail.com</div>
                <div>(85) 98994-4388</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Descomplique Concursos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;