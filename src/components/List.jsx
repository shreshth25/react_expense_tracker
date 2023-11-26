// List.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpense,updateExpense } from '../store/slices/ExpenseSlice';

const List = () => {
  const expenses = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({ id: '', name: '', amount: '' });

  const handleDel = (id) => {
    dispatch(removeExpense(id));
  };

  const handleEdit = (expense) => {
    setEditData({ id: expense.id, name: expense.name, amount: expense.amount });
  };

  const handleUpdate = () => {
    dispatch(updateExpense(editData));
    setEditData({ id: '', name: '', amount: '' });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <th scope="row">{expense.name}</th>
              <td>{expense.amount}</td>
              <td>
                <h5 type="button" className="badge bg-danger" onClick={() => handleDel(expense.id)}>
                  Delete
                </h5>
              </td>
              <td>
                <h5
                  type="button"
                  className="badge bg-primary"
                  onClick={() => handleEdit(expense)}
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Edit
                </h5>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='modal fade' id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit Expense
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Edit form */}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  value={editData.amount}
                  onChange={(e) => setEditData({ ...editData, amount: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
