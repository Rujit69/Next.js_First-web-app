import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/provider";

export const metadata = {
  title: "Promptia",
  description: "discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
