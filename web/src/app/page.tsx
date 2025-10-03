import Link from "next/link";
import styles from './page.module.css';
import ButtonStyled from "@/components/ButtonStyled";

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
      
      <section className={styles.mapContainerSection}>
        <h2 className={styles.mapTitle}>Nossa Área de Atuação</h2>
        <p className={styles.mapSubtitle}>Atendemos com excelência as regiões Norte e Nordeste do Brasil</p>
        <div className={styles.mapContainer}>
          <img src="/mapa.png" alt="Mapa de Atuação da Francal Distribuidora" className={styles.mapImage} />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
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
      </section>
    </div>
  );
}