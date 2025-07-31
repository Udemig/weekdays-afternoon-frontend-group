const Header = () => {
  let name = "Yusuf";
  const giveAlert = () => {
    alert("Butona tıklandı");
  };
  return (
    <header className="bg-success d-flex align-items-center justify-content-between px-3 py-5">
      <h1>Logo</h1>
      <p>{name} </p>

      <button onClick={giveAlert}>Uyarı Ver</button>
    </header>
  );
};

export default Header;
