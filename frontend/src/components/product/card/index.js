import './style.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img src="https://cobasi.vteximg.com.br/arquivos/ids/206342-1000-1000/1.jpg" className="img-fluid align-center" />
      <button className="btn btn-primary rounded-circle">+</button>

      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>

      <small>
        <b>Ração para Cães Adultos Carne e Vegetais Pedigree</b>
      </small>
    </div>
  );
}

export default Product;