"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const EditableTable = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    brief: "",
    price: "",
    category: "all",
    image: null,
  });
  const [newRowData, setNewRowData] = useState({
    title: "",
    brief: "",
    price: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  let token = null;

  if (isClient) {
    token = localStorage.getItem("userToken");
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://msg-website-pa8k.onrender.com:5000/api/v1/exhibition"
      );
      setData(response.data.exhibitions);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const handleFileChange = (e, isNew = false) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (isNew) {
          setNewRowData({ ...newRowData, image: reader.result });
        } else {
          setFormData({ ...formData, image: reader.result });
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = (id) => {
    const item = data.find((row) => row._id === id);
    setEditId(id);
    setFormData({
      title: item.title,
      brief: item.brief,
      price: item.price,
      category: item.category,
      image: null,
    });
  };

  const handleSave = async (id) => {
    const item = data.find((row) => row._id === id);
    const updatedData = new FormData();
    updatedData.append("title", formData.title);
    updatedData.append("brief", formData.brief);
    updatedData.append("price", formData.price);
    updatedData.append("category", formData.category);
    if (formData.image) {
      updatedData.append("image", formData.image);
    }

    try {
      const config = {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.put(
        `https://msg-website-pa8k.onrender.com:5000/api/v1/exhibition/update/${id}`,
        updatedData,
        config
      );
      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? response.data.exhibition : item
        )
      );
      setEditId(null);
      setFormData({
        title: "",
        brief: "",
        price: "",
        category: "",
        image: null,
      });
    } catch (err) {
      console.error("Error saving data", err);
    }
  };

  const handleDelete = async (id) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    try {
      await axios.delete(
        `https://msg-website-pa8k.onrender.com:5000/api/v1/exhibition/remove/${id}`,
        config
      );
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting data", err);
    }
  };

  const handleAdd = async () => {
    const newData = new FormData();
    newData.append("title", newRowData.title);
    newData.append("brief", newRowData.brief);
    newData.append("price", newRowData.price);
    newData.append("category", newRowData.category);
    if (newRowData.image) {
      newData.append("image", newRowData.image);
    } else {
      console.log("No new image");
    }

    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const response = await axios.post(
        "https://msg-website-pa8k.onrender.com:5000/api/v1/exhibition/add",
        newData,
        config
      );
      setData([...data, response.data.exhibition]);
      setNewRowData({
        title: "",
        brief: "",
        price: "",
        category: "",
        image: null,
      });
    } catch (err) {
      console.error("Error adding data", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editId !== null) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewRowData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Box sx={{ pt: 10, pl: 5, pr: 5 }}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Brief</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>
                  {editId === row._id ? (
                    <TextField
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      size="small"
                    />
                  ) : (
                    row.title
                  )}
                </TableCell>
                <TableCell>
                  {editId === row._id ? (
                    <TextField
                      name="brief"
                      value={formData.brief}
                      onChange={handleChange}
                      size="small"
                    />
                  ) : (
                    row.brief
                  )}
                </TableCell>
                <TableCell>
                  {editId === row._id ? (
                    <TextField
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      size="small"
                    />
                  ) : (
                    row.price
                  )}
                </TableCell>
                <TableCell>
                  {editId === row._id ? (
                    <TextField
                      select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      size="small"
                    >
                      <MenuItem value="Whimsical">Whimsical</MenuItem>
                      <MenuItem value="Landscape">Landscape</MenuItem>
                      <MenuItem value="Figures">Figures</MenuItem>
                    </TextField>
                  ) : (
                    row.category
                  )}
                </TableCell>
                <TableCell>
                  {editId === row._id ? (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e)}
                    />
                  ) : (
                    row.image && (
                      <img src={row.image.url} alt="object" width="50" />
                    )
                  )}
                </TableCell>
                <TableCell>
                  {editId === row._id ? (
                    <IconButton onClick={() => handleSave(row._id)}>
                      <SaveIcon fontSize="small" />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(row._id)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row._id)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  name="title"
                  value={newRowData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="brief"
                  value={newRowData.brief}
                  onChange={handleChange}
                  placeholder="Brief"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="price"
                  value={newRowData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <TextField
                  select
                  name="category"
                  value={newRowData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  size="small"
                >
                  <MenuItem value="Whimsical">Whimsical</MenuItem>
                  <MenuItem value="Landscape">Landscape</MenuItem>
                  <MenuItem value="Figures">Figures</MenuItem>
                </TextField>
              </TableCell>
              <TableCell>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, true)}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAdd}
                  startIcon={<AddIcon />}
                  size="small"
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EditableTable;
