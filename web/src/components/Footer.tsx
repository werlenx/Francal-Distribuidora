import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p className={styles.footerMainText}>
            Grupo Francal Distribuidora — Acreditamos em um mundo melhor servindo a você
          </p>
          <p className={styles.footerCopyright}>
            © 2024 Francal Distribuidora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
