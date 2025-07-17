import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Trophy, 
  User, 
  Settings, 
  LogOut, 
  BarChart3,
  FileText,
  MessageCircle,
  Calendar
} from "lucide-react";

const StudentDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: "Tribunal de Justiça - TJ/SP",
      description: "Preparação completa para o concurso do TJ/SP",
      progress: 65,
      totalClasses: 120,
      completedClasses: 78,
      estimatedTime: "3 meses",
      subjects: ["Direito Constitucional", "Direito Administrativo", "Português", "Informática"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Polícia Civil - PC/SP",
      description: "Curso preparatório para Investigador e Escrivão",
      progress: 42,
      totalClasses: 95,
      completedClasses: 40,
      estimatedTime: "4 meses",
      subjects: ["Direito Penal", "Direito Processual Penal", "Criminologia", "Português"],
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Receita Federal - RF",
      description: "Preparação para Auditor-Fiscal da Receita Federal",
      progress: 23,
      totalClasses: 150,
      completedClasses: 35,
      estimatedTime: "6 meses",
      subjects: ["Contabilidade", "Direito Tributário", "Economia", "Matemática"],
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Tribunal de Contas - TCU",
      description: "Curso completo para Auditor Federal de Controle Externo",
      progress: 8,
      totalClasses: 180,
      completedClasses: 14,
      estimatedTime: "8 meses",
      subjects: ["Controle Externo", "Direito Constitucional", "Administração Pública"],
      color: "bg-orange-500"
    }
  ];

  const recentActivities = [
    { type: "video", title: "Princípios Constitucionais", duration: "45 min", date: "Hoje" },
    { type: "exercise", title: "Simulado - Direito Administrativo", score: "85%", date: "Ontem" },
    { type: "video", title: "Licitações e Contratos", duration: "38 min", date: "2 dias atrás" },
    { type: "live", title: "Mentoria ao Vivo - Redação", duration: "2h", date: "3 dias atrás" }
  ];

  const handleLogout = () => {
    // Aqui você implementaria a lógica de logout
    window.location.href = "/";
  };

  if (selectedCourse) {
    const course = courses.find(c => c.id === selectedCourse);
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setSelectedCourse(null)}
              >
                ← Voltar
              </Button>
              <div className="text-2xl font-bold text-primary">
                {course?.title}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Course Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progresso do Curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Concluído</span>
                      <span>{course?.progress}%</span>
                    </div>
                    <Progress value={course?.progress} className="w-full" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {course?.completedClasses} de {course?.totalClasses} aulas
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tempo estimado: {course?.estimatedTime}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Matérias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course?.subjects.map((subject, index) => (
                      <Badge key={index} variant="secondary" className="w-full justify-start">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video lessons organized by subject */}
                {course?.subjects.map((subject, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{subject}</CardTitle>
                        <Play className="h-5 w-5 text-primary" />
                      </div>
                      <CardDescription>
                        {Math.floor(Math.random() * 20) + 10} aulas disponíveis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[1, 2, 3].map((lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors">
                            <Play className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="text-sm font-medium">Aula {lessonIndex}</div>
                              <div className="text-xs text-muted-foreground">
                                {Math.floor(Math.random() * 60) + 30} min
                              </div>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" className="w-full">
                          Ver todas as aulas
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Additional resources */}
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Simulados</CardTitle>
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardDescription>Pratique com questões reais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">5 simulados disponíveis</div>
                      <div className="text-sm text-muted-foreground">Último resultado: 78%</div>
                      <Button variant="outline" size="sm" className="w-full">
                        Fazer simulado
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Material de Apoio</CardTitle>
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <CardDescription>PDFs e resumos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">25 arquivos disponíveis</div>
                      <div className="text-sm text-muted-foreground">Resumos, mapas mentais e mais</div>
                      <Button variant="outline" size="sm" className="w-full">
                        Baixar materiais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Área do Aluno
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Bem-vindo, João Silva!
            </div>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Perfil
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Seus Preparatórios
          </h1>
          <p className="text-xl text-muted-foreground">
            Continue seus estudos de onde parou e conquiste sua aprovação!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </div>
                      <div className={`w-4 h-4 rounded-full ${course.color} flex-shrink-0 mt-1`}></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progresso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="w-full" />
                    </div>
                    
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{course.completedClasses}/{course.totalClasses} aulas</span>
                      <span>{course.estimatedTime}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {course.subjects.slice(0, 2).map((subject, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {course.subjects.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.subjects.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Continuar estudos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Atividade Recente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      {activity.type === 'video' && <Play className="h-4 w-4 text-primary-foreground" />}
                      {activity.type === 'exercise' && <FileText className="h-4 w-4 text-primary-foreground" />}
                      {activity.type === 'live' && <MessageCircle className="h-4 w-4 text-primary-foreground" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{activity.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {activity.duration || activity.score} • {activity.date}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Desempenho
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">78%</div>
                  <div className="text-sm text-muted-foreground">Média geral</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Horas estudadas</span>
                    <span className="font-medium">45h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Simulados feitos</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sequência atual</span>
                    <span className="font-medium">7 dias</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar mentoria
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Falar com suporte
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="h-4 w-4 mr-2" />
                  Ver ranking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;