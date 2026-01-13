import React, { useState } from 'react';
import { 
  Users, 
  Network, 
  Zap, 
  MessageSquare, 
  Briefcase, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  BrainCircuit,
  Building2,
  Search,
  Menu,
  X,
  AlertTriangle,
  UserX,
  History,
  ThermometerSnowflake,
  Brain,
  Ban,
  Eye,
  Clock,
  LayoutGrid,
  Database,
  FileText,
  XCircle,
  Target,
  ShieldCheck,
  Star,
  Quote,
  Coffee,
  Sparkles,
  CreditCard,
  Smartphone,
  ShieldAlert,
  Lock,
  Gift
} from 'lucide-react';

// URL de suscripción (Mercado Pago)
const CHECKOUT_URL = "https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=d772bc4654dc46dda2092f713b33ce96";
// URL de la versión gratuita (App)
const FREE_APP_URL = "https://nexus.marcelobarcia.com";
// URL de WhatsApp
const WHATSAPP_URL = "https://wa.me/56982770910";

const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.02L0 24l6.135-1.61a11.77 11.77 0 005.911 1.577h.005c6.632 0 12.046-5.414 12.046-12.05a11.75 11.75 0 00-3.51-8.52z"/>
  </svg>
);

const Navbar = ({ onOfferClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Network className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">NexusCRM</span>
        </div>
        
        <div className="hidden md:flex items-center">
          <button 
            onClick={onOfferClick}
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all shadow-lg"
          >
            Quiero aprovechar oferta lanzamiento
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          <button 
            onClick={() => { onOfferClick(); setIsOpen(false); }}
            className="bg-white text-black px-4 py-3 rounded-full text-sm font-bold text-center"
          >
            Quiero aprovechar oferta lanzamiento
          </button>
        </div>
      )}
    </nav>
  );
};

const ErrorCard = ({ errorNum, icon: Icon, title, whatHappens, realCost, solution }) => (
  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
       <span className="text-6xl font-black italic">0{errorNum}</span>
    </div>
    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-red-500 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">❌ Error {errorNum} — {title}</h3>
    
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Qué pasa:</p>
        <p className="text-gray-400 text-sm leading-relaxed">{whatHappens}</p>
      </div>
      
      <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/10">
        <p className="text-xs font-bold text-red-500/70 uppercase tracking-widest mb-1">Costo real:</p>
        <p className="text-red-200/80 text-sm italic">{realCost}</p>
      </div>
      
      <div className="pt-4 flex items-start gap-2">
        <div className="mt-1">
          <Zap className="w-4 h-4 text-blue-500" />
        </div>
        <p className="text-blue-400 text-sm font-medium">👉 {solution}</p>
      </div>
    </div>
  </div>
);

const BenefitItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
    <div className="mt-1 shrink-0">
      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Icon className="text-blue-500 w-5 h-5" />
      </div>
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author, role, highlight = false }) => (
  <div className={`p-8 rounded-[32px] border ${highlight ? 'border-blue-500/30 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'border-white/5 bg-white/[0.02]'} hover:border-white/20 transition-all flex flex-col justify-between group`}>
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-blue-500/20 mb-4 group-hover:text-blue-500/40 transition-colors" />
      <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
        {quote}
      </p>
    </div>
    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-gray-400 border border-white/10">
        {author.charAt(0)}
      </div>
      <div>
        <p className="text-white font-bold text-sm">{author}</p>
        <p className="text-gray-500 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-blue-500 w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const App = () => {
  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  const handleFreeApp = () => {
    window.open(FREE_APP_URL, '_blank');
  };

  // Función para scroll suave a la oferta
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden relative">
      <Navbar onOfferClick={scrollToOffer} />

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 group"
      >
        <WhatsAppIcon className="w-6 h-6 shrink-0" />
        <span className="font-bold text-sm hidden sm:block">¿Tienes dudas?</span>
      </a>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RELACIONES PRIMERO, SIN RUIDO</span>
          </div>

          <div className="mb-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://i.postimg.cc/sXKtdDFs/Imagen-1-Dispositivos.png" 
              alt="NexusCRM en múltiples dispositivos" 
              className="relative w-full h-auto max-w-4xl mx-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Decidir en qué relaciones <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              invertir tu tiempo,
            </span> <br />
            en minutos y <span className="text-red-500">sin CRM pesados.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            La mayoría de los vendedores B2B habla con personas todos los días, pero no tiene una visión clara de sus relaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button 
              onClick={scrollToOffer}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Quiero aprovechar oferta lanzamiento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Error Section */}
          <div className="text-left mt-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Estos errores silenciosos te cuestan oportunidades todos los meses.</h2>
              <p className="text-gray-500 text-lg">No se ven en el pipeline, pero pasan todos los días.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <ErrorCard 
                errorNum={1}
                icon={UserX}
                title="Hablar mucho con las personas equivocadas"
                whatHappens="Invertís tiempo en contactos que no influyen mientras decisores reales quedan fuera de foco."
                realCost="Reuniones que no avanzan, oportunidades que nunca se formalizan y desgaste innecesario."
                solution="NexusCRM te muestra quién influye realmente en cada cuenta."
              />
              <ErrorCard 
                errorNum={2}
                icon={History}
                title="Perder contexto entre conversaciones"
                whatHappens="Repetís temas, olvidás acuerdos o llegás a una llamada sin recordar qué se habló la última vez."
                realCost="Pérdida de confianza, conversaciones superficiales y relaciones que se enfrían."
                solution="NexusCRM centraliza el contexto y lo resume antes de cada contacto."
              />
              <ErrorCard 
                errorNum={3}
                icon={ThermometerSnowflake}
                title="Dejar que relaciones valiosas se enfríen"
                whatHappens="No porque no te interese, sino porque nadie te muestra que están quedando atrás."
                realCost="Oportunidades dormidas, reactivaciones forzadas y sensación de “llegué tarde”."
                solution="NexusCRM detecta enfriamiento relacional antes de que sea tarde."
              />
              <ErrorCard 
                errorNum={4}
                icon={Brain}
                title="Depender solo de tu memoria"
                whatHappens="Todo vive en tu cabeza… hasta que no alcanza más."
                realCost="Decisiones reactivas, priorización errática y estrés innecesario."
                solution="NexusCRM funciona como memoria relacional externa."
              />
              <ErrorCard 
                errorNum={5}
                icon={Ban}
                title="Usar un CRM que te obliga a trabajar en pipeline"
                whatHappens="Registrás oportunidades por obligación, no porque la relación esté madura."
                realCost="Falsas expectativas, pipeline inflado y decisiones mal informadas."
                solution="En NexusCRM, las oportunidades acompañan a la relación, no la fuerzan."
              />
              <div className="p-10 rounded-[32px] bg-blue-600 flex flex-col justify-center items-center text-center">
                <AlertTriangle className="w-12 h-12 text-white mb-6" />
                <p className="text-white text-lg font-medium leading-relaxed">
                  Ninguno de estos errores aparece como una alerta roja.
                  <br /><br />
                  Pero juntos explican por qué muchas oportunidades nunca llegan a existir.
                </p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-blue-100 font-bold italic">
                    "Relaciones sin claridad cuestan más que oportunidades perdidas."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 mb-20 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-[40px] blur-3xl opacity-30"></div>
              <img 
                src="https://i.postimg.cc/kXCfFPLj/Imagen-2.png" 
                alt="Visualización de NexusCRM" 
                className="relative w-full h-auto max-w-5xl mx-auto rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: El sistema hace el trabajo por vos */}
      <section id="sistema" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              El sistema hace el trabajo por vos <span className="text-blue-500 italic">en minutos</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <BenefitItem 
              icon={Eye}
              title="Claridad inmediata sobre tu red"
              description="NexusCRM organiza personas, empresas y conexiones para que veas tu red completa sin esfuerzo ni configuraciones complejas."
            />
            <BenefitItem 
              icon={BrainCircuit}
              title="Contexto automático antes de cada conversación"
              description="La IA resume la relación con cada contacto y te recuerda qué pasó la última vez, sin que tengas que releer notas."
            />
            <BenefitItem 
              icon={Clock}
              title="Prioriza dónde invertir tu tiempo"
              description="El sistema te ayuda a identificar relaciones activas, tibias o frías para que sepas a quién llamar hoy."
            />
            <BenefitItem 
              icon={Network}
              title="Mapa de red siempre actualizado"
              description="Visualizá cómo se conectan las personas entre sí y detectá influencias, dependencias y vacíos relacionales."
            />
            <BenefitItem 
              icon={LayoutGrid}
              title="Oportunidades simples, sin burocracia"
              description="Registrá oportunidades solo cuando la relación lo amerita, sin pipelines forzados ni campos innecesarios."
            />
            <BenefitItem 
              icon={Database}
              title="Memoria relacional que no se pierde"
              description="Toda la historia queda registrada para que las relaciones no dependan solo de tu memoria."
            />
            <BenefitItem 
              icon={FileText}
              title="Un reporte único de gestión"
              description="Generá un reporte profesional único con tu actividad y estado de relaciones en segundos, listo para compartir."
            />
          </div>

          {/* Cómo se ve esto en la práctica */}
          <div id="funcionalidades" className="py-20 border-t border-white/5">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">Cómo se ve esto en la práctica</h2>
              <p className="text-gray-400">Diseñado para la claridad, no para la burocracia.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-24">
              <FeatureCard 
                icon={Users}
                title="Personas"
                description="Contexto completo de cada relación. Todo el historial en un solo lugar."
              />
              <FeatureCard 
                icon={Building2}
                title="Empresas"
                description="Visión compartida entre múltiples contactos y nodos de decisión."
              />
              <FeatureCard 
                icon={Network}
                title="Mapa de Red"
                description="Claridad visual sobre conexiones, influencia y eslabones perdidos."
              />
              <FeatureCard 
                icon={Briefcase}
                title="Oportunidades Minimalistas"
                description="Registro simple cuando la relación lo amerita, sin pipelines forzados."
              />
              <FeatureCard 
                icon={MessageSquare}
                title="Registro de Actividades"
                description="Conversaciones y hitos guardados sin perder el hilo del contexto."
              />
              <FeatureCard 
                icon={BrainCircuit}
                title="IA – Resumen de Relación"
                description="La IA analiza el contexto y te da un resumen automático antes de hablar."
              />
            </div>
          </div>

          {/* Highlight: Reporte Visual Único */}
          <div className="relative group max-w-4xl mx-auto text-center mb-24">
             <div className="mb-8">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Visualización de Datos</span>
                <h3 className="text-2xl font-bold mt-2">Un reporte único de gestión</h3>
             </div>
             <div className="relative mb-10">
                <div className="absolute -inset-1 bg-blue-600/10 rounded-[40px] blur-2xl opacity-50 transition duration-1000 group-hover:opacity-100"></div>
                <img 
                  src="https://i.postimg.cc/2yLRQRJj/Imagen-3-Reporte.png" 
                  alt="Ejemplo de Reporte NexusCRM" 
                  className="relative w-full h-auto rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10"
                />
             </div>
             <div className="max-w-2xl mx-auto space-y-2">
                <p className="text-xl text-white font-medium leading-relaxed">
                  Personas, empresas, relaciones y oportunidades resumidas en un único documento.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Sin armar presentaciones. Sin copiar información. <br />
                  <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Listo para revisar o compartir.</span>
                </p>
             </div>
          </div>

          {/* Es para vos si... */}
          <div className="pt-24 pb-12 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-10 rounded-[40px] bg-blue-500/5 border border-blue-500/10">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <ShieldCheck className="text-blue-500 w-8 h-8" />
                  Es para vos si…
                </h3>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-white">Vendés por relaciones, no por volumen</h4>
                      <p className="text-gray-400 text-sm">Tu trabajo depende de conversaciones, confianza y seguimiento humano.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-white">Tenés múltiples contactos por empresa</h4>
                      <p className="text-gray-400 text-sm">Necesitás entender quién influye, quién decide y cómo se conectan.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-white">Te cuesta priorizar a quién llamar</h4>
                      <p className="text-gray-400 text-sm">Tenés contactos valiosos, pero poca claridad sobre dónde invertir tiempo hoy.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-white">Querés contexto antes de hablar</h4>
                      <p className="text-gray-400 text-sm">No querés llegar a una llamada sin recordar qué pasó la última vez.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-white">Buscás simplicidad, no un CRM pesado</h4>
                      <p className="text-gray-400 text-sm">Preferís una herramienta clara y liviana antes que pipelines complejos.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-10 rounded-[40px] bg-red-500/5 border border-red-500/10">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-red-400">
                  <XCircle className="text-red-500 w-8 h-8" />
                  No es para vos si…
                </h3>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <Ban className="text-red-900 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-gray-300">Buscás automatizar mensajes o hacer spam</h4>
                      <p className="text-gray-500 text-sm">NexusCRM no envía correos ni automatiza ventas.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <LayoutGrid className="text-red-900 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-gray-300">Necesitás pipelines complejos y workflows</h4>
                      <p className="text-gray-500 text-sm">No está pensado para gestión operativa intensiva.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target className="text-red-900 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-gray-300">Vendés por volumen transaccional</h4>
                      <p className="text-gray-500 text-sm">Si tu foco es velocidad y cantidad, hay otras herramientas mejores.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Brain className="text-red-900 shrink-0 w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-gray-300">Querés que el sistema venda por vos</h4>
                      <p className="text-gray-500 text-sm">Acá la decisión sigue siendo humana.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20 text-center space-y-8">
              <div className="max-w-xl mx-auto">
                <p className="text-3xl font-bold text-white mb-2 italic">"NexusCRM no reemplaza tu criterio."</p>
                <p className="text-xl text-blue-400 font-medium tracking-wide">Te da claridad para usarlo mejor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Testimonios */}
      <section id="testimonios" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Lo que dicen quienes venden por relaciones</h2>
            <p className="text-gray-400 text-lg">NexusCRM ya es la memoria relacional de líderes B2B.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="“No me ayudó a vender más rápido, me ayudó a pensar mejor. Ahora sé a quién llamar y por qué.”"
              author="Vendedor B2B Senior"
              role="Servicios profesionales"
              highlight={true}
            />
            <TestimonialCard 
              quote="“Por primera vez tengo el contexto completo de una relación sin revisar notas viejas. Eso cambia completamente las conversaciones.”"
              author="Consultor"
              role="Consultor independiente"
            />
            <TestimonialCard 
              quote="“Dejé de depender de mi memoria para todo. NexusCRM se volvió mi memoria relacional.”"
              author="Founder / Partner"
              role="Founder · Empresa de servicios"
            />
            <TestimonialCard 
              quote="“El mapa de red me mostró relaciones que estaba descuidando sin darme cuenta. No fue obvio hasta que lo vi.”"
              author="Ventas consultivas"
              role="Sales Manager · B2B"
            />
            <TestimonialCard 
              quote="“Me gusta que no me obliga a trabajar en pipeline. Registro oportunidades solo cuando tienen sentido.”"
              author="Ejecutivo comercial"
              role="Ventas corporativas"
            />
            <TestimonialCard 
              quote="“No es un CRM más. Es una herramienta para decidir dónde invertir tiempo.”"
              author="Usuario orientado a claridad"
              role="Ventas consultivas · Tecnología"
              highlight={true}
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN: Oferta por tiempo limitado */}
      <section id="oferta" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-red-500 text-white text-xs font-black px-4 py-2 rounded-full rotate-12 shadow-xl animate-pulse">
              80% OFF LANZAMIENTO
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-12">
              <div className="flex items-center gap-3 text-blue-400 mb-4">
                <Coffee className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-sm">Solo por tiempo limitado</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">☕ Todo lo que incluye NexusCRM</h2>
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="text-5xl md:text-7xl font-black text-white">$4.999 CLP <span className="text-2xl text-gray-500 font-normal">/ mensual</span></div>
                <div className="text-blue-400 font-medium mb-2">(menos que un café por semana)</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    Acceso completo por lanzamiento
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Durante esta promo tenés acceso a todas las funcionalidades por solo $4.999 mensual. Sin límites artificiales para que pruebes el potencial real de tu red.
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    { t: "Gestión de personas y empresas", d: "Toda tu red organizada con contexto real." },
                    { t: "Mapa de red completo", d: "Visualizá influencias y dónde invertir tiempo." },
                    { t: "Actividades y oportunidades", d: "Seguimiento simple sin burocracia." },
                    { t: "Resumen de relación con IA", d: "Contexto automático antes de hablar." },
                    { t: "Detección de temperatura", d: "Relaciones activas, tibias y frías." },
                    { t: "Un reporte único de gestión", d: "Resumen listo para revisar o compartir." },
                    { t: "Multi-dispositivo", d: "Acceso desde computador, tablet y celular." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <div>
                        <span className="font-bold text-white text-sm">{item.t}:</span>
                        <span className="text-gray-400 text-sm ml-1">{item.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black/40 rounded-3xl p-8 border border-white/5">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  🔒 Sin letra chica
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Sin contrato
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Sin tarjeta obligatoria
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Sin automatizaciones invasivas
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Sin CRM pesados
                  </li>
                </ul>
                
                <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-center">
                  <p className="text-blue-400 font-bold mb-1">🕒 Promo por tiempo limitado</p>
                  <p className="text-white text-2xl font-black">$4.999 CLP mensual</p>
                  <p className="text-gray-500 text-xs mt-2 uppercase tracking-tighter">Ganá claridad todos los días</p>
                </div>
              </div>
            </div>

            {/* Garantía */}
            <div className="mb-12 p-10 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all">
              <div className="absolute -inset-1 bg-blue-500/5 blur-3xl opacity-20" />
              
              <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                      <ShieldAlert className="text-blue-400 w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">🛡️ Garantía incondicional de 7 días</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Tenés 7 días para probar NexusCRM con total tranquilidad y ver si realmente te da claridad sobre tu red y tus relaciones.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" /> Si no te aporta valor, devolvemos el 100%.
                    </p>
                    <p className="text-gray-500 text-sm ml-7 italic">Sin preguntas. Sin burocracia. Sin letra chica.</p>
                  </div>
                </div>

                <div className="bg-blue-600/10 rounded-3xl p-8 border border-blue-500/20">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-blue-400" />
                    🔒 El riesgo es nuestro
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Creemos que la claridad relacional se siente en los primeros días. Por eso, la confianza es nuestra y el riesgo es 100% nuestro.
                  </p>
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <p className="text-blue-300 font-bold text-lg mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5" /> 🎯 Tenés todo para ganar:
                    </p>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Claridad sobre tus relaciones</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Foco sobre dónde invertir tiempo</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Tranquilidad antes de hablar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <button 
                onClick={handleCheckout}
                className="w-full bg-white text-black py-6 rounded-full font-black text-2xl hover:bg-blue-50 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group"
              >
                Aprovechar oferta de lanzamiento
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-4 text-gray-500 text-sm font-medium">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-500" /> 7 días de garantía</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>Garantía total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/10 text-center relative overflow-hidden">
        {/* Glow de fondo para el footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-12 italic leading-tight">"Quiero que NexusCRM sea el motor de mis relaciones."</h2>
          
          <div className="mb-16 space-y-8">
            <button 
              onClick={handleFreeApp}
              className="bg-white text-black px-12 py-6 rounded-full font-black text-2xl hover:bg-blue-200 transition-all shadow-2xl group flex items-center gap-3 mx-auto"
            >
              Empezar ahora gratis
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* SECCIÓN SECRETO */}
            <div className="max-w-md mx-auto p-6 rounded-[24px] bg-blue-500/5 border border-blue-500/10 flex items-start gap-4 text-left group hover:border-blue-500/30 transition-all">
               <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Gift className="text-blue-400 w-5 h-5" />
                  </div>
               </div>
               <div>
                  <p className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-widest">Psst... si llegaste hasta acá:</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Te cuento un secreto: podés usar la app <span className="text-white font-bold">gratis hasta con 15 contactos</span> para probarla sin limitaciones. Totalmente gratis.
                  </p>
               </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Network className="text-blue-500 w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">NexusCRM</span>
            </div>
            <div className="flex items-center gap-8 text-gray-500 text-xs font-medium uppercase tracking-widest">
               <span>Relaciones Primero</span>
               <span>Sin CRM Pesados</span>
            </div>
            <p className="text-gray-600 text-sm">© 2025 NexusCRM. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;