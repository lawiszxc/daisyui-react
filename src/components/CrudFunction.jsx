import { useState } from "react";
import axios from "../axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";

import AddUserModal from "./modals/AddUserModal";
import EditUserModal from "./modals/EditUserModal";

const CRUDFunction = () => {
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filterSex, setFilterSex] = useState("");
  const [filterCivilStatus, setfilterCivilStatus] = useState("");

  const queryClient = useQueryClient();

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/get-users");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`/delete-users/${id}`),
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

  const customStyles = {
    cells: {
      style: {
        padding: "10px",
        margin: "2px",
        maxHeight: "500px",
      },
    },
  };

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
          <button
            className="btn btn-primary hover:bg-violet-900"
            onClick={() => exportToExcel(row)}
          >
            Download
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "200px",
    },
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Phone #",
      selector: (row) => row.phone_number,
      sortable: true,
      wrap: true,
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
      sortable: true,
      wrap: true,
    },
    {
      name: "Civil Status",
      selector: (row) => row.civil_status,
      sortable: true,
      wrap: true,
    },
    {
      name: "Present Address",
      selector: (row) => row.present_address,
      sortable: true,
      wrap: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      wrap: true,
    },
  ];

  const exportToExcel = (user) => {
    const ws = XLSX.utils.aoa_to_sheet([]);

    ws["B10"] = { v: user.full_name };
    ws["B12"] = { v: user.phone_number };
    ws["B14"] = { v: user.sex };
    ws["B16"] = { v: user.civil_status };
    ws["B18"] = { v: user.present_address };
    ws["B20"] = { v: user.email };

    ws["!ref"] = "A1:C30";

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "User Info");
    XLSX.writeFile(wb, `user_${user.full_name}.xlsx`);
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-600">Error fetching users</div>;

  return (
    <div className="p-4 hidden lg:block">
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
          <div className="flex gap-1 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="flex h-8 w-xs border rounded pl-2 border-gray-500 focus:outline-none focus:ring-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AddUserModal />
          </div>
        </div>
        <DataTable
          style={{ overflowX: "auto" }}
          columns={columns}
          data={filteredUsers}
          pagination
          highlightOnHover
          dense
          persistTableHead
          fixedHeader
          fixedHeaderScrollHeight="400px"
          customStyles={customStyles}
        />
      </div>

      {/* {drivers.map((user) => (
        <h1 key={user.id}>{user.full_name}</h1>
      ))} */}

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

export default CRUDFunction;
