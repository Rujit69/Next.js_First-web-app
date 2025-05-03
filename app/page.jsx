import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI_Powered Prompts</span>
      </h1>
      <p className="desc">Tools to discover create and share prompts</p>

      <Feed/>
    </section>
  );
};

export default Home;
