import React from "react";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

function ProductItem({ product, id }) {
  const openModal = () => {};
  return (
    <>
      <tr className="bg-white">
        <td className="px-4 py-2">{id + 1}</td>
        <td className="px-4 py-2">{product.pro_name}</td>
        <td className="px-4 py-2">{product.pro_des}</td>
        <td className="px-4 py-2">{product.pro_price}</td>
        <td className="px-4 py-2">{product.pro_qty}</td>
        <td className="px-4 py-2">
          <button onClick={openModal} className="text-teal-500">
            <FaPen />
          </button>
          <button onClick={openModal} className="text-red-500 ml-2">
            <FaRegTrashCan />
          </button>
        </td>
      </tr>
    </>
  );
}

export default ProductItem;
