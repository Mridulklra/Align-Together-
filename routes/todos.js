// const express = require('express');
// const Todo = require('../models/Todo');
// const auth = require('../middleware/auth');

// const router = express.Router();

// router.get('/', auth, async (req, res) => {
//   try {
//     const { status } = req.query;
//     const filter = { userId: req.userId };
    
//     if (status && status !== 'all') {
//       filter.status = status;
//     }

//     const todos = await Todo.find(filter).sort({ createdAt: -1 });
//     res.json({ todos });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/', auth, async (req, res) => {
//   try {
//     const { title, description } = req.body;

//     if (!title) {
//       return res.status(400).json({ message: 'Title is required' });
//     }

//     const todo = await Todo.create({
//       title,
//       description,
//       userId: req.userId
//     });

//     res.status(201).json({ todo });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.put('/:id', auth, async (req, res) => {
//   try {
//     const todo = await Todo.findOne({ _id: req.params.id, userId: req.userId });

//     if (!todo) {
//       return res.status(404).json({ message: 'Todo not found' });
//     }

//     const { title, description, status } = req.body;
    
//     if (title) todo.title = title;
//     if (description !== undefined) todo.description = description;
//     if (status) todo.status = status;

//     await todo.save();
//     res.json({ todo });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });

//     if (!todo) {
//       return res.status(404).json({ message: 'Todo not found' });
//     }

//     res.json({ message: 'Todo deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;