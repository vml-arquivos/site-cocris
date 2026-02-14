import { ArrowRight, Heart, Eye, Lightbulb, Users, BookOpen, Smile, Target, Award, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const heroImageUrl = '/images/children-learning.webp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Premium & Bold */}
        <section className="hero-section">
          <img
            src={heroImageUrl}
            alt="Crianças em atividades educacionais na COCRIS - Educação Infantil de Excelência"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>

          <div className="relative z-10 container text-white text-center">
            <div className="animate-fade-in-up space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Educação Infantil de Excelência
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/95 max-w-3xl mx-auto">
                Transformando vidas através do acolhimento, aprendizagem e desenvolvimento integral de crianças em situação de vulnerabilidade social
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/unidades">
                  <button className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
                    Conheça Nossas Unidades
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/doacoes">
                  <button className="btn-secondary inline-flex items-center justify-center gap-2 text-lg bg-white text-primary hover:bg-white/90">
                    Fazer Doação
                    <Heart className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values - Premium Cards */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nossos Pilares</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Fundados em valores humanistas, guiamos cada ação pela excelência educacional e compromisso social
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="card-premium group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Contribuir para o desenvolvimento das potencialidades físicas e psíquicas das crianças, direcionando-as para a conquista de Valor Humano Universal através da educação infantil de qualidade.
                </p>
              </div>

              {/* Vision */}
              <div className="card-premium group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Visão</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Ser reconhecida como uma Organização da Sociedade Civil de Excelência em Educação Infantil, transmitindo valores baseados na moral e ética com afeto e respeito.
                </p>
              </div>

              {/* Values */}
              <div className="card-premium group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">Valores</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Qualidade nas relações humanas baseadas no afeto, respeito a si e ao outro, solidariedade, alegria e compromisso com o desenvolvimento integral das crianças.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-primary mb-4">Nosso Impacto Social</h2>
            <p className="text-center text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
              Mais de uma década dedicada à transformação de vidas através da educação infantil de qualidade
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">20K+</div>
                <p className="text-foreground/70 font-semibold">Crianças Atendidas</p>
              </div>
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-secondary" />
                </div>
                <div className="text-5xl font-bold text-secondary mb-2">6</div>
                <p className="text-foreground/70 font-semibold">Unidades Educacionais</p>
              </div>
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <div className="text-5xl font-bold text-accent mb-2">15+</div>
                <p className="text-foreground/70 font-semibold">Anos de Atuação</p>
              </div>
              <div className="text-center hover-lift">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground/70 font-semibold">Transparência</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Quem Somos
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  A <strong>COCRIS - Associação Beneficente Coração de Cristo</strong> é uma organização sem fins lucrativos dedicada à educação infantil de excelência e ao desenvolvimento integral de crianças em situação de vulnerabilidade social.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Com mais de 15 anos de atuação no Distrito Federal, administramos 6 unidades de educação infantil (CEPIs e Creches) que atendem centenas de crianças diariamente, oferecendo educação de qualidade, alimentação nutritiva e um ambiente acolhedor.
                </p>
                <Link href="/quem-somos">
                  <button className="btn-primary inline-flex items-center gap-2">
                    Saiba Mais Sobre Nós
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/images/children-activities.jpg"
                  alt="Crianças em atividades educacionais na COCRIS"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-xs">
                  <p className="text-sm font-semibold mb-1">Compromisso com a Educação</p>
                  <p className="text-2xl font-bold">15+ Anos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Units Section */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nossas Unidades Educacionais</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Administramos 6 unidades de educação infantil no Distrito Federal, oferecendo atendimento de excelência em Recanto das Emas e Brazlândia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { name: 'CEPI Arara Canindé', type: 'Centro de Educação para a Infância', slug: 'cepi-arara-caninde' },
                { name: 'CEPI Beija-Flor', type: 'Centro de Educação para a Infância', slug: 'cepi-beija-flor' },
                { name: 'CEPI Sabiá do Campo', type: 'Centro de Educação para a Infância', slug: 'cepi-sabia-do-campo' },
                { name: 'Creche COCRIS', type: 'Escola de Educação Infantil', slug: 'creche-cocris' },
                { name: 'Creche Pelicano', type: 'Centro de Convivência e Educação Infantil', slug: 'creche-pelicano' },
                { name: 'CEPI Flamboyant', type: 'Centro de Educação para a Infância', slug: 'cepi-flamboyant' },
              ].map((unit, idx) => (
                <div key={idx} className="card-premium hover-lift hover-glow group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Smile className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{unit.name}</h3>
                  <p className="text-sm text-secondary font-semibold mb-4">{unit.type}</p>
                  <Link href={`/unidades/${unit.slug}`}>
                    <span className="text-primary font-semibold hover:text-secondary transition-colors cursor-pointer inline-flex items-center gap-1">
                      Saiba mais
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/unidades">
                <button className="btn-primary inline-flex items-center gap-2">
                  Ver Todas as Unidades
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Sections */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Projects CTA */}
              <div className="card-premium hover-lift hover-glow">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossos Projetos</h3>
                <p className="text-foreground/70 mb-6">
                  Conheça o Unnijovem e outros programas que transformam vidas através da educação e capacitação.
                </p>
                <Link href="/projetos">
                  <button className="btn-outline inline-flex items-center gap-2">
                    Conhecer Projetos
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* Donation CTA */}
              <div className="card-premium hover-lift hover-glow bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Fazer Doação</h3>
                <p className="text-foreground/70 mb-6">
                  Sua contribuição faz diferença real na vida de crianças em vulnerabilidade social. Doe agora!
                </p>
                <Link href="/doacoes">
                  <button className="btn-primary inline-flex items-center gap-2">
                    Doar Agora
                    <Heart className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* Blog CTA */}
              <div className="card-premium hover-lift hover-glow">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">Blog e Notícias</h3>
                <p className="text-foreground/70 mb-6">
                  Acompanhe nossas histórias de impacto, eventos e novidades da educação infantil.
                </p>
                <Link href="/blog">
                  <button className="btn-outline inline-flex items-center gap-2">
                    Ler Notícias
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Fique Por Dentro</h2>
              <p className="text-xl mb-8 text-white/90">
                Receba nossas novidades, histórias de impacto e eventos diretamente no seu email
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-6 py-4 rounded-lg text-foreground focus:ring-2 focus:ring-white"
                  required
                />
                <button type="submit" className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all">
                  Inscrever-se
                </button>
              </form>
              <p className="text-sm text-white/70 mt-4">
                Respeitamos sua privacidade. Cancele a qualquer momento.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
