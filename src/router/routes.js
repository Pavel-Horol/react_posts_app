import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: <About/>, id: 1},
    {path: '/posts', component: <Posts/>, id: 2},
    {path: '/posts/:id', component: <PostIdPages/>, id: 3},
]
export const publicRoutes = [
    {path: '/login', component: <Login/>, id: 1},

] 
