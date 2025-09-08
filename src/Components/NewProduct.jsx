// ...existing code...
import React, { useRef, useState } from "react";

const NewProduct = ({ addProduct }) => {
  const dialog = useRef(); // ใช้ useRef ควบคุม dialog
  const [product, setProduct] = useState({
    pro_name: "",
    pro_des: "",
    pro_price: "",
    pro_qty: "",
  });

  const openDialog = () => dialog.current.showModal();
  const closeDialog = () => dialog.current.close();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // เพิ่มสินค้าใหม่
    addProduct({
      ...product,
      pro_price: parseFloat(product.pro_price),
      pro_qty: parseInt(product.pro_qty, 10),
    });

    setProduct({ pro_name: "", pro_des: "", pro_price: "", pro_qty: "" }); // เคลียร์ฟอร์ม
    closeDialog(); // ปิด dialog
  };

  return (
    <>
      {/* ปุ่มเปิด dialog */}
      <button
        onClick={openDialog}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add New Product
      </button>

      {/* Dialog */}
      <dialog
        ref={dialog}
        className="rounded-md w-[480px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        onClick={(e) => e.target === e.currentTarget && closeDialog()}
      >
        <form className="p-6" onSubmit={handleSubmit}>
          <h3 className="font-semibold text-xl mb-4">Add New Product</h3>

          <div className="mb-4">
            <label>Product Name</label>
            <input
              type="text"
              name="pro_name"
              value={product.pro_name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label>Product Description</label>
            <textarea
              name="pro_des"
              value={product.pro_des}
              onChange={handleChange}
              placeholder="Product Description"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label>Product Price</label>
            <input
              type="number"
              name="pro_price"
              value={product.pro_price}
              onChange={handleChange}
              placeholder="Product Price"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label>Product Quantity</label>
            <input
              type="number"
              name="pro_qty"
              value={product.pro_qty}
              onChange={handleChange}
              placeholder="Quantity"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>

          <div className="mt-6 text-right space-x-2">
            <button
              type="submit"
              className="rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
            >
              Add Product
            </button>
            <button
              type="button"
              onClick={closeDialog}
              className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default NewProduct;
// ...existing code...
