import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <script
    dangerouslySetInnerHTML={{
        __html: `
        var remark_config = {
            theme: window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? "dark" : "light",
        };
        window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            window.REMARK42.changeTheme(newColorScheme);
        });
        `,
    }}
></script>
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {"Жил-был Пёс"}{" "}
          © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
