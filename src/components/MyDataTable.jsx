import { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import DataTable from "react-data-table-component";

import AddUserModal from "./modals/AddUserModal";
import EditUserModal from "./modals/EditUserModal";

const fetchUsers = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/get-users");
  return res.data;
};

const MyDataTable = () => {
  const queryClient = useQueryClient();
  const [editUser, setEditUser] = useState(null);

  const [search, setSearch] = useState("");
  const [filterSex, setFilterSex] = useState("");
  const [filterCivilStatus, setfilterCivilStatus] = useState("");

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`http://127.0.0.1:8000/api/delete-users/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  const filteredUsers = users
    .filter((user) =>
      JSON.stringify(user).toLowerCase().includes(search.toLowerCase())
    )
    .filter((user) =>
      filterSex ? user.sex.toLowerCase() === filterSex.toLowerCase() : true
    )
    .filter((user) =>
      filterCivilStatus
        ? user.civil_status.toLowerCase() === filterCivilStatus.toLowerCase()
        : true
    );
  const columns = [
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-1">
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded text-xs hover:bg-yellow-700 cursor-pointer"
            onClick={() => setEditUser(row)}
          >
            ✏️
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-700 cursor-pointer"
            onClick={() => deleteMutation.mutate(row.id)}
          >
            🗑️
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "130px",
    },
    { name: "Full Name", selector: (row) => row.full_name, sortable: true },
    { name: "Phone #", selector: (row) => row.phone_number, sortable: true },
    { name: "Sex", selector: (row) => row.sex, sortable: true },
    {
      name: "Civil Status",
      selector: (row) => row.civil_status,
      sortable: true,
    },
    {
      name: "Present Address",
      selector: (row) => row.present_address,
      sortable: true,
    },
    { name: "Email", selector: (row) => row.email, sortable: true },
  ];

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-600">Error fetching users</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center p-2 rounded bg-white mb-4">
        <h2 className="text-xl font-bold">CRUD Function</h2>
      </div>

      <div className="bg-white rounded-md shadow p-2">
        <div className="flex justify-between items-center p-2 rounded bg-white mb-4">
          <div className="flex gap-1">
            <div className="flex flex-col">
              <span className="text-xs p-1">Filter by Sex</span>
              <select
                className="border rounded px-2 py-1 border-gray-500 focus:outline-none focus:ring-2"
                value={filterSex}
                onChange={(e) => setFilterSex(e.target.value)}
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs p-1">Filter by Civil Status</span>
              <select
                className="border rounded px-2 py-1 border-gray-500 focus:outline-none focus:ring-2"
                value={filterCivilStatus}
                onChange={(e) => setfilterCivilStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
          </div>
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded pl-2 border-gray-500 focus:outline-none focus:ring-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AddUserModal />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredUsers}
          pagination
          highlightOnHover
          dense
          persistTableHead
        />
      </div>

      {/* Edit Modal */}
      {editUser && (
        <EditUserModal
          selectedUser={editUser}
          onClose={() => setEditUser(null)}
        />
      )}
    </div>
  );
};

export default MyDataTable;
