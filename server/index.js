    const express = require("express");
    const dotenv = require("dotenv");
    const cookieParser = require('cookie-parser');
    const cors = require("cors");
    const userRouter = require("./routes/userRoutes")
    dotenv.config();

    const app = express();

    const PORT = process.env.PORT || 3000;

    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });

    app.use("/api/user", userRouter);

