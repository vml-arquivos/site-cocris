import { Shield, FileText, AlertCircle, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function Compliance() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Compliance e Ética | COCRIS - Transparência e Conformidade"
        description="Conheça o programa de compliance da COCRIS: código de ética, políticas de conformidade, canal de denúncia e compromisso com a transparência."
        keywords="compliance, ética, transparência, COCRIS, conformidade legal, LGPD, proteção de dados, canal de denúncia, ouvidoria"
      />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Compliance
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Compromisso com a ética, transparência e conformidade legal em todas as nossas operações.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                A Associação Beneficente Coração de Cristo (COCRIS) mantém um rigoroso programa de compliance que assegura o cumprimento de todas as leis, regulamentos e normas aplicáveis às nossas atividades. Nosso compromisso com a integridade e a transparência é fundamental para manter a confiança de nossos parceiros, colaboradores e da comunidade.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Este programa abrange desde a gestão financeira até as práticas pedagógicas, garantindo que todas as operações estejam alinhadas com os mais altos padrões éticos e legais.
              </p>
            </div>
          </div>
        </section>

        {/* Código de Ética */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Código de Ética e Conduta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card-cocris">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-4">Integridade</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Agimos com honestidade e transparência em todas as nossas relações, mantendo os mais altos padrões éticos em nossas operações e decisões.
                </p>
              </div>
              <div className="card-cocris">
                <CheckCircle className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-4">Responsabilidade</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Assumimos total responsabilidade pelos recursos confiados a nós, garantindo sua aplicação adequada no cumprimento de nossa missão social.
                </p>
              </div>
              <div className="card-cocris">
                <FileText className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-4">Conformidade Legal</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Cumprimos rigorosamente todas as leis e regulamentos aplicáveis, incluindo legislação trabalhista, tributária, educacional e de proteção à criança.
                </p>
              </div>
              <div className="card-cocris">
                <AlertCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-4">Prevenção de Conflitos</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Mantemos políticas claras para identificar e prevenir conflitos de interesse, garantindo decisões imparciais e no melhor interesse das crianças.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Políticas e Procedimentos */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              Políticas e Procedimentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Gestão Financeira</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Controles internos rigorosos para todas as transações financeiras</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Auditoria externa independente anual</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Segregação de funções e dupla aprovação para pagamentos</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Publicação trimestral de relatórios financeiros</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Proteção de Dados</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Conformidade total com a LGPD (Lei Geral de Proteção de Dados)</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Políticas de privacidade claras e acessíveis</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Segurança de dados pessoais de crianças e famílias</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Treinamento regular de colaboradores sobre proteção de dados</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Canal de Denúncia */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AlertCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Canal de Denúncia e Ouvidoria
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Mantemos canais confidenciais para receber denúncias, sugestões e reclamações. Todas as comunicações são tratadas com sigilo e seriedade, garantindo proteção ao denunciante.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="card-cocris text-left">
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">Telefone</h3>
                  <p className="text-foreground/70">(61) 3575-4125</p>
                  <p className="text-sm text-foreground/60 mt-2">Segunda a sexta, 8h às 18h</p>
                </div>
                <div className="card-cocris text-left">
                  <Mail className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-secondary mb-2">E-mail</h3>
                  <p className="text-foreground/70">ouvidoria@cocris.org</p>
                  <p className="text-sm text-foreground/60 mt-2">Resposta em até 48 horas</p>
                </div>
              </div>
              <p className="text-sm text-foreground/60 mt-8">
                Garantimos total confidencialidade e proteção contra retaliação para todos os denunciantes.
              </p>
            </div>
          </div>
        </section>

        {/* Certificações e Conformidade */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Certificações e Conformidade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">SEEDF</h3>
                <p className="text-sm text-foreground/70">
                  Credenciamento junto à Secretaria de Educação do DF
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">CEBAS</h3>
                <p className="text-sm text-foreground/70">
                  Certificado de Entidade Beneficente de Assistência Social
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent mb-2">LGPD</h3>
                <p className="text-sm text-foreground/70">
                  Conformidade com Lei Geral de Proteção de Dados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Documentos e Relatórios
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Acesse nossa seção de transparência para consultar todos os documentos, relatórios financeiros e auditorias.
            </p>
            <Link href="/transparencia" className="btn-primary">
              Ver Documentos de Transparência
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
