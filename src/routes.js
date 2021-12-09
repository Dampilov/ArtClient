import Admin from './pages/Panel'
import MyLikes from './pages/MyLikes'
import MyArt from './pages/MyArt'
import Main from './pages/Main'
import ArtPage from './pages/ArtPage'
import Auth from './pages/Auth'
import {ADMIN_ROUTE, MYLIKES_ROUTE, MYART_ROUTE, MAIN_ROUTE, ART_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ANY_ROUTE} from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: Admin
    },
    {
        path: MYLIKES_ROUTE,
        element: MyLikes
    },
    {
        path: MYART_ROUTE,
        element: MyArt
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: Main
    },
    {
        path: ART_ROUTE + '/:id',
        element: ArtPage
    },
    {
        path: LOGIN_ROUTE,
        element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        element: Auth
    },
    {
        path: ANY_ROUTE,
        element: Main
    }
]