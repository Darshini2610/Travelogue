
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Memory = require('./model');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/memories', async (req, res) => {
  try {
    const memories = await Memory.find();
    const memoriesWithImages = memories.map(memory => {
      const imageBase64 = memory.image.toString('base64');
      return {
        ...memory._doc,
        image: `data:image/png;base64,${imageBase64}`,
      };
    });
    res.json(memoriesWithImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/memories/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid ID format.' });
    }

    // Find the memory by ID
    const memory = await Memory.findById(id);

    if (!memory) {
      return res.status(404).json({ error: 'Memory not found.' });
    }

    res.json(memory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/memories', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file;

    if (!title || !description || !image) {
      return res.status(400).json({ error: 'Please provide title, description, and image.' });
    }

    const newMemory = new Memory({
      title,
      description,
      image: image.buffer,
    });

    const savedMemory = await newMemory.save();

    res.status(201).json(savedMemory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/memories/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid ID format.' });
    }

    const deletedMemory = await Memory.findByIdAndDelete(id);

    if (!deletedMemory) {
      return res.status(404).json({ error: 'Memory not found.' });
    }

    res.json({ message: 'Memory deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/memories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid ID format.' });
    }

    const updatedMemory = await Memory.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedMemory) {
      return res.status(404).json({ error: 'Memory not found.' });
    }

    res.json(updatedMemory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
