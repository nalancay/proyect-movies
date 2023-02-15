import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <footer className="bg-dark text-white fixed-bottom pt-3">
      <div className="container">
        <nav className="row d-flex justify-content-center align-items-center">
          <ul className="list-unstyled ">
            <li>
              <FormattedMessage
                id="login.footer.red"
                values={{ name: "Natalia Alancay" }}
              />{" "}
              <a
                href="https://www.linkedin.com/in/natalia-alancay-454747b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="d-flex justify-content-center align-items-center text-success"
                href="mailto:alancaynatalia@gmail.com?subject=Hi%20Natalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="login.footer.contact" /> ✉
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
