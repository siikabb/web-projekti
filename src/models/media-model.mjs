import db from '../../database/db.js'
  
  const listAllMedia = async () => {
    try {
      const [results, fields] = await db.execute('SELECT * FROM media_items');
      return results;
    } catch (error) {
      console.error('Error retrieving media items:', error);
      throw error;
    }
  };

  const addMedia = async (media) => {
    const {filename, title, description} = media;
    
    const sql = 'INSERT INTO media_items (filename, title, description) VALUES (?, ?, ?)';
    const values = [media.filename, media.title, media.description];
    const [results, fields] = await db.execute(sql, values);
    return results;
  };
  
  const findMediaById = async (id) => {
    const [results, fields] = await db.execute(`SELECT * FROM media_items WHERE media_id = ${id}`);
      return results;
  };

  const updateMediaById = async (id) => {
    const [results, fields] = await db.execute(`SELECT * FROM media_items WHERE media_id = ${id}`);
      return results;
  };
  
  
  export {listAllMedia, findMediaById, addMedia, updateMediaById};