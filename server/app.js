const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const db = require('./models');

app.use(express.json())
app.use(cors());


const postRouter = require('./routes/Posts');
const commentRouter = require('./routes/Comments');
const userRouter = require('./routes/Users');


app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/users", userRouter);






db.sequelize.sync().then(() => {

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });

})