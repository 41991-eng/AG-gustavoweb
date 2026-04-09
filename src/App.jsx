import './App.css'

const features = [
  { title: "Documento JSON", desc: "Dados armazenados como documentos BSON flexíveis, sem esquema fixo." },
  {  title: "Alta Performance", desc: "Índices poderosos e consultas rápidas mesmo em grande volume de dados." },
  {  title: "Escalabilidade", desc: "Sharding horizontal nativo para crescer conforme a demanda." },
  {  title: "Replica Set", desc: "Alta disponibilidade com replicação automática e failover." },
];
 
const steps = ["Instalar", "Conectar", "Inserir", "Consultar"];
 
export default function App() {
  return (
     <div className="page">
      <header className="hero">
        <a href='https://www.mongodb.com' className="hero-title">
          <span className="mongo-green">Mongo</span>DB
        </a>
        <p className="hero-sub">
          O banco de dados orientado a documentos mais popular do mundo.
          Flexível, escalável e pensado para o desenvolvedor moderno.
        </p>
      </header>
 
      <section className="features">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
 