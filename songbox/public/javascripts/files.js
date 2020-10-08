const fetchDropbox = async (token) => {
    const data = {
        token
    }

    const response = await fetch('http://localhost:3000/users/files', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}