import Link from "next/link";
import styles from './page.module.css';
import ButtonStyled from "@/components/ButtonStyled";
import PartnersCarousel from "@/components/parceirosSlider";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroWelcome}>
            Bem vindo à Francal Distribuidora
          </p>
          <h1 className={styles.heroTitle}>
            Acreditamos em um mundo melhor servindo a você
          </h1>
          <p className={styles.heroSubtitle}>
            Distribuição logística confiável para o Norte e Nordeste do Brasil
          </p>

          
          <div className={styles.heroButtons}>
            <ButtonStyled href="/produtos">Conheça nossos produtos</ButtonStyled>
            <ButtonStyled href="/contato">Entre em contato</ButtonStyled>
          </div>
        </div>
      </section>
      {/* services section */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <h4 className={styles.servicesTitle}>FRENTE<span>GRATÍS</span></h4>
          <p>ENTREGA RAPIDA</p>
          <img className={styles.ico} src="delivery _WHITE.png" alt="" />
        </div>
        <div className={styles.servicesContent}>
          <h4 className={styles.servicesTitle}>PEDIDO<span>RASTREADO</span></h4>
          <p>CONPANHE SEU PEDIDO EM TEMPO REAL</p>
          <img className={styles.ico} src="rastreio.svg" alt="" />
        </div>
        <div className={styles.servicesContent}>
          <h4 className={styles.servicesTitle}>LOJA<span>ONLINE</span></h4>
          <p>DESCUBRA NOVIDADES </p>
          <img className={styles.ico} src="shopping-bag-svgrepo-com.svg" alt="" />
          
        </div>
      </section>


      {/* Destaques Section */}
      <section className={styles.destaques}>
        <div className={styles.destaquesContent}>
          <h2 className={styles.destaquesTitle}>
            Nossos Diferenciais
          </h2>
          <div className={styles.destaquesGrid}>
            <div className={styles.destaqueCard}>
              <div className={styles.destaqueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className={styles.destaqueTitle}>Distribuição Logística</h3>
              <p className={styles.destaqueDescription}>
                Soluções completas em logística para atender sua empresa com eficiência e rapidez.
              </p>
            </div>

            <div className={styles.destaqueCard}>
              <div className={styles.destaqueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={styles.destaqueTitle}>Cobertura Regional</h3>
              <p className={styles.destaqueDescription}>
                Atendemos toda a região Norte e Nordeste com centros de distribuição estratégicos.
              </p>
            </div>

            <div className={styles.destaqueCard}>
              <div className={styles.destaqueIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className={styles.destaqueTitle}>Frota Própria</h3>
              <p className={styles.destaqueDescription}>
                40 caminhões próprios garantindo controle total sobre as entregas e prazos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*nossos parceiros*/}
      <section className={styles.partnersSection}>
        <h2 className={styles.partnersTitle}>Nossos Parceiros</h2>
        <div className={styles.partnersWrapper}>
          <PartnersCarousel />
        </div>
        <p>Trabalhamos com as principais marcas do mercado, garantindo produtos de qualidade e confiabilidade para nossos clientes.</p>
      </section>

      {/*CTA Whatsapp */}
      <section className={styles.ctaWhatsappSection}>
        <p className={styles.textWhatsApp}>
          COMPRE AGORA PELO <br />
          <span>WHATSAPP</span>
        </p>
        <img src="WhatsAppLogo.webp" alt="icone do whatsapp" />
        <p className={"text-align: right"}>
          AGILIDADE NO <span>ATENDIMENTO</span>
          <br />
          CONVERSE COM A FRANCAL AGORA MESMO!
        </p>

      </section>
      {/* Info Section */}
      <section className={styles.infoSection}>
          <div className={styles.infoContainer}>
              
              {/* COLUNA 1: Sobre Nós */}
              <div className={styles.infoCard}>
                  <h3 className={styles.cardTitle}>FUNDADA EM 1995</h3>
                  <p className={styles.cardText}>
                      A FRANCAL DISTRIBUIDORA NASCEU COM O PROPÓSITO DE LEVAR PRODUTOS DE 
                      <span className={styles.highlight}> QUALIDADE COM RAPIDEZ E CONFIABILIDADE</span>, 
                      SEMPRE PRIORIZANDO A EXCELÊNCIA NO ATENDIMENTO E A PONTUALIDADE NAS ENTREGAS.
                  </p>
                  <ButtonStyled href="/sobre" color="" backgroundColor="#e74c3c">Sobre nós</ButtonStyled>
              </div>

              {/* COLUNA 2: Atendimento e Contato */}
              <div className={styles.infoCard}>
                  <h3 className={styles.cardTitle}>
                      ATENDIMENTO <span className={styles.highlight}>DAS 08H00 ÀS 12H00 - 14H00 ÀS 18:00</span> DE SEGUNDA A SEXTA.
                  </h3>
                  <div className={styles.iconPlaceholder}>
                      {/* Aqui ficaria seu ícone de Fale Conosco (em SVG) */}
                      <span className={styles.icon}>📞</span> 
                  </div>
                  <h3 >FALE COM A GENTE</h3>
                  <ButtonStyled href="/sobre" color="" backgroundColor="#e74c3c">Fale conosco</ButtonStyled>
              </div>

              {/* COLUNA 3: Regiões de Atendimento */}
              <div className={styles.infoCard}>
                  <h3 className={styles.cardTitle}>
                      ATENDIMENTO NAS <br /> REGIÕES <span className={styles.highlight}>NORTE E NORDESTE</span>
                  </h3>
                  <div className={styles.mapPlaceholder}>
                      {/* Aqui ficaria o mapa das regiões (em SVG) */}
                      <span className={styles.map}>🗺️</span> 
                  </div>
                  <ButtonStyled href="/sobre" color="" backgroundColor="#e74c3c">Abrir</ButtonStyled>
              </div>
              
          </div>
      </section>

      {/* Mapa Section */}
      {/* <section className={styles.mapContainerSection}>
        <h2 className={styles.mapTitle}>Nossa Área de Atuação</h2>
        <p className={styles.mapSubtitle}>Atendemos com excelência as regiões Norte e Nordeste do Brasil</p>
        <div className={styles.mapContainer}>
          <img src="/mapa.png" alt="Mapa de Atuação da Francal Distribuidora" className={styles.mapImage} />
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Pronto para trabalhar conosco?
          </h2>
          <p className={styles.ctaSubtitle}>
            Entre em contato e descubra como podemos ajudar sua empresa a crescer.
          </p>
          <Link
            href="/contato"
            className={styles.ctaButton}
          >
            Fale Conosco
          </Link>
        </div>
      </section> */}
      
    </div>
  );
}