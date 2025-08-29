const ProductInfo = () => {
  return (
    <form className="d-flex flex-column mt-5 bg-black p-5 rounded">
      <label>Ürün Adı:</label>
      <input type="text" className="form-control" />
      <label>Ürün Fiyatı:</label>
      <input type="number" className="form-control" />

      <button className="btn btn-success mt-2">Kaydet</button>
    </form>
  );
};

export default ProductInfo;
