"use client";

// import CustomForm from "@/components/CustomForm";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
// import { toast } from "react-toastify";
import { Item } from "../../../../typings";

const Main = () => {
  const pathName = usePathname();
  const path = pathName.split("/")[2];

  const [items, setItems] = useState<Item[]>([]);

  // const [enteredFormData, SetEnteredFormData] = useState({
  //   name: "",
  //   capacity: 0,
  // });

  // const [responseMessage, setResponseMessage] = useState("");

  // const handleCreate = async () => {
  //   console.log("Create operation triggered", enteredFormData);

  //   if (!enteredFormData.name) {
  //     toast.error("Please fill all required fields");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("/api/players/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(enteredFormData),
  //     });

  //     console.log("response ", response);

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     // Check if the response has a body before parsing
  //     const data = response.headers
  //       .get("Content-Type")
  //       ?.includes("application/json")
  //       ? await response.json()
  //       : {};

  //     console.log("response, data: " + data);
  //     setResponseMessage(data.message);
  //     SetEnteredFormData({
  //       name: "",
  //       capacity: 0,
  //     });
  //   } catch (error) {
  //     console.log("Error creating item:", error);
  //     setResponseMessage("Failed to create item");
  //   } finally {
  //     toast(responseMessage);
  //     handleRead();
  //   }
  // };

  const handleRead = async () => {
    console.log("Read operation triggered");
    // Add logic to fetch/read a record
    try {
      const response = await fetch("/api/items/read");
      const data = await response.json();
      console.log("Items fetched successfully:", data);
      setItems(data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  const handleUpdate = () => {
    console.log("Update operation triggered");
    // Add logic to update a record
  };

  const handleDelete = () => {
    console.log("Delete operation triggered");
    // Add logic to delete a record
  };

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen items-center justify-center">
      <Header />
      <div className="px-10 py-7 gap-6 flex flex-col items-center">
        <p className="text-2xl">{path} Database</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
          >
            Create
          </button>
          <button
            onClick={handleRead}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          >
            Read
          </button>
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
          >
            Delete
          </button>
        </div>

        <Modal
          title={path}
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        >
          {/* <CustomForm
            handleCreate={handleCreate}
            SetEnteredFormData={SetEnteredFormData}
          /> */}
          <p></p>
        </Modal>

        {items.length > 0 && (
          <div className="overflow-x-auto max-h-dvh overflow-scroll">
            <table className="min-w-full border border-gray-300 bg-white rounded-lg ">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    ID
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Item Name
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    STock Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={item?.item_id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item.item_id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item.item_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {item.stock_quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
