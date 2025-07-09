import DataTable from "react-data-table-component";
import { IoPersonAdd } from "react-icons/io5";

const data = [
  {
    id: 1,
    name: "Mark Lawis",
    email: "mark@example.com",
  },
  {
    id: 2,
    name: "Anna Cruz",
    email: "anna@example.com",
  },
  {
    id: 3,
    name: "Rosalinda L. Gallogo",
    email: "gallogo@example.com",
  },
  {
    id: 4,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 5,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 6,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 7,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 8,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 9,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 10,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 11,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 12,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 13,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
  {
    id: 14,
    name: "Ryanle G. Lawis",
    email: "ryanle@example.com",
  },
];

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
];

const MyDataTable = () => {
  return (
    <>
      <DataTable
        title={<h2 className="font-bold">CRUD Function</h2>}
        columns={columns}
        data={data}
        pagination
        actions={
          <div className="flex gap-2 mr-3">
            <button className="bg-primary hover:bg-violet-900 text-white px-4 py-1 rounded text-sm cursor-pointer">
              <IoPersonAdd size={20} />
            </button>
          </div>
        }
      />
    </>
  );
};

export default MyDataTable;
