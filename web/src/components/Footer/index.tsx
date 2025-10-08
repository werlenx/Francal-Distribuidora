import styles from './index.module.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        {/* Mapa */}
        <div className={styles.mapSection}>
          {/* <iframe
            title="Mapa Francal Distribuidora"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6805071715257!2d-49.1383776261579!3d-5.364965553014514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92b5d90f7e3c3c0f%3A0x22e1790d3a5a3a1c!2sFrancal%20Distribuidora!5e0!3m2!1spt-BR!2sbr!4v1728379351782!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          ></iframe> */}
          <iframe
            title="Mapa Francal Distribuidora (local correto)"
            src="https://www.google.com/maps?q=-5.3427127,-49.0841317&hl=pt-BR&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          />
        </div>

        {/* Informações da empresa */}
        <div className={styles.infoSection}>
          <h3 className={styles.title}>Francal Distribuidora</h3>
          <p>IREZ E SIQUEIRA COMÉRCIO ATACADISTA DE CALÇADOS LTDA</p>
          <p>CNPJ: 07.809.073/0001-78</p>
          <p>Folha 29, Quadra Especial, Lt 3, Galpão 2</p>
          <p>Nova Marabá - Marabá - PA, 68508-970</p>
          <p>Telefone: (94) 8169-0584</p>
        </div>

        {/* Redes sociais */}
        <div className={styles.socialSection}>
          <h3 className={styles.title}>Siga-nos</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/francaldistruidora" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/francaldistribuidora" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/francal-distribuidora/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Linha final */}
      <div className={styles.footerBottom}>
        <p>© 2025 Francal Distribuidora. Todos os direitos reservados.</p>
        <p>
          Created by <a href="https://www.linkedin.com/in/werlen-araujo/" target="_blank" rel="noopener noreferrer">Werlen Araujo</a>
        </p>
      </div>
    </footer>
  )
}
