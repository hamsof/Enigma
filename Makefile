backend:
	cd backend && nest start -w

# to ensure make doesn't look for a file named 'backend'
.PHONY: backend