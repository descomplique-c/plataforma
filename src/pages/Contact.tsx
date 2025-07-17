import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from '../assets/logo.png';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

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
            <a href="/professores" className="text-foreground hover:text-primary transition-colors">Professores</a>
            <a href="/contato" className="text-primary transition-colors">Contato</a>
            <a href="/login" className="text-foreground hover:text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tem alguma dúvida ou precisa de ajuda? Nossa equipe está pronta para te atender 
            e esclarecer todas as suas questões sobre nossos cursos.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envie sua mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      placeholder="Qual o motivo do seu contato?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Escreva sua mensagem aqui..."
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Telefone</h3>
                      <p className="text-muted-foreground">(85) 98994-4388</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <p className="text-muted-foreground">concursosdescomplique@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Atendimento via WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Precisa de ajuda urgente? Fale conosco diretamente pelo WhatsApp 
                    e receba atendimento personalizado em tempo real.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => window.open("https://wa.me/5585989944388?text=Olá! Preciso de ajuda com os cursos da Descomplique Concursos.", '_blank')}
                  >
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Dúvidas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Como funciona a plataforma?</h4>
                    <p className="text-muted-foreground text-sm">
                      Após a matrícula, você recebe acesso à área do aluno com todas as aulas gravadas organizadas por matéria.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Posso assistir as aulas quantas vezes quiser?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sim! Você tem acesso ilimitado durante todo o período da sua assinatura.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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

export default Contact;