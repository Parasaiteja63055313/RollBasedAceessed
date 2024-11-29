exports.getAdminData = (req, res) => {
    res.status(200).json({ message: 'Admin access granted', data: 'Sensitive admin data' });
};
