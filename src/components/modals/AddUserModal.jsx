import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../axios";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from "react";

const AddUserModal = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    present_address: "",
    phone_number: "",
    sex: "",
    civil_status: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axios.post("/post-users", formData);
      return res.data;
    },
    onSuccess: () => {
      document.getElementById("my_modal_2").close();
      queryClient.invalidateQueries(["users"]);
      setForm({
        full_name: "",
        email: "",
        present_address: "",
        phone_number: "",
        sex: "",
        civil_status: "",
      });
    },
    onError: (error) => {
      setErrorMessage("Something went wrong: " + error.message);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    mutation.mutate(form);
  };

  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        title="Add New User"
        className="bg-success hover:bg-green-700 text-white px-3 py-2 rounded cursor-pointer"
      >
        <IoPersonAdd size={20} />
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-3xl">
          {errorMessage && (
            <div role="alert" className="alert alert-error mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}
          <div className="flex border-b border-color-gray-300 pb-2 mb-3 justify-between items-center">
            <h3>Add New User</h3>
            <button
              onClick={handleSubmit}
              className="btn bg-success text-white hover:bg-green-700"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </button>
          </div>

          <div className="[&_input]:w-full">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mb-2">
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Full Name:</legend>
                <input
                  type="text"
                  name="full_name"
                  className="input"
                  placeholder="Full Name"
                  value={form.full_name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </fieldset>
            </div>

            <div className="grid grid-cols-1 mb-2">
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Permanent Address:</legend>
                <input
                  type="text"
                  name="present_address"
                  className="input"
                  placeholder="Permanent Address"
                  value={form.present_address}
                  onChange={handleChange}
                />
              </fieldset>
            </div>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-3 mb-2">
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Phone #:</legend>
                <input
                  type="text"
                  name="phone_number"
                  className="input"
                  placeholder="Phone #"
                  value={form.phone_number}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Sex:</legend>
                <select
                  name="sex"
                  className="select"
                  value={form.sex}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Civil Status</legend>
                <select
                  name="civil_status"
                  className="select"
                  value={form.civil_status}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddUserModal;
