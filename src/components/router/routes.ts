import About from '../../pages/About';
import Posts from '../../pages/Posts';
import PostPage from '../../pages/PostPage';
import NotFound from '../../pages/NotFound'
import LoginPage from '../../pages/LoginPage';

export const privateRoutes = [
    { path: '/', component: Posts, exact: true },
    { path: '/about', component: About, exact: true },
    { path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: PostPage, exact: true },
    { path: '*', component: NotFound, exact: true }
]

export const publicRoutes = [
    { path: '/login', component: LoginPage, exact: true },
    { path: '*', component: LoginPage, exact: true }
]