import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/layouts/Layout'

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route exact path="/account" element={<AccountPage />} />
                    <Route exact path="/projects" element={<ProjectsPage />} />
                    <Route exact path="/project/:projectId" element={<ProjectPage />} />
                    <Route exact path="/admin/users" element={<UsersPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>

        </Router >
    )
}