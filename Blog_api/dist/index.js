"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const users_1 = __importDefault(require("./routes/users"));
const posts_1 = __importDefault(require("./routes/posts"));
const categories_1 = __importDefault(require("./routes/categories"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// "module": "NodeNext",
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.resolve(__dirname, "src/images")));
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
app.use("*", (req, res, next) => {
    res.json = (data) => res.type("json").send(JSON.stringify(data, null, 4));
    next();
});
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
app.get("/", (req, res) => {
    res.send("Hello World");
});
const upload = (0, multer_1.default)({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
app.use("/api/posts", posts_1.default);
app.use("/api/categories", categories_1.default);
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("Backend is running on " + port);
});
//# sourceMappingURL=index.js.map