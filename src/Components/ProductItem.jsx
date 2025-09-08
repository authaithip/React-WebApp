import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

// ...existing code...
const ProductItem = ({ product, id, updateProduct, deleteProduct }) => {
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const dialog = useRef();

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = (e) => {
    e.preventDefault();
    updateProduct(
      {
        ...editedProduct,
        pro_price:
          editedProduct.pro_price !== undefined &&
          editedProduct.pro_price !== null
            ? Number(editedProduct.pro_price)
            : editedProduct.pro_price,
        pro_qty:
          editedProduct.pro_qty !== undefined && editedProduct.pro_qty !== null
            ? Number(editedProduct.pro_qty)
            : editedProduct.pro_qty,
      },
      id
    );
    dialog.current?.close();
    setEditing(false);
  };

  const openModal = () => {
    setEditing(true);
    dialog.current?.showModal();
  };

  return (
    <>
      <tr className="bg-white ">
        <td className="px-4 py-2">{id + 1}</td>
        <td className="px-4 py-2">{product.pro_name}</td>
        <td className="px-4 py-2">{product.pro_des}</td>
        <td className="px-4 py-2">{product.pro_price}</td>
        <td className="px-4 py-2">{product.pro_qty}</td>
        <td className="px-4 py-2">
          <button onClick={openModal} className="text-teal-500">
            <FaPen />
          </button>
          <button
            onClick={() => deleteProduct(id)}
            className="text-red-500 ml-2"
          >
            <FaRegTrashCan />
          </button>
        </td>
      </tr>

      {createPortal(
        <dialog
          ref={dialog}
          className="rounded-md w-[480px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          onClick={(e) => e.target === dialog.current && dialog.current.close()}
        >
          <form className="p-6" onSubmit={submitEdit}>
            <h3 className="font-semibold text-xl">Edit Product</h3>
            <div className="mt-4">
              <label>Product Name</label>
              <input
                type="text"
                name="pro_name"
                value={editedProduct.pro_name ?? ""}
                onChange={handleEditChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label>Product Description</label>
              <textarea
                name="pro_des"
                value={editedProduct.pro_des ?? ""}
                onChange={handleEditChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label>Product Price</label>
              <input
                type="number"
                name="pro_price"
                value={editedProduct.pro_price ?? ""}
                onChange={handleEditChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label>Quantity</label>
              <input
                type="number"
                name="pro_qty"
                value={editedProduct.pro_qty ?? ""}
                onChange={handleEditChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-6 text-right space-x-2">
              <button
                type="submit"
                className="rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
              >
                Edit Product
              </button>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </form>
        </dialog>,
        document.body
      )}
    </>
  );
};

export default ProductItem;
