import { FileText, Download } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const documents = [
  { title: 'Balanço Financeiro 2024', date: 'Jan 2025', type: 'PDF' },
  { title: 'Relatório de Atividades 2024', date: 'Jan 2025', type: 'PDF' },
  { title: 'Parecer de Auditoria 2024', date: 'Fev 2025', type: 'PDF' },
  { title: 'Estatuto Social', date: 'Permanente', type: 'PDF' },
  { title: 'Diretrizes Pedagógicas', date: 'Permanente', type: 'PDF' },
  { title: 'Calendário Escolar 2025', date: 'Jan 2025', type: 'PDF' },
];

export default function Transparencia() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Transparência
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Acesse todos os documentos e relatórios da COCRIS. Operamos com total transparência e prestação de contas.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              Documentos Públicos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, idx) => (
                <div key={idx} className="card-cocris flex items-center justify-between">
                  <div className="flex gap-4 items-start flex-1">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">{doc.title}</h3>
                      <p className="text-sm text-foreground/60">{doc.date}</p>
                    </div>
                  </div>
                  <button className="btn-outline text-sm whitespace-nowrap ml-4">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
