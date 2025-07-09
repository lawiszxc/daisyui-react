import DataTable from "react-data-table-component";
import { IoPersonAdd } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/get-users");
  return response.data;
};

const columns = [
  {
    name: "Full Name",
    selector: (row) => row.full_name,
    sortable: true,
  },
  {
    name: "Phone #",
    selector: (row) => row.phone_number,
    sortable: true,
  },
  {
    name: "Sex",
    selector: (row) => row.sex,
    sortable: true,
  },
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
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
];

const MyDataTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-600">Error fetching users</div>;

  return (
    <>
      <DataTable
        title={<h2 className="font-bold">CRUD Function</h2>}
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        persistTableHead
        actions={
          <div className="flex gap-2 mr-3">
            <button
              title="Add New User"
              className="bg-primary hover:bg-violet-900 text-white px-4 py-1 rounded text-sm cursor-pointer"
            >
              <IoPersonAdd size={20} />
            </button>
          </div>
        }
      />
    </>
  );
};

export default MyDataTable;
