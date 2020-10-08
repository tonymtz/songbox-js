const findCookie = (cookies, name) => {
    if (cookies) {
        const cookiesArray = cookies.split(' ')
        if (cookiesArray.length > 0) {
            const foundCookie = cookiesArray.find((value) => value.startsWith(name))

            if (foundCookie) {
                const indexOfequal = foundCookie.indexOf("=")

                const cookieName = foundCookie.substring(0, indexOfequal)
                const cookieValue = foundCookie.substring(indexOfequal + 1, foundCookie.length)

                if (cookieName !== name) return ""

                return cookieValue
            } else {

                return ""
            }
        }
    }

    return ""
}
