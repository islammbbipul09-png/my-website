export default function handler(req, res) {
  // Mock data (API স্লো হলে অন্তত এই ডাটা শো করবে)
  const data = [
    { period: "20230927001", number: 2, bigSmall: "Small", color: "Red" },
    { period: "20230927002", number: 8, bigSmall: "Big", color: "Green" },
    { period: "20230927003", number: 5, bigSmall: "Small", color: "Violet" }
  ];

  res.status(200).json(data);
}
