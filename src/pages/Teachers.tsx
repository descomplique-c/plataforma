import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import flavio from '../assets/flavio.jpg';
import ariane from '../assets/ariane.jpg';
import ana from '../assets/prof0.png';
import cesar from '../assets/prof1.png';
import samara from '../assets/prof2.png';
import jhonatan from '../assets/prof3.jpg';
import logo from '../assets/logo.png';

const Teachers = () => {
  const teachers = [
    {
      photo: flavio,
      name: "Flávio Rodrigues",
      speciality: "Direito Constitucional, Penal e Proc. Penal.",
      description: "Graduado em Direito pela UFC, Especialista em Gestão Pública pela UECE e Mestre em Direito Privado pela UNI7. Servidor Público, com vasta experiência em concursos e autor de livro para concurseiros. Responsável pela mentoria.",
    },
    {
      photo: ariane,
      name: "Ariane Lavínia",
      speciality: "Direito Administrativo e do Trabalho",
      description: "Graduada em Direito, Especialista em Práticas Colaborativas e Direito do Trabalho. Gestora Pública com diversas aprovações em concursos públicos.",
    },
    {
      photo: ana,
      name: "Ana Isabel",
      speciality: "Questões discursivas",
      description: "Graduada em Direito e Ciências Contábeis, Mestre em Direito Constitucional e Assistente Jurídica no TJCE. Nossa especialista em questões discursivas.",
    },
    {
      photo: cesar,
      name: "César Filho Martins",
      speciality: "Processo Penal",
      description: "Graduado em Direito, Especialista em Execução Penal e Tribunal do Júri. Coordenador do curso de Direito da FAEDI e Secretário Geral da ESA - subsecção Ibiapaba.",
    },
    {
      photo: samara,
      name: "Samara Lopes",
      speciality: "Processo Civil",
      description: "Graduada em Direito, Especialista em Direito Previdenciário e Tributário. Advogada com vasta experiência na área cível.",
    },
    {
      photo: jhonatan,
      name: "Jhonatan Dantas",
      speciality: "Raciocínio Lógico",
      description: "Fundador do DG Educacional. Atua há mais de 10 anos auxiliando alunos a superarem suas dificuldades na área de exatas com método inovador. Nosso especialista em matemática e raciocínio lógico para concursos.",
    },
  ];

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
            <a href="/sobre" className="text-foreground hover:text-primary transition-colors">Sobre Nós</a>
            <a href="/professores" className="text-primary transition-colors">Professores</a>
            <a href="/contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="/login" className="text-foreground hover:text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nossos Professores
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os especialistas que vão te guiar até a aprovação. 
            Cada professor é cuidadosamente selecionado por sua experiência e resultados comprovados.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-4 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-muted rounded-full flex-shrink-0">
                      <img src={teacher.photo} style={{ borderRadius: '200px', objectFit: "cover" }} className="w-24 h-24"/>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-foreground mb-2">{teacher.name}</CardTitle>
                      <p className="text-primary font-semibold mb-2">{teacher.speciality}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Nosso Time em Números
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-foreground text-lg">Professores Especialistas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground text-lg">Anos de Experiência Combinada</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5.000+</div>
              <div className="text-foreground text-lg">Aprovações Conquistadas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-foreground text-lg">Avaliação Média dos Alunos</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Methodology Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Nossa Metodologia de Ensino
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Na Descomplique cada professor segue uma metodologia exclusiva, construída com base em experiência prática, dedicação e um compromisso verdadeiro com o aprendizado dos nossos alunos. Valorizamos estratégias que tornam o conteúdo mais claro, envolvente e eficaz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Diagnóstico</h3>
                <p className="text-muted-foreground">
                  Identificamos o nível atual do aluno e suas necessidades específicas para criar um plano personalizado.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Ensino Prático</h3>
                <p className="text-muted-foreground">
                  Aulas focadas na aplicação prática do conhecimento, com exercícios e simulados constantes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Acompanhamento</h3>
                <p className="text-muted-foreground">
                  Monitoramento contínuo do progresso com feedback personalizado e ajustes na estratégia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Estude com os melhores professores
          </h2>
          <p className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto">
            Conte com professores especialistas, comprometidos em guiar você rumo à aprovação.
          </p>
          <a href="/#planos" className="inline-block">
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors">
              Conheça nossos
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

export default Teachers;