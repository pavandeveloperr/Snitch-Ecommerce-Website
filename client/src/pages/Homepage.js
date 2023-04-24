import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Checkbox, Radio } from "antd";
import { Prices } from "../Components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import ProductSlider from "../Components/ProductSlider/ProductSlider";
import "../../src/Styles/cartButton.css";

const Homepage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/all-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
    getAllCategory();
    getTotal();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Products - Best Offers"}>
      <ProductSlider />
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="card border-dark d-flex flex-column justify-content-center align-items-center card-border-gray shadow-md">
            <div className="card-body">
              <h4 className="card-title text-center mb-3">
                Filter by Category
              </h4>
              {categories?.map((c) => (
                <div
                  className="form-check cursor-pointer d-block my-2"
                  key={c._id}
                >
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                </div>
              ))}
              <h4 className="text-center mt-4 mb-3">Filter by Price</h4>

              <Radio.Group
                className="d-flex flex-column justify-content-center align-items-center"
                onChange={(e) => setRadio(e.target.value)}
              >
                {Prices?.map((p) => (
                  <div
                    key={p._id}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Radio className="d-block text-center my-1" value={p.array}>
                      {p.name}
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <button
              className="btn btn-danger my-4 mx-auto d-block"
              onClick={() => window.location.reload()}
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>

        <div className="col-md-9">
          <h1 className="text-center mb-3 my-auto">All Products</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2">
            {products?.map((p) => (
              <div key={p._id} className="col">
                <div className="card h-100 border-3 shadow-lg bg-gradient">
                  <img
                    src={`/api/v1/product/product-image/${p._id}`}
                    className="card-img-top h-75"
                    alt={p.name}
                  />
                  <hr />

                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}
                    </p>
                    <p className="card-text">$ {p.price}</p>
                    <div className="d-grid gap-md-1 d-md-flex justify-content-md-between">
                      <button
                        className="btn btn-outline-dark mb-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        MORE DETAILS
                      </button>

                      <button
                        className="btn btn-purple fw-semibold mb-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Product Added to Cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products?.length < total && (
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-warning btn-md border fw-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading..." : "Loadmore"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
