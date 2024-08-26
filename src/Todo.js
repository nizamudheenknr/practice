// import React, { useState } from 'react';

// const Form = () => {
//   const [add, setAdd] = useState([]);
//   const [input, setInput] = useState('');
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState('');

//   const setHandler = () => {
//     if (editId) {
//       setAdd(add.map((x) => (x.id === editId ? { ...x, task: editText } : x)));
//       setEditId(null);
//       setEditText('');
//     } else {
//       setAdd([...add, { id: Date.now(), task: input }]);
//       setInput('');
//     }
//   };

//   console.log(add);

//   const deleteHandler = (id) => {
//     const deleted = add.filter((x) => x.id !== id);
//     setAdd(deleted);
//   };

//   const editHandler = (id, task) => {
//     setEditId(id);
//     setEditText(task);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <input
//         style={{ padding: '8px', width: 'calc(100% - 20px)', marginBottom: '10px' }}
//         value={editId ? editText : input}
//         onChange={(e) => (editId ? setEditText(e.target.value) : setInput(e.target.value))}
//         type='text'
//       />
//       <button
//         style={{ padding: '10px 20px', marginBottom: '10px', display: 'block', width: '100%', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}
//         onClick={setHandler}
//       >
//         {editId ? 'Save' : 'Add'}
//       </button>
//       {add.map((item) => (
//         <div key={item.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
//           <h1 style={{ fontSize: '18px', margin: '0 0 10px' }}>{item.task}</h1>
//           <button
//             style={{ padding: '5px 10px', marginRight: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
//             onClick={() => deleteHandler(item.id)}
//           >
//             Delete
//           </button>
//           <button
//             style={{ padding: '5px 10px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '4px' }}
//             onClick={() => editHandler(item.id, item.task)}
//           >
//             Edit
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Form;
