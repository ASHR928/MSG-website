"use client";

import React, { useState } from 'react';
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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const initialData = [
  { id: 1, title: 'Item 1', brief: 'Brief 1', price: 10 },
  { id: 2, title: 'Item 2', brief: 'Brief 2', price: 20 },
];

const EditableTable = () => {
    const [newPhoto, setNewPhoto] = useState(null);
    const [formDataPhoto, setFormDataPhoto] = useState(null);
  
    const handleFileChange = (e, isNew = false) => {
      if (isNew) {
        setNewPhoto(e.target.files[0]);
      } else {
        setFormDataPhoto(e.target.files[0]);
      }
    };

  const [data, setData] = useState(initialData);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', brief: '', price: '' });
  const [newRowData, setNewRowData] = useState({ title: '', brief: '', price: '' });

  const handleEdit = (id) => {
    const item = data.find((row) => row.id === id);
    setEditId(id);
    setFormData({ title: item.title, brief: item.brief, price: item.price });
  };

  const handleSave = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, ...formData } : item
      )
    );
    setEditId(null);
    setFormData({ title: '', brief: '', price: '' });
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const newItem = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      title: newRowData.title,
      brief: newRowData.brief,
      price: newRowData.price,
    };
    setData([...data, newItem]);
    setNewRowData({ title: '', brief: '', price: '' });
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
   <Box sx={{ pt: 10,pl:5,pr:5 }}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Brief</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {editId === row.id ? (
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
                  {editId === row.id ? (
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
                  {editId === row.id ? (
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
                  {editId === row.id ? (
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e)}
                    />
                  ) : (
                    row.photo && <img src={URL.createObjectURL(row.photo)} alt="photo" width="50" />
                  )}
                </TableCell>
                <TableCell>
                  {editId === row.id ? (
                    <IconButton onClick={() => handleSave(row.id)}>
                      <SaveIcon fontSize="small" />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(row.id)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row.id)}>
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
