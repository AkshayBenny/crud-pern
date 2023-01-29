import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import morgan from 'morgan'

const app = express()
dotenv.config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('tiny'))

const prisma = new PrismaClient()

// GET /api   =>   Get all users
app.get('/api', async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany()
		res.json(users)
	} catch (error) {
		console.log(error)
		res.json({ message: 'Error fetching users', error })
	}
})

// GET /api/:id   =>   Get one user according to id
app.get('/api/:id', async (req: Request, res: Response) => {
	const uid = parseInt(req.params.id)
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: uid,
			},
		})
		res.json(user)
	} catch (error) {
		console.log(error)
		res.json({ message: 'Error fetching user', error })
	}
})

// POST /api/   =>   Create new user
app.post('/api', async (req: Request, res: Response) => {
	const { username, password } = req.body
	const uid = Math.floor(Math.random() * 1000000)
	try {
		const user = await prisma.user.create({
			data: {
				id: uid,
				username: username,
				password: password,
			},
		})
		res.json(user)
	} catch (error) {
		console.log(error)
		res.json({ message: 'Error', error })
	}
})

// PUT /api/:id   =>   Update one user according to id
app.put('/api/:id', async (req: Request, res: Response) => {
	const uid = parseInt(req.params.id)
	const { username, password } = req.body
	try {
		const user_exists = await prisma.user.findUnique({
			where: {
				id: uid,
			},
		})
		if (user_exists) {
			const updated_user = await prisma.user.update({
				where: {
					id: uid,
				},
				data: {
					username: username || user_exists.username,
					password: password || user_exists.password,
				},
			})

			res.json(updated_user)
		}
	} catch (error) {
		console.log(error)
		res.json({ message: 'Error updating user', error })
	}
})

// DELETE /api/:id   =>   Delete one user according to id
app.delete('/api/:id', async (req: Request, res: Response) => {
	const uid = parseInt(req.params.id)
	try {
		const deleted_user = await prisma.user.delete({
			where: {
				id: uid,
			},
		})
		res.json(deleted_user)
	} catch (error) {
		console.log(error)
		res.json({ message: 'Error deleting user', error })
	}
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
