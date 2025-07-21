import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../axios";
import { useState } from "react";

const Dashboard = () => {
  const {
    data: people = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await axios.get("/get-persons");
      return response.data;
    },
  });

  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    full_name: "",
    sex: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const postMutation = useMutation({
    mutationFn: async (newData) => {
      const response = await axios.post("/post-person", newData);
      return response.data;
    },
    onSuccess: () => {
      setForm({
        full_name: "",
        sex: "",
      });
      queryClient.invalidateQueries(["people"]);
    },
    onError: (error) => {
      console.error("Error submitting form:", error.message);
    },
  });

  const postHandleSubmit = () => {
    postMutation.mutate(form);
  };

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`/delete-person/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["people"]),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  if (people.length === 0) return <div>No Data Fetching</div>;

  return (
    <>
      {people.map((person) => (
        <div key={person.id} className="flex">
          <h1>
            I am {person.full_name} and I'm a {person.sex}
          </h1>
          <button className="btn btn-warning">Edit</button>
          <button
            onClick={() => deleteMutation.mutate(person.id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
        </div>
      ))}

      <div className="grid grid-cols-3 mt-4">
        <div className="grid">
          <label htmlFor="full_name">Full Name:</label>
          <input
            className="input"
            type="text"
            id="full_name"
            name="full_name"
            value={form.full_name}
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
        </div>

        <div className="grid">
          <label htmlFor="sex">Sex:</label>
          <select
            id="sex"
            className="select cursor-pointer"
            name="sex"
            value={form.sex}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={postHandleSubmit}
            className="btn hover:bg-green-600 btn-success text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
