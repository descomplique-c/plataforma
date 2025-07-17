import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import logo from '../assets/logo.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação
    // Por enquanto, vamos redirecionar para a área do aluno
    if (email && password) {
      //window.location.href = "/area-do-aluno";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
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
            <a href="/contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="/login" className="text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      {/* Login Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl text-foreground">Área do Aluno</CardTitle>
              <CardDescription className="text-muted-foreground">
                Entre com suas credenciais para acessar suas aulas
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="rounded border-border"
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Lembrar de mim
                    </Label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Esqueci minha senha
                  </a>
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Entrar na plataforma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <Separator className="my-6" />
              
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">Ainda não tem uma conta?</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5585989944388?text=Olá! Gostaria de me matricular na Descomplique Concursos.", '_blank')}
                >
                  Inscreva-se agora
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Help Section */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-4 text-center">
                Precisa de ajuda para acessar?
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Se você é aluno e esqueceu sua senha, clique em "Esqueci minha senha" acima
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Suas credenciais foram enviadas por e-mail após a confirmação da matrícula
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Em caso de dúvidas, entre em contato com nosso suporte pelo WhatsApp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section 
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            O que você encontra na área do aluno
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Aulas Gravadas</h3>
              <p className="text-muted-foreground">
                Acesso a centenas de horas de conteúdo organizado por matéria e concurso
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Simulados</h3>
              <p className="text-muted-foreground">
                Pratique com simulados atualizados e acompanhe seu desempenho
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Suporte</h3>
              <p className="text-muted-foreground">
                Tire suas dúvidas diretamente com os professores e nossa equipe
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Descomplique Concursos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;