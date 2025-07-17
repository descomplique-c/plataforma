import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Calendar } from "lucide-react";
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <a href="/"><img src={logo} style={{ width: '20vw' }}/></a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/sobre" className="text-primary transition-colors">Sobre Nós</a>
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
            Nossa História
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Conheça a trajetória da Descomplique Concursos e nosso compromisso em oferecer uma preparação de qualidade para quem busca aprovação em concursos públicos.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar o acesso à preparação de qualidade para concursos públicos, 
                  oferecendo metodologia eficaz e suporte personalizado para cada aluno.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a principal referência em preparação para concursos públicos no Brasil, 
                  reconhecida pela excelência e resultados dos nossos alunos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprometimento, transparência, excelência acadêmica e foco total 
                  no sucesso e aprovação dos nossos alunos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Nossa Jornada
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">2025 - O Início</h3>
                  <p className="text-muted-foreground text-lg">
                    A Descomplique Concursos nasceu da paixão de um grupo de professores especializados 
                    que identificaram a necessidade de uma preparação mais focada e personalizada para 
                    concursos públicos. Com uma pequena equipe e muito sonho, iniciamos nossa jornada.
                  </p>
                </div>
              </div>

              {/*<div className="flex items-start space-x-6">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">2021 - Primeiras Aprovações</h3>
                  <p className="text-muted-foreground text-lg">
                    O primeiro ano trouxe resultados surpreendentes. Com apenas 100 alunos, alcançamos 
                    uma taxa de aprovação de 85%, comprovando que nossa metodologia diferenciada 
                    realmente funcionava.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">2022 - Expansão Nacional</h3>
                  <p className="text-muted-foreground text-lg">
                    Com o crescimento orgânico e indicações dos próprios alunos, expandimos para 
                    todo o território nacional. Lançamos nossa plataforma online e chegamos a 
                    1.000 alunos ativos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">2023 - Reconhecimento</h3>
                  <p className="text-muted-foreground text-lg">
                    Fomos reconhecidos como uma das principais plataformas de preparação para 
                    concursos do país. Atingimos a marca de 3.000 aprovações e expandimos nossa 
                    equipe de professores especialistas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">2024 - O Presente</h3>
                  <p className="text-muted-foreground text-lg">
                    Hoje, com mais de 5.000 aprovações e uma comunidade de 10.000 alunos, 
                    continuamos inovando e aperfeiçoando nossa metodologia para garantir que 
                    cada aluno alcance seu objetivo de conquistar a estabilidade pública.
                  </p>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Nossa Equipe de Liderança
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 bg-muted rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Dr. Carlos Silva</h3>
              <p className="text-primary font-medium mb-4">Fundador & CEO</p>
              <p className="text-muted-foreground">
                Especialista em Direito Administrativo com 15 anos de experiência em concursos públicos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-muted rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Profa. Ana Costa</h3>
              <p className="text-primary font-medium mb-4">Diretora Pedagógica</p>
              <p className="text-muted-foreground">
                Mestre em Educação e responsável pelo desenvolvimento da metodologia de ensino.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-muted rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Prof. Roberto Lima</h3>
              <p className="text-primary font-medium mb-4">Coordenador Acadêmico</p>
              <p className="text-muted-foreground">
                Especialista em Português e Redação com mais de 1.000 alunos aprovados.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Faça parte da nossa história de sucesso
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Conte com professores especialistas, comprometidos em guiar você rumo à aprovação.
          </p>
          <a href="/#planos" className="inline-block">
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors">
              Conheça nossos planos
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Descomplique Concursos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;