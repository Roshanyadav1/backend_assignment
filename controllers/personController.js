const supabase = require('../config/supabase');

exports.createPerson = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('personal_details')
      .insert([req.body])
      .select();
    if (error) throw error;
    res.status(201).json({ status: 'success', data });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

exports.getPeople = async (req, res) => {
  try {
    const { name, location_name } = req.query;
    const isAdmin = req.headers['x-role'] === 'admin';
    
    let query = supabase.from('personal_details').select('*');
    if (name) query = query.ilike('name', `%${name}%`);
    if (location_name) query = query.ilike('location_name', `%${location_name}%`);

    const { data, error } = await query;
    if (error) throw error;

    // Apply Privacy Rules
    const results = data.map(p => isAdmin ? p : { ...p, mobile_number: 'RESTRICTED', address: 'RESTRICTED' });
    res.json({ status: 'success', data: results });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};