const UserForm = () => {
  return (
    <form className="d-flex flex-column mt-5 bg-black p-5 rounded">
      <label>İsim Giriniz:</label>
      <input type="text" className="form-control" />
      <label>Soyisim Giriniz:</label>
      <input type="text" className="form-control" />
      <button className="btn btn-success mt-2">Gönder</button>
    </form>
  );
};

export default UserForm;
