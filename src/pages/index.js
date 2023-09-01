import Cabecalho from "@/components/Cabecalho";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
     <Cabecalho titulo="Transportes LTDA"/>
     <Menu/>
     <h1>Página Inicial</h1>
     <Card titulo="Apresentação da Empresa" texto="A Empresa de Transporte LTDA é líder no setor de transporte, oferecendo soluções logísticas abrangentes para atender às necessidades de nossos clientes em todo o país."/>
     <br></br>
     <Card titulo="Anúncio Novo Serviço" texto="emos o prazer de anunciar o lançamento de nosso novo serviço de transporte expresso, que oferece entregas rápidas e seguras para atender às demandas crescentes de nossos clientes por entregas ágeis"/>
     <br></br>
     <Card titulo="Convite para Parceria" texto="Estamos interessados em explorar oportunidades de parceria com sua empresa para otimizar operações logísticas e oferecer soluções de transporte de classe mundial"/>
     <br></br>
     <Card titulo="Aviso aos Clientes" texto="Informamos aos nossos estimados clientes que nosso horário de atendimento ao cliente foi estendido para oferecer suporte adicional. Agora estamos disponíveis das 8h às 20h, de segunda a sexta-feira"/>
     <br></br>
     <Card titulo="Aviso de Manutenção de Frota" texto="Para garantir a segurança e confiabilidade de nossos veículos, informamos que haverá manutenção programada em nossa frota de caminhões durante o próximo fim de semana. Pedimos desculpas por qualquer inconveniente"/>
     <Rodape />
     
    </>
  )
}