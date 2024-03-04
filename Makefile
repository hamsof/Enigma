backend:
	cd backend && nest start -w

fronetend:
	cd frontend && npm start

# to ensure make doesn't look for a file named 'backend'
.PHONY: backend
.PHONY: frontend
