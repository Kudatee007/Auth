const notFound = (req, res) => {
    res.status(404).json({
        succes: false,
        msg: err
    })
};