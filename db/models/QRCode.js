const { default: mongoose } = require("mongoose");

const qrCodeSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const QRCode = mongoose.models["QRCode"] || mongoose.model("QRCode", qrCodeSchema);

export default QRCode;
