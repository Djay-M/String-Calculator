module.exports = {
  apps: [
    {
      name: "string-calculator 1",
      cwd: "./",
      script: "npm",
      args: "run dev",
      env: {
        ENV: "development",
        PORT: 7000,
      },
    },
    {
      name: "string-calculator 2",
      cwd: "./",
      script: "npm",
      args: "run dev",
      env: {
        ENV: "development",
        PORT: 9000,
      },
    },
  ],
};
