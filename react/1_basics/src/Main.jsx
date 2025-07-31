const Main = () => {
  return (
    <main>
      <aside className="left">
        <h1>Left</h1>
        <form>
          <label htmlFor="name">İsim</label>
          <br />
          <input id="name" type="text" />
        </form>
      </aside>
      <section>
        <h1>Main</h1>
      </section>
      <aside className="right">
        <h1>Right</h1>
      </aside>
    </main>
  );
};

export default Main;
