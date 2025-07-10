import { IoPersonAdd } from "react-icons/io5";

const AddUserModal = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        title="Add New User"
        className="bg-primary hover:bg-violet-900 text-white px-4 py-1 rounded text-sm cursor-pointer"
      >
        <IoPersonAdd size={20} />
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-3xl">
          <div className="flex border-b border-color-gray-300 pb-2 mb-3 justify-between items-center">
            <h3>Add User Form</h3>
            <button className="btn bg-success">Submit</button>
          </div>
          <div className="[&_input]:w-full">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mb-2">
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Full Name:</legend>
                <input type="text" className="input" placeholder="Full Name" />
              </fieldset>

              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Email</legend>
                <input type="email" className="input" placeholder="Email" />
              </fieldset>
            </div>

            <div className="grid grid-cols-1 mb-2">
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Permanent Address:</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="Permanent Address"
                />
              </fieldset>
            </div>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-3 mb-2">
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Phone #:</legend>
                <input type="text" className="input" placeholder="Phone #" />
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Sex:</legend>
                <select defaultValue="" className="select">
                  <option value={""} disabled={true}>
                    Select Option
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </fieldset>
              <fieldset className="fieldset p-0">
                <legend className="fieldset-legend">Civil Status</legend>
                <select defaultValue="" className="select">
                  <option value={""} disabled={true}>
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
