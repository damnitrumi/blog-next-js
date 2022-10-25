import { Footer } from ".";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";

describe("<Footer/>", () => {
  it("should render Footer", () => {
    const { container } = renderTheme(<Footer footerHtml={"<h1>Olá</h1>"} />);
    expect(screen.getByRole("heading", { name: "Olá" })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1 {
        font-size: 2.4rem;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <h1>
              Olá
            </h1>
          </div>
        </footer>
      </div>
    `);
  });
});
