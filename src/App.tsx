import React from 'react'
import { AuthProvider } from './hoc/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'
import AllBooksPage from './pages/AllBooksPage'
import SingleBookPage from './pages/SingleBookPage'
import { SearchPage } from './pages/SearchPage'

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<AllBooksPage />} />
						<Route path='books/:bookId' element={<SingleBookPage />} />
						<Route path='search' element={<SearchPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
