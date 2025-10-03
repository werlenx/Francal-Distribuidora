import styles from './page.module.css';

export default function Sobre() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Sobre a Francal Distribuidora
          </h1>
          <p className={styles.heroSubtitle}>
            Conheça nossa história, missão e valores que nos guiam há quase 30 anos
          </p>
        </div>
      </section>

      {/* História Section */}
      <section className={styles.historia}>
        <div className={styles.historiaContent}>
          <div className={styles.historiaGrid}>
            <div className={styles.historiaText}>
              <h2>Nossa História</h2>
              <p>
                Fundada em 1995, a Francal Distribuidora nasceu com o propósito de levar produtos 
                de qualidade ao Norte e Nordeste do Brasil com rapidez e confiabilidade.
              </p>
              <p>
                Ao longo de quase três décadas, construímos uma sólida reputação no mercado, 
                sempre priorizando a excelência no atendimento e a pontualidade nas entregas.
              </p>
            </div>
            <div className={styles.historiaStats}>
              <div className={styles.historiaStatsNumber}>29+</div>
              <div className={styles.historiaStatsText}>Anos de experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className={styles.missao}>
        <div className={styles.missaoContent}>
          <div>
            <h2 className={styles.missaoTitle}>Nossa Missão</h2>
            <blockquote className={styles.missaoQuote}>
              &ldquo;Promover um ambiente eficiente e colaborativo, alinhando talentos às posições 
              ideais para alcançar resultados de qualidade.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className={styles.valores}>
        <div className={styles.valoresContent}>
          <h2 className={styles.valoresTitle}>Nossos Valores</h2>
          <div className={styles.valoresGrid}>
            <div className={styles.valorCard}>
              <div className={styles.valorIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={styles.valorTitle}>Disciplina</h3>
              <p className={styles.valorDescription}>
                Comprometimento com prazos, processos e padrões de qualidade em todas as operações.
              </p>
            </div>

            <div className={styles.valorCard}>
              <div className={styles.valorIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={styles.valorTitle}>Credibilidade</h3>
              <p className={styles.valorDescription}>
                Construção de relacionamentos sólidos baseados na confiança e transparência.
              </p>
            </div>

            <div className={styles.valorCard}>
              <div className={styles.valorIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={styles.valorTitle}>Responsabilidade</h3>
              <p className={styles.valorDescription}>
                Compromisso com o desenvolvimento sustentável e o impacto positivo na sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className={styles.diferenciais}>
        <div className={styles.diferenciaisContent}>
          <h2 className={styles.diferenciaisTitle}>Nossos Diferenciais</h2>
          <div className={styles.diferenciaisGrid}>
            <div className={styles.diferencialCard}>
              <div className={styles.diferencialNumber}>40+</div>
              <div className={styles.diferencialTitle}>Caminhões Próprios</div>
              <p className={styles.diferencialDescription}>
                Frota própria garantindo controle total sobre as entregas
              </p>
            </div>

            <div className={styles.diferencialCard}>
              <div className={styles.diferencialNumber}>2</div>
              <div className={styles.diferencialTitle}>Centros de Distribuição</div>
              <p className={styles.diferencialDescription}>
                Santarém e Marabá (PA) para melhor cobertura regional
              </p>
            </div>

            <div className={styles.diferencialCard}>
              <div className={styles.diferencialNumber}>4</div>
              <div className={styles.diferencialTitle}>Estados Atendidos</div>
              <p className={styles.diferencialDescription}>
                Pará e Maranhão com presença consolidada
              </p>
            </div>

            <div className={styles.diferencialCard}>
              <div className={styles.diferencialNumber}>29</div>
              <div className={styles.diferencialTitle}>Anos de Experiência</div>
              <p className={styles.diferencialDescription}>
                Tradição e confiança no mercado regional
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
