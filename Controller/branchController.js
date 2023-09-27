const Branch = require('../Models/branchModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllBranches = async (req, res) => {
  try {
    const features = new APIFeatures(Branch.find(), req.query)
      .filter()
      .sort()
      .fields()
      .paginate();

    const branch = await features.query;

    res.status(200).json({
      status: 'success',
      results: branch.length,
      data: {
        branch,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
