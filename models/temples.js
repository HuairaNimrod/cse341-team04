module.exports = (mongoose) => {
  const Temple = mongoose.model(
    'temples',
    mongoose.Schema(
      {
        temple_id: Number,
        additionalInfo: Boolean,
        name: String,
        location: String,
        dedicated: String,
      },
      { timestamps: true }
    )
  );

  return Temple;
};
